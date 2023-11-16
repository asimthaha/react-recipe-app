import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeNavbar from "./RecipeNavbar";

const ReecipeView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/view/").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <RecipeNavbar />
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col-col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 card-group">
                    <div class="card">
                      <div className="card-header">
                        <h5>{value.name}</h5>
                      </div>
                      <div className="card-body">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">{value.ingredients}</li>
                          <li class="list-group-item">{value.description}</li>
                          <li class="list-group-item">{value.type}</li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <p>{value.author}</p>
                        <p>{value.dateCreated}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReecipeView;
