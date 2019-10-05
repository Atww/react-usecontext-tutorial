import * as React from "react";

export const Welcome = ({ match }: any): JSX.Element => {
  return (
    <div>
      <h1>BigLibra's { match.url } Page</h1>
    </div>
  );
}

export default Welcome;
