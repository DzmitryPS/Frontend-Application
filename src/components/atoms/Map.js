import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Main = styled.div`
width:96%;
height:350px;
margin: auto;

i{
  font-size:20px;  
}
.name{
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
}
`

export default class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 50.77971514439381,
                lng: 6.100484404868937
            },
            zoom: 7,
        };
    }
  
    render() {
      return (
          <Main>
         <GoogleMapReact
         bootstrapURLKeys={{key:  process.env.REACT_APP_GOOGLE_MAP_KEY}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <i class="fas fa-map-pin" 
          lat={50.77971514439381} 
          lng={6.100484404868937} 
          ></i>
        </GoogleMapReact>
        </Main>
      );
    }
  }
  