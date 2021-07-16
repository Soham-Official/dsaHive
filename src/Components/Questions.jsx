import React, { useEffect, useState } from "react";
import Sdesheet from "../Components/Databases/Sdesheet";
import Footer from "./Footer";
import "./Styles/questions.css";
const Questions = ({ match }) => {
  let x = match.params.sheetname;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (x === "Sdesheet") setData(Sdesheet);
  }, [x]);

  return (
    <div className="QuesPage">
       <div className="lol">
      <h1 className="text-center collHead">Sde Sheet </h1>
      </div>
      

      <div className="lol">
      <div className="quesHead">
      <div className="container">
        <div className="row">
          
          <div className="col-8">
            <div className="row">
              <div className="col-12">ques</div>
            </div>
            <div className="row">
              <div className="col-4">diff</div>
              <div className="col-4"></div>
              <div className="col-4">topic</div>
            </div>
            </div>
          
          
          
          <div className="col-4 ">




            <div className="row mt-5">
              <div className="col-4 ">w</div>
              <div className="col-4 ">a</div>
              <div className="col-4 ">o</div>
            </div>


          </div>

        </div>
      </div>
      </div>
      </div>




      <Footer />
    </div>
  );
};

export default Questions;
