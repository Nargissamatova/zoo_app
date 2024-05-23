import "../css/aboutPage.css";
import homePageImage from "../images/homeImage.png";

function About() {
  return (
    <>
      <h1>About Zoo App</h1>
      <div className="about_container">
        <div>
          <p>
            Welcome to our web app, your go-to platform for exploring the
            fascinating world of animals, birds, insects, and fish! Whether
            you're a nature enthusiast, a student, or just curious about the
            diverse creatures that inhabit our planet, our app is designed to
            provide you with detailed and engaging information.
          </p>
          <p>
            This project is a Minimum Viable Product (MVP) designed to offer a
            seamless and user-friendly experience as you navigate through the
            animal kingdom.
          </p>
        </div>

        <img src={homePageImage} alt="homePage" />
      </div>
      <div className="pages_container">
        <div>
          <h3>Home Page</h3>
          <p>
            Our home page welcomes you with four prominent images, each linking
            to one of the main categories: Animals, Birds, Insects, and Fish.
            This visual approach ensures you can easily find and explore the
            category that interests you most.
          </p>
        </div>
        <div>
          <h3>Category Pages</h3>
          <p>
            Each category page showcases a list of creatures presented as cards.
            The card design includes: Name of the creature. Image representing
            the creature. Add/Remove Likes: Show your appreciation for your
            favorite creatures. Remove Card: Option to remove a card from your
            view. See More Button: Opens a dedicated page for detailed
            information about the creature
          </p>
        </div>
        <div>
          <h3>Single Creature Pages</h3>
          <p>
            When you click on "See More," you'll be taken to a single page
            dedicated to the creature. Here, you'll find comprehensive details
            about the creature, along with a button to navigate back to the
            previous page.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
