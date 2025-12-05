import React, { useState } from "react";
import LessTimeBirth from "./modalTimeBirth";

const Person = ({ item, myData }) => {
  const [openTime, setOpenTime] = useState(false);
  const [itemId, setItemId] = useState("");

  return (
    <div
      id={item.id}
      onClick={() => {
        setItemId(item.id);
        // console.log(item.id);
        // console.log(itemId);
        setOpenTime(!openTime);
      }}
      className="person-parent extraBold"
    >
      <LessTimeBirth
        setItemId={setItemId}
        itemId={itemId}
        myData={myData}
        setOpenTime={setOpenTime}
        openTime={openTime}
      />

      <img src={item.image} alt="" className="img-person" />
      <div className="name">
        <p className="personName">{item.name}</p>
        <p className="years">
          <span>{item.age} </span> years
        </p>
      </div>
    </div>
  );
};

export default Person;
