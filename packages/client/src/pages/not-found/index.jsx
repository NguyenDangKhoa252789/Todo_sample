import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/layout";

function NotFound() {
  return (
    <MainLayout>
      <h1>Page not found</h1>
      <Link to="/">Go back to Home Page</Link>
    </MainLayout>
  );
}

export default NotFound;
