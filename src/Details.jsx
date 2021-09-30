import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Details({ match }) {
  const [pet, setPet] = useState({});

  useEffect(function () {
    axios
      .get(`https://pets-v2.dev-apis.com/pets?id=${match.params.id}`)
      .then(function (response) {
        setPet(response.data.pets[0]);
      });
  }, []);

  const { animal, breed, city, state, description, name } = pet;

  return (
    <>
      <h1>{name}</h1>
      <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>

      <button>Adopt {name}</button>

      <Link to={"/search"}>
        <button>Voltar</button>
      </Link>

      <p>{description}</p>
    </>
  );
}

export default Details;
