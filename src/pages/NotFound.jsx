import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p className="subtitle">That page doesn’t exist, or it moved.</p>
      <Link to="/dashboard">Go to dashboard</Link>
    </>
  );
}
