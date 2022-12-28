/** @format */

import { Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if email and password are valid
    if (!email || !password) {
      return;
      //TODO add error message
    }

    const tokenForNewUser = await fetch("http://localhost:8080/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    // write token to local storage
    localStorage.setItem("token", JSON.stringify(tokenForNewUser));
    window.location.href = "/app";
  };

  return (
    <Flex className="mainFlexHome" flexDir={"column"}>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
        />
        <br />
        <label htmlFor="password">
          Password
          <input
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </Flex>
  );
}

export default Home;
