import React from 'react';

const Restaurant = props => (

    <div className="col-10 restaurant__info">
        { 
        props.error && <p className="restaurant__error"> {props.error}
        </p> 
        }
        { props.restaurants &&
            <ul>
            {props.restaurants.map(item => (
                <li key={item.location.address}>
                    <p className="restaurant__key">Name: <span className="restaurant__value">{item.name}</span></p>
            <p className="restaurant__key">Address: <span className="restaurant__value">{item.location.address}{"\n"}{item.location.city}, {item.location.state} {item.location.postalCode}</span>
            </p>
                </li>
            ))
            }
            </ul>
        }
    </div>
)

export default Restaurant