import Event from '../Event'

export default function HomePage(props) {

    if (props.event.length === 0) {
        return <div>Loading...</div>;
        
      }else {
    
    return (

    <>

        <h1>"Birds of a Feather Flock Together"</h1>
            {
                
                props.event.map((element, i) => (
           
                    <Event 
                    key={i}
                    event={element}
                    updateDetails={props.setDetailsData}

                    />

                )
            )
            
        }

        </>
      
    )
      }
}
