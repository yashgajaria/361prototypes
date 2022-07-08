import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem, Table, Button } from "react-bootstrap";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import {useLocation} from "react-router-dom";


export default function Home() {

// const { state } = useLocation(); 
const [powerBI, setPowerBI] = useState("https://app.powerbi.com/reportEmbed?reportId=b4e13873-5a70-4ccb-ad5a-bda4cd19d354&autoAuth=true&ctid=723a5a87-f39a-4a22-9247-3fc240c01396&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWNhbmFkYS1jZW50cmFsLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9")
// var resp = JSON.parse(state.results);
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
          <p>{recomendedDictLight["natural"]}</p>
          <p>{recomendedDictNoise["medium"]}</p>
          <p>{recomendedDictPurpose["Casual Personal Study"]}</p>
          {/* <Button onclick={updatePower}>
              Change Option
            </Button> */}
<iframe title="361 Project" width="1598.85" height="758.35" src="https://app.powerbi.com/view?r=eyJrIjoiNjg0Y2M5MWUtMWVhZi00ZWI4LTlkMjAtODlhOWU3YmRjYzk3IiwidCI6IjFiMzk3YmRjLTM4YTEtNGY4MS1hYzg4LTU4NzNlMTljMjYzZCJ9" frameBorder="0" allowFullScreen={true}></iframe>    </div>
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
