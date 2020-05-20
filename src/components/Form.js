import React from 'react'

const Form = props => (
    <form autoComplete="on" onSubmit={props.getRestaurants}>
        <input type="text" name="city" autoComplete="address-level2" placeholder="City / Zip..." required/>
        <input type="text" name="fare" placeholder="Fare Type..." required/>
        <button>Chow!</button>
    </form>
)
export default Form;