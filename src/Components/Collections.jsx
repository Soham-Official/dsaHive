import React from "react";
import Card from "./Card";
import Collectiondb from "./Databases/Collectiondb";
import Footer from "./Footer";
const Collections = () => {
  return (
    <div>
      {Collectiondb.map((value, index) => {
        return (
          <Card
            name={value.name}
            description={value.description}
            link={value.link}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Collections;
