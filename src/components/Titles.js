import React, { Component } from 'react';
class Titles extends Component {
   
    render() { 
        return ( 
            <div>
                <h1 className='title-container__title'>Weather Finder</h1>
                <p className='title-container__subtitle'>Find out temperture, conditions and more...</p>
            </div>
         );
    }
}
 
export default Titles;