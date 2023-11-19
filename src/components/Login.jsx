import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
function Login({ users, setUsers, isLogged, setisLogged }) {
  const name = useRef("");
  const pass = useRef("");
  return (
    <>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input id="nameInp" ref={name} type="text" />
        <FormLabel>Password</FormLabel>
        <Input id="passInp" ref={pass} type="password" />
        <Button
          colorScheme="red"
          onClick={(e) => {
            console.log(users);
            console.log("before log");

            // console.log(name.current.value)
            // console.log(pass.current.value)
            // console.log(user.name)

            users.map((user) => {
              console.log(user);
              console.log(name.current.value);
              console.log(user.password, pass.current.value);
              let searched = users.find(
                (user) =>
                  user.name === name.current.value &&
                  user.password === pass.current.value
              );

              if (searched) {
                console.log("User found");
                setisLogged(true);
              } else {
                console.log("User not found");
                setisLogged(false);
              }
            });
          }}
        >
          Login
        </Button>
      </FormControl>
    </>
  );
}

export default Login;
