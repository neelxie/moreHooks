import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromInput}`)
      .then((res) => {
        setLoading(true)
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromInput]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default FetchData;
