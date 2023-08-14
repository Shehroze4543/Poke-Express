import React from "react";

function Index(props) {
  const pokemon = props.pokemon;
  const myStyle = {
    color: "#ffffff",
    backgroundColor: "#000000",
  };
  return (
    <>
      <h1 style={myStyle}>See All The PokeMon</h1>
      <p>
        {pokemon.map((pokemon) => {
          const capitalizedFirst = pokemon.name.charAt(0).toUpperCase();
          const rest_of_the_name =
            capitalizedFirst + pokemon.name.slice(1).toLowerCase();
          return <p>{rest_of_the_name}</p>;
        })}
      </p>
    </>
  );
}

export default Index;
