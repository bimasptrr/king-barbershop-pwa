import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="service-card">
      <img src={service.image_url} alt={service.name} />
      <div className="info">
        <h3>{service.name}</h3>
        <p>Rp{service.price}</p>
      </div>
    </Link>
  );
}
