import React from "react";
import TopNav from "../../components/TopNav/TopNav";

import { Container, AppBar } from "@mui/material";

function Home() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
        }}
      >
        <TopNav />
        <Container maxWidth="lg"></Container>
      </AppBar>
    </>
  );
}

export default Home;
