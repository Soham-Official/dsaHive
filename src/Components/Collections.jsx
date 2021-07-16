import React from "react";
import Card from "./Card";
import Collectiondb from "./Databases/Collectiondb";
import Footer from "./Footer";
import "./Styles/collection.css";
const Collections = () => {
  return (
    <div className="collPage">
      <div className="lol">
      <h1 className="text-center collHead">Collections</h1>
      </div>
      {Collectiondb.map((value, index) => {
        return (
          <>
          <main className="page-content">
          <Card
            name={value.name}
            description={value.description}
            link={value.link}
          />
          <Card
            name={value.name}
            description={value.description}
            link={value.link}
          />
          <Card
            name={value.name}
            description={value.description}
            link={value.link}
          />
          <Card
            name={value.name}
            description={value.description}
            link={value.link}
          />
          </main>
          </>
        );
      })}
      <Footer />
    </div>
  );
};

export default Collections;
