import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useNavigate()


  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/singup", inputs)
      .catch((err) => console.log(err));
      console.log(res)
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send http request
    sendRequest().then(()=> history("/login"))
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
            Sigup
          </Typography>
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="name"
            value={inputs.name}
            onChange={handleInputs}
            type="text"
            name="name"
          />
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
            Singup{" "}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
