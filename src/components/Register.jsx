import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function Login({ users, setUsers, isLogged, setisLogged,isRegistered,setisRegistered }) {
  const name = useRef("");
  const pass = useRef("");
  const email = useRef("");
  const surname = useRef("");


    // console.log("goooooooooooooo")
    return (
      <>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input id={"name"} ref={name} type="text" />

          <FormLabel>Surname</FormLabel>
          <Input id={"surname"} ref={surname} type="text" />

          <FormLabel>Password</FormLabel>
          <Input id={"pass"} ref={pass} type="password" />

          <FormLabel>Email</FormLabel>
          <Input id={"email"} ref={email} type="email" />

          <Button
            colorScheme="yellow"
            onClick={(e) => {
              // console.log(users);
              // console.log(name.current.value);

              let newUser = {
                name: name.current.value,
                surname: surname.current.value,
                password: pass.current.value,
                email: email.current.value,
              };

              axios
                .post(
                  "https://6549a154e182221f8d51b8a0.mockapi.io/users",
                  newUser
                )
                .then((res) => {
                  console.log(res.data);
                  // setUsers([...users, res.new]); it must be like down,but it posted right
                  setUsers([...users, res.data]);

                  // setisRegistered(true)
                  // setisLogged(false)
                });
            }}
          >
            Register
          </Button>
        </FormControl>
      </>
    );
  }

export default Login;
