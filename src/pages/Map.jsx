import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem, Table, Button } from "react-bootstrap";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import {useLocation} from "react-router-dom";


export default function Home() {

const { state } = useLocation(); 
const [powerBI, setPowerBI] = useState("https://app.powerbi.com/reportEmbed?reportId=649c6934-414b-4999-bc2d-8ff47ea0d01c&autoAuth=true&ctid=723a5a87-f39a-4a22-9247-3fc240c01396&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWNhbmFkYS1jZW50cmFsLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9")
var resp = JSON.parse(state.results);
const recomendedDictLight= {
  natural: "EV3",
  mid: "E7 Atrium",
  dark: "RCH Basement"
}
const recomendedDictNoise= {
  loud: "SLC Eating Area",
  medium: "E5 SYDE Lounge",
  silent: "E5 Quiet Study"
}
const recomendedDictPurpose= {
  "Group Study": "E5/E7 Atrium",
  "Personal Focus Session": "DC Quiet Study",
  "Casual Personal Study": "SLC Food Court Balcony"
}

// function updatePower(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
// }

  return (
    <>
    <div className="Home">
      <h2> Recommended Places</h2>
          <p>{recomendedDictLight[resp.question1]}</p>
          <p>{recomendedDictNoise[resp.question2]}</p>
          <p>{recomendedDictPurpose[resp.question3]}</p>
          {/* <Button onclick={updatePower}>
              Change Option
            </Button> */}
<iframe title="361 Project" width="1598.85" height="758.35" src="https://app.powerbi.com/view?r=eyJrIjoiNWVhZDliMGYtOTY0ZC00NjI4LWIwMmYtOTI4MmVkZjNjODBmIiwidCI6IjFiMzk3YmRjLTM4YTEtNGY4MS1hYzg4LTU4NzNlMTljMjYzZCJ9" frameBorder="0" allowFullScreen={true}></iframe>    </div>
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
      <td>Mary Wells</td>
      <td>Dean of Engineering</td>
      <td><a href="mailto:mawells@uwaterloo.ca?subject=We want to see improved study spaces!">mawells@uwaterloo.ca</a> </td>
    </tr>
    <tr>
      <td>Lisa Aultman-Hall</td>
      <td>Chair of SYDE</td>
      <td><a href="mailto:lisa.aultman-hall@uwaterloo.ca?subject=We want to see improved study spaces!">lisa.aultman-hall@uwaterloo.ca</a></td>
    </tr>
    <tr>
      <td>Victoria Cotton</td>
      <td>SYDE Student Advisor</td>
      <td><a href="mailto:vj2cotto@uwaterloo.ca?subject=We want to see improved study spaces!">vj2cotto@uwaterloo.ca</a>
</td>
    </tr>
  </tbody>
</Table>
</>
  );
}
