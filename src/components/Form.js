import React from 'react'

const Form = props => (
    <form onSubmit={props.getRestaurants}>
        <input type="text" name="city" placeholder="City / Zip..."/>
        <input type="text" name="fare" placeholder="Fare Type..." />
        <button>Find Fare</button>
    </form>
)
export default Form;