/* eslint-disable */
import React, { useState, lazy, Suspense } from "react";
import Footer from "./components/Footer";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";

const DataFetching = lazy(() => import("./components/DataFetching"));

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

  return (
    <div className="grid-container">
      <div className="banner">
        <h1>
          {" "}
          <PublicTwoToneIcon style={{ fontSize: 45, color: "#4424d6" }} />
          Wiki Search
        </h1>
        <form>
          <input
            className="searchBar"
            value={postSearch.title}
            name="title"
            type="text"
            placeholder="  Search for a Wiki ...  🔎"
            onChange={dynaSearch}
            onTouchEnd={dynaSearch}
          ></input>
        </form>
      </div>

      <Suspense
        fallback={
          <div style={{ fontWeight: 800, color: "white" }}>Loading....</div>
        }
      >
        <div className="post">
          <DataFetching search={postSearch.title} />
        </div>
      </Suspense>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
