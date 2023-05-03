import React from "react";
import { Card, Button } from "react-bootstrap";
import { saveAs } from "file-saver";

function Download(url) {
  saveAs(url);
}

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: "18rem", color: "black" }} className="ImageCard">
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <a href={image.urls.full} target="_blank" rel="noreferrer">
          <Button variant="primary">View</Button>
        </a>

        <Button
          variant="primary"
          onClick={() => {
            Download(image.urls.full);
          }}
        >
          Download
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            deleteImage(image.id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
