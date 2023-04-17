import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page not found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/">
        <button className="return-button">Return to Main Page</button>
      </Link>
    </div>
  );
};