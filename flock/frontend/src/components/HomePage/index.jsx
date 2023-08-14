import React from 'react';
import Event from '../Event'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePage(props) {

    if (props.events.length === 0) {
        return <div>Loading...</div>;
        
      }else {

        const filteredEvents = props.events.filter(
          (event, index, self) =>
                    index === self.findIndex((e) => e.name === event.name && e.dates.status.code !== 'cancelled')

        );
    
        const carouselSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1, 
            slidesToScroll: 1,
          };

          return (
            
            <div className="homepage">

              <Slider {...carouselSettings}>

              {filteredEvents.map((element, i) => (
            <div key={i}>
              <Event events={element} updateDetails={props.setDetailsData} index={i} />
            </div>

                ))}

              </Slider>

            </div>

          );
        }
      }
      