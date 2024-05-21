import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/App.css";

function SinglePage({ ...rest }) {
  const { category, name } = useParams();
  const categoryItems = rest[category];
  const data = categoryItems.find((el) => el.name === name);

  const [wikiData, setWikiData] = useState("");

  useEffect(() => {
    async function fetchWikiData() {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setWikiData(result.extract);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchWikiData();
  }, [name]);

  return (
    <>
      <h2 className="category_title">{data.name}</h2>
      <div className="category_container">
        <img
          className="category_image"
          src={`https://source.unsplash.com/300x300/?${data.name}`}
          alt={data.name}
        />
        <p className="category_text">{wikiData}</p>
      </div>
    </>
  );
}

export default SinglePage;
