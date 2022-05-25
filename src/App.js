import { useState } from "react";
import Card from "./Card";

function App() {
  const [images, setImages] = useState([
    { url: "http://source.unsplash.com/random/1" },
    { url: "http://source.unsplash.com/random/2" },
    { url: "http://source.unsplash.com/random/3" },
    { url: "http://source.unsplash.com/random/4" },
    { url: "http://source.unsplash.com/random/5" },
    { url: "http://source.unsplash.com/random/6" },
  ]);

  const getNewImages = () => {
    setImages([
      ...images,
      {
        url: `http://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
        )}`,
      },
    ]);
  };

  const removeImage = () => {
    setImages(images.slice(0, -1));
  };

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card images={images} />
      </div>
      <div className="btnContainer">
        <button onClick={getNewImages}>Add</button>
        <button onClick={removeImage}>Remove </button>
      </div>
    </section>
  );
}

export default App;

/*
We are only gonna handla images in this app
which means we probbly only needs a state for images

1. Create the images state
2. Create the jsx that return 
3. Create the reusable Card component that will display one image
4. Make sure we grab the images from unsplash
5. We are going to hard code the first 5-6 images with an url from unsplash
6. But in the addImage method we should add the correct url and make sure we
get a random image everytime we add one.
7. Create a function for removing the image



CHALLENGE

1. Add unique id to each image
2. Create a better remove/delete function than using slice
*/
