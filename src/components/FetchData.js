import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1}`)
      .then((res) => {
        setLoading(false)
        setPost(res.data);
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setPost({})
        setError("Something went wrong")
      });
  }, []);
  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
}

export default FetchData;
