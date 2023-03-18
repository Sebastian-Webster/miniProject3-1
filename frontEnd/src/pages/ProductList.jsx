import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';



const Container = styled.div`

`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;

`;

const Option = styled.option`

`;

const   ProductList = () => {
  return (
    <Container> 
      <Announcement/>
      <Navbar/> 
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
            <Select>
              <Option>
                Type
              </Option>
              <Option>Christmas</Option>
              <Option>Crochet</Option>
              <Option>Home Decor</Option>
            </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
            <Select>
              <Option>Newest</Option>
              <Option>Price - low to high</Option>
              <Option>Price - high to low</Option>
            </Select>
          
        </Filter>
      </FilterContainer>
      <Products/>


    </Container>
  )
}

export default ProductList