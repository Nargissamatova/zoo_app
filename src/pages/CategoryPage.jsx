import { useParams } from "react-router-dom";
import Card from "../components/Card";

function CategoryPage({ ...rest }) {
  const { category } = useParams();

  const categoryItems = rest[category];
  console.log(category);
  return (
    <>
      <h2>{category}</h2>
      {categoryItems.map((item) => {
        return <Card key={item.name} name={categoryItems.name} />;
      })}
    </>
  );
}

export default CategoryPage;
