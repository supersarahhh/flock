import { Link } from 'react-router-dom'

export default function Event({ events, updateDetails, index }) {

  console.log(index)

  return (
    

    <div>
      
          <h2>{events.name}</h2>
          <h4>url:</h4>

          {/* {events.url && Object.values(events.url).map((url, index) => ( */}

<Link to={`/details/${index}`}
      onClick={() => { updateDetails(events) }} >
  
  <p href={events.url}>{events.url}</p>
  
  </Link>
              {/* ))} */}

            <br></br>
          {events.images && events.images.length > 0 && (
            <img src={events.images[0].url} alt={`Image 1`} />
              )}

  </div>

  );
}
