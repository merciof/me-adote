import { Link } from "react-router-dom";

function Pet(props) {
  const { name, animal, breed, location, id } = props;
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img
          src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22215-dog-icon.png"
          alt={name}
        />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
}

export default Pet;
