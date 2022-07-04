import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import {useLocation} from "react-router-dom";


export default function Home() {

const { state } = useLocation();  

  return (
    <div className="Home">
      <p> Insert Map Here</p>
      <p>{state.results}</p>
    </div>
  );
}
