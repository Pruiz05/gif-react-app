import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

import { GifGrid } from "./components/GifGrid";

const GifReactApp = ({defaultCategories = []}) => {
  // const categories = ['One piece', 'Bleach', 'Naruto'];

  const [categories, setCategories] = useState(defaultCategories);
 
//   const handleAdd = () =>{
//       setCategories([...categories,'Hunter x Hunter']);
//   }

  return (
    <>
      <h2>Gif React App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      {/* <ol> */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    
    </>
  );
};

export default GifReactApp;
