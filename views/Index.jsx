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
      <nav>
        <a href="pokemon/new">Add New Pokemon</a>
      </nav>
      <p>
        {pokemon.map((pokemon, i) => {
          const capitalizedFirst = pokemon.name.charAt(0).toUpperCase();
          const rest_of_the_name =
            capitalizedFirst + pokemon.name.slice(1).toLowerCase();
          return (
            <div key={i}>
              <h2>
                <a href={`/pokemon/${pokemon._id}`}>{rest_of_the_name}</a>
              </h2>
              <p>
                <a href={`/pokemon/${pokemon._id}/edit`}>Edit Pokemon's Info</a>
              </p>
              <form
                action={`/pokemon/${pokemon._id}?_method=DELETE`}
                method="POST"
              >
                <input type="submit" value="Delete" />
              </form>
            </div>
          );
        })}
      </p>
    </>
  );
}

export default Index;
