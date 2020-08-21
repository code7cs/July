import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function UseEffectForm() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  let Post = useRef([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        Post.current = [...data, res.data];
      });
  }, [id, data]);

  return (
    <div>
      <form action="">
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        &nbsp;&nbsp;
        <button
          onClick={(e) => {
            e.preventDefault();
            setData(Post.current);
          }}
        >
          Set Post
        </button>
        <div>
          <ul>
            {data && data.map((item, i) => <li key={i}>{item.title}</li>)}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default UseEffectForm;
