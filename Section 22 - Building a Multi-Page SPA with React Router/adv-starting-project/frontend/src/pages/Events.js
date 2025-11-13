import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage2() {
    const data = useLoaderData();

    /*
    if(data.isError) {
        return <p>{data.message}</p>
    }
    */

    const events = data.events;
    
    return (
        <>
            <EventsList events={events}/>
        </>
    );
}

function EventsPage() {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    
    if(!response.ok) {
        // return { isError: true, message: "Could not fetch events" }
        // throw { message: "Could not fetch events" };
        
        throw new Response(JSON.stringify({ message: "Could not fetch events" }), { status: 500 });
        
        // throw json({ message: "Could not fetch events" }, { status: 500 });
    } else {
        /*
        const resData = await response.json();
        console.log(resData);

        const res = new Response("any data", {status: 200});

        return res;
        */
       
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader() {
    /*
    const response = await fetch('http://localhost:8080/events');
    
    if(!response.ok) {
        // return { isError: true, message: "Could not fetch events" }
        // throw { message: "Could not fetch events" };
        
        throw new Response(JSON.stringify({ message: "Could not fetch events" }), { status: 500 });
        
        // throw json({ message: "Could not fetch events" }, { status: 500 });
    } else {
        return response;
    }
    */
   
    return { events: loadEvents() };
}
