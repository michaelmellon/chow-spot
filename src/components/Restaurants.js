import React from 'react';

const Restaurant = props => (

    <div>
        { props.error && <p> {props.error} </p> }
        { props.restaurants &&
            <ul>
        
            {props.restaurants.map(item => (
                <li key={item.location.address}>
                    <p>Name: {item.name} </p>
                    <p>Address: {item.location.address} 
            {"\n"}{item.location.city}, {item.location.state} {"\n"}{item.location.postalCode}</p>
                </li>
            ))
            }
            </ul>
        }
    </div>

/* 
       <ul>
        
        {props.restaurants.map(item => (
            <li key={item.location.address}>
                <p>Name: {item.name} </p>
                <p>Address: {item.location.address} </p>
            </li>
        ))
        }
        </ul> */
 
    // <div>
    //     { props.restaurants && <p> Restaurant List: {props.restaurants} </p>}
    //     { props.name && <p> Name: { props.name } </p> }
    //     { props.location && <p> Address: { props.location } </p> }
    //     { props.error && <p> { props.error }</p>}
    // </div>
)

export default Restaurant