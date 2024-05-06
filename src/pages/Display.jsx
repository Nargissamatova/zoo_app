import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; // default export, you can name it
import Card from "../components/Card";
import "../css/App.css";
import { animals } from "../animalsList";

function Display() {
  const [animalsData, setAnimalsData] = useState(animals); // by default animals
  const removeCard = (animal) => {
    console.log(animal, "card was removed");
    const updatedArray = animalsData.filter((item) => item.name !== animal); // if item name is same, take it out
    setAnimalsData(updatedArray);
  };

  // Function to handle likes (add or remove) for a specific animal
  const likesHandler = (animal, action) => {
    console.log(animal, action);
    // Mapping over 'animalsData' array to update likes for the specified animal
    const updatedArray = animalsData.map((item) => {
      if (item.name === animal) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 };
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item; // if the animal is not the one being modified, return it unchanged
      }
    });
    setAnimalsData(updatedArray);
  };

  return (
    <>
      <Header />
      <h2>Animals</h2>
      <div className="container">
        {animalsData.map((animal) => (
          // all the properties of the animal object are passed as props to the Card component individually
          <Card
            key={animal.name}
            {...animal}
            removeLikes={() => likesHandler(animal.name, "remove")}
            addLikes={likesHandler.bind(this, animal.name, "add")}
            removeCard={() => removeCard(animal.name)}
          /> // one is props and second is func
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Display;

/*
const removeHandler = (id) => {
  const updatedArray = persons.filter((person) => person.id !==id);
  setPersons(updatedArrays)
}
*/
