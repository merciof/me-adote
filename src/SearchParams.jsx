import axios from "axios";
import { useEffect, useState } from "react";
import Result from "./Result";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// TODO criar cache locar para as raças
function SearchParams() {
  const [animal, setAnimal] = useState("dog");
  const [pets, setPets] = useState([]);
  const [breeds, setBreeds] = useState([]);

  const requestAnimals = function () {
    axios
      .get(`https://pets-v2.dev-apis.com/pets?animal=${animal}`)
      .then(function (response) {
        setPets(response.data.pets);
      });
  };

  useEffect(requestAnimals, []);

  useEffect(
    function () {
      axios
        .get(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        .then(function (response) {
          setBreeds(response.data.breeds);
        });
    },
    [animal]
  );

  return (
    <>
      <form
        onSubmit={function (event) {
          event.preventDefault();
          requestAnimals();
        }}
      >
        <input
          type="text"
          placeholder="animal"
          value={animal}
          onChange={function (event) {
            return setAnimal(event.target.value);
          }}
        />
        <br />

        <select
          name=""
          id=""
          onChange={function (event) {
            setAnimal(event.target.value);
          }}
        >
          <option value=""></option>
          {ANIMALS.map(function (animal) {
            return (
              <option value={animal} key={animal}>
                {" "}
                {animal}{" "}
              </option>
            );
          })}
        </select>

        <br />
        <select>
          <option value=""></option>
          {breeds.length
            ? breeds.map(function (breed) {
                return (
                  <option value="" key={animal}>
                    {" "}
                    {breed}{" "}
                  </option>
                );
              })
            : null}
        </select>
        <br />

        <button type="submit"> Submeter </button>

        {/* {pets.length
          ? pets.map(function (pet) {
              return <h4> {pet.name} </h4>;
            })
          : null} */}

        <Result pets={pets} />
      </form>
    </>
  );
}

export default SearchParams;
