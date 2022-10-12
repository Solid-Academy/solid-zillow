import { Link } from "react-router-dom";

export default function CardLink({ id }) {
  return (
    <div>
      <Link to="buy">{id}</Link>
    </div>
  );
}
