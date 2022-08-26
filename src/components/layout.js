/** @jsxRuntime classic */
/** @jsx jsx */
import logo from "assets/images/logo.png";
import { jsx, Container, Flex, Button } from "theme-ui";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
export default function Layout({ children }) {
  return (
    <>
    <div style={{display:"flex", padding:"5px ,5px" ,justifyContent:"center" }} >
    <img
    src={logo}
    style={{maxWidth:"480px",width:"100%",marginLeft:"15px",marginRight:"15px" }}
  /></div>
    <Flex
      sx={{ 
       
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
