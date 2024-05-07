import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}){
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXxQvLvwP7Ibx4dqQ1cc4k0VxyWge1trSvw&usqp=CAU";

    return (
        <div className='InfoBox'>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}</p>
        <p>Max Temp = {info.tempMax}C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.temp}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}