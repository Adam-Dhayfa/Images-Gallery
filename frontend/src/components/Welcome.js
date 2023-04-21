import React from "react";
import { Button } from "react-bootstrap";

const divStyles = {
    boxShadow: '1px 2px 100px #F4AAB9',
    margin: '4em',
    padding: '1em',
  };


const Welcome = () =>{
    return(
        <div class="row align-items-md-stretch" style={divStyles}>
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Images Gallery</h2>
            <p>Simple App to find images using the text feild for a desired image...</p>
            <Button class="btn btn-outline-light" type="button" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi5o_Odq7r-AhX1zTgGHftOD-QQwqsBegQIBxAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU" target ="_blank">More info</Button>
          </div>
        </div>
        </div>
        );
};

export default Welcome;