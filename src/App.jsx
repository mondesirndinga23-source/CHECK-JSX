import { Button, Card } from "react-bootstrap";
import Description from "./components/Description";
import Name from "./components/Name";
import Navigation from "./components/Navigation";
import Price from "./components/Price";
import ProductImage from "./components/ProductImage";

const App = () => {
  let firstName = "Mondesir";
  return (
    <div>
      <Navigation />
      <h1 className="text-center p-2">Hello, {firstName}!</h1>
      <img
      width="200px"
      height="200px"
      className="rounded-circle mx-auto border border-5 border-dark d-block"
        src="https://img.magnific.com/premium-vector/vector-flat-illustration-fashionable-profile-man-avatar-user-profile-person-icon-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1145.jpg?semt=ais_hybrid&w=740&q=80"
        alt="profile-picture"
      />

      <div className="container mt-4 d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <ProductImage />

          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>

            <Card.Text>
              <Description />
            </Card.Text>

            <Card.Text>
              <Price />
            </Card.Text>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default App;
