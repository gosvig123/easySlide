/** @format */

import React from "react";
import { Flex } from "@chakra-ui/react";
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
    <Flex
      className="home"
      h={"100vh"}
      w={"100vw"}
      zIndex={1}
      p={0}
      m={0}
      border={0}
      bg={"white"}
      position={"absolute"}
    >
      <h1
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "30px",
          color: "black",
          zIndex: 1,
        }}
      >
        SmartSlides - Create Beautiful Presentations In Minutes
      </h1>
      <br />

      <Flex
        flexDir={"row"}
        style={{
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* <form
          style={{
            marginRight: "50px",
          }}
          onSubmit={handleSubmitCreateUser} */}
        {/* > */}
        {/* <h3>Create a new Account</h3>
          <label htmlFor="email">Email</label>
          <input
            style={{
              width: "200px",
              marginBottom: "10px",
              marginLeft: "20px",
              borderRadius: "5px",
              border: "none",
            }}
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
              style={{
                marginLeft: "20px",
                borderRadius: "5px",
                border: "none",
              }}
            />
          </label>
          <br />
          <button
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              color: "white",
              border: "1px solid black",
              width: "100px",
              height: "30px",
              marginTop: "10px",
            }}
            type="submit"
          >
            Create
          </button>
        </form> */}
        <iframe
          width="760"
          style={{
            position: "absolute",
            top: "30%",
          }}
          height="415"
          src="https://www.youtube.com/embed/m8j7wlW-NPI?start=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <form
          style={{
            marginLeft: "50px",
          }}
          onSubmit={handleSubmitLogin}
        >
          <h3>Login to your account</h3>

          <label htmlFor="email">Email</label>
          <input
            style={{
              width: "200px",
              marginBottom: "10px",
              marginLeft: "20px",
              borderRadius: "5px",
              border: "none",
            }}
            onChange={handleChangeLogin}
            name="email"
            type="email"
            value={email}
          />
          <br />
          <label htmlFor="password">
            Password
            <input
              style={{
                marginLeft: "20px",
                borderRadius: "5px",
                border: "none",
              }}
              onChange={handleChangeLogin}
              name="password"
              value={password}
              type="password"
            />
          </label>
          <br />
          <button
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              color: "white",
              border: "1px solid black",
              width: "100px",
              height: "30px",
              marginTop: "10px",
            }}
            type="submit"
          >
            Login
          </button>
        </form> */}
      </Flex>
    </Flex>
  );
}

export default Home;
