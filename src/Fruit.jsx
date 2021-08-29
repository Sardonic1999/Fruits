import React from "react";
import "./Fruit.css";

function Fruit(props) {
  return (
    <div className="main">
      <div className="rasm">
        <img src={props.data.img} alt="" width="100%" height="100%" />
      </div>
      <div className="details">
        <div className="top">
          <h1>{props.data.title}</h1>
          <button className="button">Add</button>
        </div>
        <div className="bottom">
          <div className="data">
            <p className="title">UOM</p>
            <p className="value">{props.data.uom}</p>
          </div>
          <div className="data">
            <p className="title">Pack size</p>
            <p className="value">{props.data.size}</p>
          </div>
          <div className="data">
            <p className="title">Per unit</p>
            <p className="value">{props.data.unit}</p>
          </div>
          <div className="data">
            <p className="title">Total</p>
            <p className="value">{props.data.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
