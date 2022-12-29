/** @format */

import { Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

function Home() {
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [createUsePassword, setCreateUsePassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCreateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setCreateUserEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setCreateUsePassword(e.target.value);
    }
  };

  const handleSubmitCreateUser = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    // check if email and password are valid
    if (!createUserEmail || !createUsePassword) {
      return;
      //TODO add error message
    }
    const tokenForNewUser = await fetch("http://localhost:8080/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: createUserEmail,
        password: createUsePassword,
      }),
    }).then((res) => res.json());

    localStorage.setItem("token", JSON.stringify(tokenForNewUser));
    window.location.href = "/app";
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const refreshToken = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());

    localStorage.setItem("token", JSON.stringify(refreshToken));
    window.location.href = "/app";
  };

  return (
    <Flex className="mainFlexHome" flexDir={"row"}>
      <h1>Home</h1>
      <form onSubmit={handleSubmitCreateUser}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChangeCreateUser}
          name="email"
          type="email"
          value={createUserEmail}
        />
        <br />
        <label htmlFor="password">
          Password
          <input
            onChange={handleChangeCreateUser}
            name="password"
            value={createUsePassword}
            type="password"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmitLogin}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChangeLogin}
          name="email"
          type="email"
          value={email}
        />
        <br />
        <label htmlFor="password">
          Password
          <input
            onChange={handleChangeLogin}
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
