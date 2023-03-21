import { Add, Remove } from "@mui/icons-material";
import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import {   useParams } from 'react-router-dom';
import { sliderItems } from './../data';

const Container = styled.div``;  

const Wrapper = styled.div`
    padding: 50x;
    display: flex;
`;
 
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    padding: 0px 20px;
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100px;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Quantity = styled.span`
    width: 30px;
    height: 30px;
    border:radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {    
    
    const params = useParams(); 
    console.log(params.id);

    const getProduct = sliderItems.filter(item => item.id == params.id)
    console.log("Product ", getProduct)
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            {
                getProduct.length > 0 && (
                    <>
                        <ImgContainer>
                            <Image src={getProduct[0].img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{getProduct[0].title}</Title>
                            <Desc>
                             {getProduct[0].desc}
                            </Desc>
                            <Price>$ 5.00</Price>
                            <AddContainer>
                                <QuantityContainer>
                                <Remove />
                                <Quantity>1</Quantity>
                                <Add />
                                </QuantityContainer>
                                <Button>ADD TO CART</Button>
                            </AddContainer>
                        </InfoContainer>
                    </>
                )
            }
            
        </Wrapper>
    </Container>
  )
}

export default Product
