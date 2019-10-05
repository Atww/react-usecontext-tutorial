import * as React from "react";

const Library = ({ match }: any): JSX.Element => {

  return (
    <div>
      <h2> {match.url} Page</h2>
    </div>
  );
}

export default Library;
