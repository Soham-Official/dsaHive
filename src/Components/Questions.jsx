import React, { useEffect, useState } from "react";
import Sdesheet from "../Components/Databases/Sdesheet";
import Footer from "./Footer";
const Questions = ({ match }) => {
  let x = match.params.sheetname;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (x === "Sdesheet") setData(Sdesheet);
  }, [x]);

  return (
    <div>
      {/* {console.log(data)} */}
      {data.length > 0
        ? data.map((val, index) => {
            return (
              <>
                {" "}
                <div key={index}>{val.name}</div>{" "}
              </>
            );
          })
        : console.log("zfbfd")}
      {/* {data.length > 0
        ? (() => {
            let ans = [];
            for (let i = 0; i < data.length; i++)
              ans.push(<div key={i}>{data[i].name}</div>);
            return ans;
          })()
        : console.log("zfbfd")} */}
      <Footer />
    </div>
  );
};

export default Questions;
