import React, { useState, useEffect } from "react";
import axios from "axios";
import fashionImages from "../../assets/images/images";

function App() {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    const res = await axios.get("http://private-cc77e-aff.apiary-mock.com/posts");
    setPosts(res.data.items);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("posts :>> ", posts);
  }, [posts]);

  return (
    <div>
      {posts.map((post, i) => (
        <div key={post.item_id}>
          <p>{post.service_name}</p>
          <img width="100px" src={fashionImages[i]} alt="#" />
          <p>{post.item_data.text}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
