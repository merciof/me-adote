import Pet from "./Pet";

function Result(props) {
  const pets = props.pets;

  return (
    <>
      {pets.length
        ? pets.map(function (pet) {
            return (
              <Pet
                animal={pet.animal}
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                location={`${pet.city}, ${pet.state}`}
                id={pet.id}
              />
            );
          })
        : null}
    </>
  );
}

export default Result;
