import React from "react";

function Show(props) {
  const pokemon = props.pokemon;
  const myStyle = {
    width: "300px",
    height: "100px",
  };
  const myDisply = {
    display: "Flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <div style={myDisply}>
        <h1 style={myStyle}>Gotta Catch 'Em All</h1>
        <h1>
          <a href="/pokemon" style={myStyle}>
            Back
          </a>
        </h1>
      </div>

      <h3>{pokemon.name}</h3>
      <img src={pokemon.img + ".jpg"} style={myStyle} />

      {/* {pokemon.map((pokemon, i) => {
          const capitalizedFirst = pokemon.name.charAt(0).toUpperCase();
          const rest_of_the_name =
            capitalizedFirst + pokemon.name.slice(1).toLowerCase();
          return (
            <h2>
              <div key={i}>
                <a href={`/pokemon/${i}`}>{rest_of_the_name}</a>
              </div>
              <div>
                <img src={pokemon.img} style={myStyle} />
              </div>
            </h2>
          );
        })} */}
    </>
  );
}

export default Show;
