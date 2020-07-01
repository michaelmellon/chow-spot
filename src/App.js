import React from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Restaurant from './components/Restaurants';
import Footer from './components/Footer'
import './App.css'
require('dotenv').config();

class App extends React.Component {

    state = {
        restaurants: [],
        venues: null,
        name: null,
        location: null, 
        delivery: null,
        error: null
    }

    getRestaurants = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const fare = e.target.elements.fare.value;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        const api_call = await fetch(`https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20180323&near=${city}&intent=browse&query=${fare}&categoryId=4d4b7105d754a06374d81259&limit=20&radius=25000`, requestOptions)
        const data = await api_call.json();
        
        if (city && fare) {
            this.setState({
                restaurants: data.response.venues,
                //venues: data.response.venues[0],
                //name: data.response.venues.name,
                //location: data.response.venues.location.address,
                error: ""
            });
        } else {
            this.setState({
                restaurants: null,
                //venues: null,
                //name: null,
                //location: null,
                //delivery: null,
                error: "If you leave the fields blank you won't get any chow!"
            });
        } 
    }
    

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col title-container">
                                    <Title />
                                    
                                </div>
                                    <div className="col form-container">
                                        <Form getRestaurants={this.getRestaurants}/>
                                        <Restaurant
                                            restaurants = {this.state.restaurants}
                                            //venues={this.state.venues}
                                            //name={this.state.name}
                                            //location={this.state.location}
                                            //delivery={this.state.delivery}
                                            error={this.state.error}
                                            />  

                                    </div>

                            </div>

                        </div>
                        <Footer />
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default App;


/*
          
                

*/