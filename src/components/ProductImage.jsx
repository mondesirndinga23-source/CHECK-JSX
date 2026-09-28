import { Card } from "react-bootstrap";
import product from "../product";

const ProductImage = () => {
  return (
    <Card.Img
      variant="top"
      src={product.imageurl}
      alt={product.name}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />
  );
};

export default ProductImage;
