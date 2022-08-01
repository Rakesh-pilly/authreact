import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useDispatch} from "react-redux";
import { authActions } from "../store";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate()
const dispath = useDispatch()

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/login", inputs)
      .catch((err) => console.log(err));
      console.log(res)
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send http request
    sendRequest().then(()=> {
      dispath(authActions.login())
      history("/user")})
  };

  const handleInputs = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width={400}
          marginLeft="auto"
          marginRight="auto"
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Typography variant="h2" textAlign={"center"}>
            Login
          </Typography>
          
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="Email"
            value={inputs.email}
            onChange={handleInputs}
            type="email"
            name="email"
          />
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="passwrod"
            value={inputs.password}
            onChange={handleInputs}
            type="password"
            name="password"
          />
          <Button variant="contained" type="submit">
            login
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Login