import React from "react";
import "./Styles/card.css";
import logo from "./DSA HIVE2.png";
import { Link } from "react-router-dom";
const Card = (props) => {
  let colour = "white";
  if (props.description === "Coming Soon.......") {
    colour = "#0faa01";
  }

  return (
    <div>
      <div className="card">
        <div className="content">
          <img className="logo" src={logo} alt="logo.." />
          <h2 className="title">{props.name}</h2>
          <p className="copy" style={{ color: colour }}>
            {props.description}
          </p>
          {props.link === "nil" ? (
            // <Link
            //   className="button"
            //   to={`questions/${props.link}`}
            //   onClick={(event) => event.preventDefault()}
            //   disabled={true}
            // >
            //   <span className="spanbtn">Coming Soon!</span>
            // </Link>
            ""
          ) : (
            <Link className="button" to={`questions/${props.link}`}>
              <span className="spanbtn">Lets Start!</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
