import React, { useState } from "react";
import RecipeNavbar from "./RecipeNavbar";
import axios from "axios";

const RecipeAdd = () => {
  const [inputField, setInputField] = useState([
    {
      name: "",
      author: "",
      dateCreated: "",
      ingredients: "",
      description: "",
      type: "",
    },
  ]);

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/add/", inputField)
      .then((response) => {
        alert(response.data.status);
      });
  };

  return (
    <>
      <RecipeNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={inputField.author}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Date Created
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="dateCreated"
                  value={inputField.dateCreated}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Ingredients
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ingredients"
                  value={inputField.ingredients}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={inputField.description}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  value={inputField.type}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={readVal} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeAdd;
