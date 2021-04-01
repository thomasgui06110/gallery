import React from "react";



import ArtistsPop from './ArtistsPop'
import ArtistsUrban from './ArtistsUrban'

require("../styles/artistes.css");



const ArtistsItems = () => {
  return (
    <>
    <h2>Pop art</h2>
    <ArtistsPop />
    <h2>Street Art</h2>
    <ArtistsUrban />
    </>
  )
};

export default ArtistsItems;
