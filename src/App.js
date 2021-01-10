import "./App.css";
import React, { useState } from "react";
import DataFetching from "./components/DataFetching";
import Footer from "./components/Footer";

function App() {
  const [postSearch, setPostSearch] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPostSearch((prevPostSearch) => {
      return {
        ...prevPostSearch,
        [name]: value,
      };
    });
  }

  return (
    <div className="grid-container">
      <div className="banner">
        <h1>🌎 RESTful Wiki Search</h1>

        <form>
          <input
            style={{ margin: 3, border: 0, height: "3rem" }}
            value={postSearch.title}
            name="title"
            type="text"
            placeholder="Search for a Wiki"
            onChange={handleChange}
          ></input>
        </form>
        <hr></hr>
      </div>

      <div className="post">
        <DataFetching search={postSearch.title} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
