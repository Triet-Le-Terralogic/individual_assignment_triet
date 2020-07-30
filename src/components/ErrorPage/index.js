import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="Error-page">
      <h1 className="Error-page__header">
        <span>404</span> Error
      </h1>
      <div className="Error-page__body">
        <p>Page not found</p>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link to="/">Home page</Link>
      </div>
    </div>
  );
}
