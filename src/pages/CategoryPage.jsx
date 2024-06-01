import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "../css/App.css";

function CategoryPage({ removeCard, removeLikes, addLikes, ...rest }) {
  const { category } = useParams(); // reading url

  const categoryItems = rest[category];
  console.log(category);
  return (
    <>
      <h2>{category}</h2>
      <div className="container">
        {categoryItems.map((item) => {
          return (
            <Card
              key={item.name}
              name={item.name}
              likes={item.likes}
              removeCard={() => removeCard(item.name, category)}
              removeLikes={() => removeLikes(item.name, category, "remove")}
              addLikes={() => addLikes(item.name, category, "add")}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryPage;
