import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = () => (
  <>
    <Jumbotron
      style={{
        color: "white",
        marginTop: "10px",
        textAlign: "center",
        backgroundColor: "#2c323c",
        paddingTop: "20px",
        paddingBottom: "30px"
      }}
    >
      <Container>
        <h1 style={{ fontSize: "50px" }} className="center">
          Clicky Game !
        </h1>
        <p style={{ fontSize: "30px" }}>
          Click your favorite villan to start the game!
        </p>
      </Container>
    </Jumbotron>
  </>
);
export default Jumbo;
