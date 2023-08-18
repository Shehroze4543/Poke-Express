import React from "react";

function New() {
  return (
    <>
      <div>
        <form action="/pokemon" method="POST">
          Pokemon Name: <input type="text" name="name" />
          Image: <input type="url" name="img" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default New;
