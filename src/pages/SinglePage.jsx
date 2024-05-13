import { useParams } from "react-router-dom";

function SinglePage({ ...rest }) {
  const category = useParams();

  const categoryItems = rest[category.category];

  const data = categoryItems.find((el) => el.name === category.name);
  return (
    <>
      <h2>{data.name}</h2>
    </>
  );
}

export default SinglePage;
