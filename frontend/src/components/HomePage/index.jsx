import React from 'react';
import Event from '../Event'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Spotify } from 'react-spotify-embed';

export default function HomePage(props) {

    if (props.events.length === 0) {
        return <div>Loading...</div>;
        
      }else {

        const filteredEvents = props.events.filter(
          (event, index, self) =>
             index === self.findIndex((e) => 
               e.name === event.name && e.dates.status.code !== 'cancelled')
        );
    
        const carouselSettings = {
            play: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1, 
            slidesToScroll: 1,
          };

          return (
                       
            <div className="homepage">
              <br></br>
              <br></br>
              
              <h3> Featured Events in LA 🌴 </h3>
              <Slider className="slider" {...carouselSettings}>

              {filteredEvents.map((element, i) => (

                  <div key={i}>

                    <Event events={element} 
                    updateDetails={props.setDetailsData} 

                    />

                  </div>

                ))}

              </Slider>

              <p> -- click an image to view details -- </p>

                <div className="slider" >
                <br></br>

                <h3 className="hmeSpotify"> This Month's Featured Track Inspired by Our LA Events</h3>
                <br></br>

              <Spotify height="152px" width="80%" link="https://open.spotify.com/album/1KNyxPSXQoZJ2KMQySCUUo?si=S32SaZglQh-RwW39jgn3iA" />

        </div>
    </div>

          );
        }
      }
      