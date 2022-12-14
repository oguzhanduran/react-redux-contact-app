import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const names = name.split(",");
    // const data = names.map((name) => ({ id: nanoid(), name }));

    if (!name || !number) return false;
    dispatch(addContact({ id: nanoid(), name, phone_number: number }));

    setName("");
    setNumber("");
  };
  //   Biz direk entities altından şu id'li elemanı bize ver diyebileceğiz.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="btn">
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
