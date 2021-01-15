import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

function DataFetching(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://safe-cliffs-03637.herokuapp.com/articles")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("searching...  " + props.search);

  const filteredPosts = posts.filter((post, index) => {
    return post.title.toLowerCase().includes(props.search.toLowerCase());
  });

  console.log(filteredPosts);

  return (
    <div>
      <form>
        <ul>
          {filteredPosts.map((post, index) => (
            <li className="posts" key={post._id}>
              <img
                style={{ height: 95, width: 210 }}
                src={`https://safe-cliffs-03637.herokuapp.com/${post.image}`}
                alt="postImage"
              ></img>
              {props.title !== "" ? (
                <p style={{ fontWeight: 800, color: "#347B98" }}>
                  {post.title}{" "}
                </p>
              ) : null}
              <br /> <hr></hr>
              <p>{post.content.substring(0, 70) + "..."}</p>
              {post.content.length > 70 ? (
                <Modal postID={post._id} postContent={post.content} />
              ) : null}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default DataFetching;
