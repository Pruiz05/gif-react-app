import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category)
  //       .then(setImages)
  // }, [category]);

  return (
    <>
      <h3 className={'animate__animated animate__fadeIn'}> {category} </h3>

      {loading && <p className={'animate__animated animate__flash'}>Loading</p>}

      <div className={"card-grid"}>
        {images.map((img) => (
          //   return <li key={img.id}>{img.title}</li>;
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

//! 13 custom hooks
