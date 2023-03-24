import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(
            rgba(255,255,255, 0.5 ),
            rgba(255,255,255, 0.5 )
        ),
        url(https://i.ibb.co/MRPRsdx/hearts.jpg) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;          
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;    
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #cfc0ed;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
      }
`;

const Error = styled.span`
  color: red;
`;

// const Link = styled.a`
//     margin: 5px 0px;
//     font-size: 12px; 
//     text-decoration: underline;
//     cursor: pointer;
// `;


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            dispatch({ type: "LOGIN_FAILURE", payload: "Username and Password must not be blank or incorrect" });
            error = "Username and Password must not be blank or incorrect"
        } else {
            login(dispatch, { username, password });
        }
    };
    

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />     
                <Input placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}                
                />
                 <Button onClick={handleClick} disabled={isFetching}> 
                LOGIN
                </Button>
                {/* 
                Issues:
                1. Log-in is successful but won't route to home page
                2. backEnd show this error if username and password is incorrect
                    Node.js v19.4.0
                    [nodemon] app crashed - waiting for file changes before starting...
                3. If username and password are blank the error message below is not showing
                 */}
                {
                    error && <Error>{error}</Error>
                }
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
                <Link to="/Register">REGISTER</Link>
                <Link to="/">HOME</Link>
            </Form>
        </Wrapper>
    </Container>
   
  );
}

export default Login