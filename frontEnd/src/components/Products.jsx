import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <span key={item.id}>
              <Link to={`product/${item.id}`}>
                <Product item={item}  />
              </Link>
            </span> 
        ))}
    </Container>
  );
};

export default Products