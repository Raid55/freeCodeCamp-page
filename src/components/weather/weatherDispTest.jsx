// // import dotenv from 'dotenv'
// // dotenv.config()
// import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Forecast from 'react-forecast';
// // import { Link } from 'react-router'
//
// const style = {
//   infoBlock: {
//     width:"14.28%",
//     height:"65px",
//     borderRadius: "10%",
//     backgroundColor: "rgb(64, 157, 209)",
//     margin: "12px"
//   },
//   outterBlock: {
//     display: "flex",
//     flexDirection: "row"
//   },
//   weatherAnnouncer:{
//     fontSize: "19px",
//     color: "white",
//     height:"25%",
//     width:"100%",
//     backgroundColor:"tomato"
//   },
//   weatherData:{
//     height:"75%",
//     width:"100%",
//     backgroundColor:"red"
//   }
// }
//
// export default class extends Component {
//   state={
//     err: false,
//   }
//
//   fetchInfo = () => {
//   var CORS = 'https://crossorigin.me/';
//   const GOOGLE_MAPS_API_KEY = "AIzaSyAulehec9LJQ7r9rQlyVvZT-Joo3m_ZD5o";
//   const DARKSKY_API_KEY = "f558f6da21af18f4f3088ca2769e0cb4";
//   const { city } = this.props.params
//   const that = this;
//
//   function getWeather(cords) {
//     return(
//       fetch(`${CORS}https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${cords.lat},${cords.lng}`)
//       .then(res => res.json())
//     );
//   }
//
//   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_MAPS_API_KEY}`)
//     .then(res => res.json())
//     .then(data => data.results[0].geometry.location)
//     .then(getWeather)
//     .then((data) => {
//       console.log(data);
//       that.setState({
//         city: city,
//         forecast: data
//       })
//     })
//   }
//
//   componentDidUpdate(prevProps, prevState){
//     if(prevProps.params.city !== this.props.params.city){
//       this.fetchInfo()
//     }
//   }
//
//   componentDidMount(){
//     this.fetchInfo()
//   }
//
//   render(){
//     const { city, forecast } = this.state
//     if(!forecast){
//       return (
//         <div>
//           LOADING...
//         </div>
//       )
//     }else if(this.state.err === true){
//       return (
//         <div>
//           TWAS THE NIGHT BEFORE X-MAS AND AN ERROR WAS FOUND UNDER THE MISTELTOES... yea the misteltoes...
//         </div>
//       )
//     }else{
//       return (
//         <div className="weatherHolderBox">
//           <MuiThemeProvider>
//             <Card>
//               <CardTitle title={`Today's Weather for ${city}`} subtitle={forecast.currently.summary} />
//               <CardText>
//                 <div style={style.outterBlock}>
//                   <div style={style.infoBlock}>
//                     <div className={style.weatherAnnouncer}>Avr Temp</div>
//                     <div className={style.weatherData}>Avr Temp</div>
//                   </div>
//                   <div style={style.infoBlock}>
//                     <div className={style.weatherAnnouncer}>Hi/Lowest Temp</div>
//                     <div className={style.weatherData}>Avr Temp</div>
//                   </div>
//                   <div style={style.infoBlock}>
//                     <div className={style.weatherAnnouncer}>Humidity</div>
//                     <div className={style.weatherData}>Avr Temp</div>
//                   </div>
//                   <div style={style.infoBlock}>
//                     <div className={style.weatherAnnouncer}>Wind Speed</div>
//                     <div className={style.weatherData}>Avr Temp</div>
//                   </div>
//                   <div style={style.infoBlock}>
//                     <div className={style.weatherAnnouncer}>Visibility"</div>
//                     <div className={style.weatherData}>Avr Temp</div>
//                   </div>
//                 </div>
//               </CardText>
//               <CardTitle title="Today's Weather"/>
//             </Card>
//           </MuiThemeProvider>
//         </div>
//       )
//     }
//   }
// }
//
// // cityWeather.innerText = 'Current temperature: ' + weather.temperature
// // Loading...Please hold on to your pants.
