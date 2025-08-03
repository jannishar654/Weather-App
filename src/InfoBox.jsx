import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    let initUrl = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"; 
    
    return(
        <div className="infoBox">
            <h2> Weather Info  </h2>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={initUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p> Temperature = {info.temp}&deg;C</p>
          <p> Humidity = {info.humidity}</p>
          <p> Min Temperature = {info.tempMin}&deg;C</p>
          <p> Max Temperature = {info.tempMax}&deg;C</p>
          <p> The Whether can be described as {info.weather} and it feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}