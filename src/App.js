import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import { CONFIG } from "./config";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${CONFIG.API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
      .then(
        (d) => {
          const { data } = d;
          setImages(data.hits);
          setIsLoading(false);
        },
        [term]
      )
      .catch((err) => console.error("err :" + err));
  });

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && !images.length && (
        <h1 className="text-5xl text-center mx-auto mt-32">
          No Images Found. please try other Terms
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading ...</h1>
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:gap-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((img) => (
            <ImageCard image={img} key={img.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
