import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] =  useState("");
    let [error, setError] =  useState(false);

    // USE YOUR API_URL 
    const API_URL = "";

    // USE YOUR API_KEY
    const API_KEY = "";

    let getWeatherInfo = async () => {
try {
    let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); 
    let jsonResponse = await response.json();

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feels_Like: jsonResponse.main.feels_Like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
}catch(err) {
    throw err;
}
    };
    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSumbmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        }catch(err) {
            setError(true);
        }
        
    };

    return (
        <div className='SearchBox'>
        <form onSubmit={handleSumbmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="Submit">Submit</Button>
        {error && <p style={{color: "red"}}>No such place exists!!</p>}
        </form>
        </div>
    );
}