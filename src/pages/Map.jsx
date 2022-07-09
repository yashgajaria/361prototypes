import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./Home.css";
import {useLocation} from "react-router-dom";


export default function Home() {

  //Parse passed in data for the survey results 
  const { state } = useLocation(); 
  var resp = JSON.parse(state.results);

  //Data Dictionaries to determine recomendations from the survey results 
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


  return (
    <>
    <div className="Home">
      {/* Display recommendations based on survey results */}
      <h2> Recommended Places</h2>
        <p>{recomendedDictLight[resp.question1]}</p>
        <p>{recomendedDictNoise[resp.question2]}</p>
        <p>{recomendedDictPurpose[resp.question3]}</p>
        {/* HTML Element of the PowerBI Dashboard */}
      <iframe title="361 Project" width="1360.85" height="646.35" src="https://app.powerbi.com/view?r=eyJrIjoiNjg0Y2M5MWUtMWVhZi00ZWI4LTlkMjAtODlhOWU3YmRjYzk3IiwidCI6IjFiMzk3YmRjLTM4YTEtNGY4MS1hYzg4LTU4NzNlMTljMjYzZCJ9" frameBorder="0" allowFullScreen={true}></iframe>
    </div>
    {/* Table with details on who to contact to advocate */}
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
      <td>Jane Doe</td>
      <td>Dean of Engineering</td>
      <td><a href="mailto:janedoe@uwaterloo.ca?subject=We want to see improved study spaces!">janedoe@uwaterloo.ca</a> </td>
    </tr>
    <tr>
      <td>John Smith</td>
      <td>Chair of SYDE</td>
      <td><a href="mailto:ljohnsmith@uwaterloo.ca?subject=We want to see improved study spaces!">johnsmith@uwaterloo.ca</a></td>
    </tr>
    <tr>
      <td>Bob Wilson</td>
      <td>SYDE Student Advisor</td>
      <td><a href="mailto:bobwilson@uwaterloo.ca?subject=We want to see improved study spaces!">bobwilson@uwaterloo.ca</a>
</td>
    </tr>
  </tbody>
</Table>
</>
  );
}
