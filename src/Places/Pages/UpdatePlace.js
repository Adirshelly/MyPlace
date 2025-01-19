import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Azrieli buildings",
    description: "3 buildings in the center of tel aviv",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Azriely_Center.jpg",
    adress: "menachem begin 125 tel aviv",
    location: { lat: 32.0740814, lng: 34.7947777 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Azrieli buildings",
    description: "3 buildings in the center of tel aviv",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Azriely_Center.jpg",
    adress: "menachem begin 125 tel aviv",
    location: { lat: 32.0740814, lng: 34.7947777 },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: identifiedPlace.title, isValid: true },
      description: { value: identifiedPlace.description, isValid: true },
    },
    true
  );
  useEffect(() => {
    setFormData(
      {
        title: { value: identifiedPlace.title, isValid: true },
        description: { value: identifiedPlace.description, isValid: true },
      },
      true
    );
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find any place</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text "
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="place enter a valid title"
        onInput={inputHandler}
        value={""}
        valid={""}
      ></Input>
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="place enter a valid description"
        onInput={inputHandler}
        value={""}
        valid={""}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        UPDAEE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
