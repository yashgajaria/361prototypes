import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem, Table } from "react-bootstrap";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import {useLocation} from "react-router-dom";


export default function Home() {

const { state } = useLocation(); 
var resp = JSON.parse(state.results);
const reccomendedDictLight= {
  natural: "EV3",
  mid: "E7 Atrium",
  dark: "RCH Basement"
}
const reccomendedDictNoise= {
  loud: "SLC Eating Area",
  medium: "E5 SYDE Lounge",
  silent: "E5 Quiet Study"
}
const reccomendedDictPurpose= {
  Group_Study: "E5/E7 Atrium",
  Personal_Focus_Session: "DC Quiet Study",
  Casual_Personal_Study: "SLC Food Court Balcony"
}


  return (
    <>
    <div className="Home">
      <h2> Reccomended Places</h2>
          <p>{reccomendedDictLight[resp.question1]}</p>
          <p>{reccomendedDictNoise[resp.question2]}</p>
          <p>{reccomendedDictPurpose[resp.question3]}</p>
<iframe title="361 Project" width="1710" height="811.5" src="https://app.powerbi.com/reportEmbed?reportId=b4e13873-5a70-4ccb-ad5a-bda4cd19d354&autoAuth=true&ctid=723a5a87-f39a-4a22-9247-3fc240c01396&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWNhbmFkYS1jZW50cmFsLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameBorder="0" allowFullScreen={true}></iframe>    </div>
<h3>Want to Advocate?</h3>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Dean of Engineering</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>SYDE Academic Advisor</td>
      <td><a href="mailto:email@example.com">email</a>
</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Head of SYDE</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</>
  );
}
