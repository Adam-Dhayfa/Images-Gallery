import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../components/Search";
import ImageCard from "../components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "../components/Welcome";
import { ToggleButton,ToggleButtonGroup } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export default function Home() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);


  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };
  return (
    <div className="App">
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4 Home">
        <div className="iOptions">
        <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
        <ToggleButton id="tbg-radio-1" value={1} variant="outline-light">
          UnSplash
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant="outline-light">
          Generate
        </ToggleButton>
      </ToggleButtonGroup>
        </div>
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDelete} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}
