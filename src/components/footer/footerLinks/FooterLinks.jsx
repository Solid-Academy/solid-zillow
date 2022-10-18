import { Link } from "react-router-dom";

export default function LinksCard({ title }) {
  return (
    <div>
      <Link to="#">{title}</Link>
    </div>
  );
}
