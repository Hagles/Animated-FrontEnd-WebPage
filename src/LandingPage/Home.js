import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Border from "./Border/border";
import Header from "./Header/header";
import Banner from "./Banner/banner";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Border />
      <Header />
      <Banner />
     
    </>
  );
}
