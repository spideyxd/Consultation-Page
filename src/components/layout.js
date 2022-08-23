/** @jsxRuntime classic */
/** @jsx jsx */
import logo from "assets/images/logo.png";
import { jsx, Container, Flex, Button } from "theme-ui";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import LogoHeader from "./logo";
export default function Layout({ children }) {
  return (
    <>
    <img
    src={logo}
    style={{Top: "0", right: "0" }}
  />
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* <Header /> */}
      {/* <LogoHeader/> */}

     

      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer />
    </Flex>
    </>
  );
}
