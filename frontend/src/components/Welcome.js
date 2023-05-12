import React from "react";
import { Button } from "react-bootstrap";

const divStyles = {
    boxShadow: '2px 2px 100px #950101',
    margin: '5em',
    padding: '1em',
  };


const Welcome = () =>{
    return(
        <div className="Welcome row align-items-md-stretch" style={divStyles}>
        <div class="p-5 mb-4 rounded-3">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Images Gallery</h2>
            <p>Simple App to find images using the text field for a desired image...</p>
            <Button class="btn btn-outline-light " type="button" href="https://unsplash.com/documentation" target ="_blank">More info</Button>
          </div>
        </div>
        </div>
        );
};

export default Welcome;