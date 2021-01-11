import "./App.css";
import React, { useState } from "react";
import DataFetching from "./components/DataFetching";
import Footer from "./components/Footer";

function App() {
  const [postSearch, setPostSearch] = useState({
    title: "",
    content: "",
  });

  function dynaSearch(event) {
    const { name, value } = event.target;

    setPostSearch((prevPostSearch) => {
      console.log(prevPostSearch);

      return {
        ...prevPostSearch,
        [name]: value,
      };
    });
  }

  // const indexed = postSearch.filter((posts, index) => {
  //   return posts;
  // });
  // console.log(indexed);

  return (
    <div className="grid-container">
      <div className="banner">
        <h1>🌎 RESTful Wiki Search</h1>

        <form>
          <input
            style={{
              margin: "1rem 0rem 1rem 0rem",
              border: 0,
              height: "3rem",
              borderRadius: "10px",
            }}
            value={postSearch.title}
            name="title"
            type="text"
            placeholder="  Search for a Wiki ...  🔎"
            onChange={dynaSearch}
            onTouchEnd={dynaSearch}
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
