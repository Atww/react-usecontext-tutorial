import * as React from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page"><Link to="/welcome">BigLibra</Link></li>
          <li className="breadcrumb-item"></li>
          <Link to="/library" className="link">Library </Link>
        </ol>
      </nav>
    </div>
  );
}

export default Header;
