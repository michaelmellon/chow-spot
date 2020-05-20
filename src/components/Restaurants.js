import React from 'react';

const Restaurant = props => (

    <div>
       <ul>
        {props.restaurants.map(item => (
            <li key={item.name}>
                <p>Name: {item.name} </p>
                <p>Addres: {props.location} </p>
            </li>
        ))}
        </ul>
    </div>
    // <div>
    //     { props.restaurants && <p> Restaurant List: {props.restaurants} </p>}
    //     { props.name && <p> Name: { props.name } </p> }
    //     { props.location && <p> Address: { props.location } </p> }
    //     { props.error && <p> { props.error }</p>}
    // </div>
)

export default Restaurant