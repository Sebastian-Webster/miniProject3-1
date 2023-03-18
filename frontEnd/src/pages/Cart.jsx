import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 700;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"}
`;
const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    margin-bottom: 10px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;

`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductQuantity = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee; 
    border: none; 
    height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px; 
  height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;



const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.ibb.co/RTmJWHs/IMG-9558.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>Heart Ornament</ProductName>
                                <ProductId><b>ID:</b> 98473847</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductQuantityContainer>
                                <Add/>
                                <ProductQuantity>2</ProductQuantity>
                                <Remove/>
                            </ProductQuantityContainer>
                            <ProductPrice>$ 10.00</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://i.ibb.co/nDsGNby/Adobe-Stock-176693255-Preview.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>Tree Ornament</ProductName>
                                <ProductId><b>ID:</b> 984dfs</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductQuantityContainer>
                                <Add/>
                                <ProductQuantity>1</ProductQuantity>
                                <Remove/>
                            </ProductQuantityContainer>
                            <ProductPrice>$ 5.00</ProductPrice>
                        </PriceDetail>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 15.00</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 15.00</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -15.00</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 15.00</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT</Button>
                </Summary>

            </Bottom>
        </Wrapper>
    </Container> 
  )
}

export default Cart