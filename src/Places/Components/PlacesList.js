import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlacesList.css";

const PlacesList = (props) => {
  if (props.item.length === 0) {
    return <div className="place-list center"></div>;
    <Card>
      <h2>No places found, you can create one </h2>
      <button>Share Place</button>
    </Card>;
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          adress={place.adress}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
