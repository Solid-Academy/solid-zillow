import { Link } from "react-router-dom";

export default function CardLink({ id }) {
  return (
    <>
      <Link to="buy">{id}</Link>
    </>
  );
}
