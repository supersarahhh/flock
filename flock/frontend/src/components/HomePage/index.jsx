import Event from '../Event'

export default function HomePage(props) {

    if (props.events.length === 0) {
        return <div>Loading...</div>;
        
      }else {
    
    return (

    <>

        <h1>"Birds of a Feather Flock Together"</h1>
            {
                
                props.events.map((element, i) => (
           
                    <Event 
                    key={i}
                    events={element}
                    updateDetails={props.setDetailsData}
                    index={i}

                    />

                )
            )
            
        }

        </>
      
    )
      }
}
