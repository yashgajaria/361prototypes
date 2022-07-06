import React, { useState, useEffect, useCallback } from "react";
import { PageHeader, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");


const surveyJson = {
  elements: [
    {
      type:"imagepicker",
      name:"question1",
      title:"Which image best describes the ideal brightness and light style (natural, artificial) when it comes to picking a study environment?",
      choices:[
        {
          value:"natural",
          imageLink:"https://www.stantec.com/content/dam/stantec/images/ideas/blogs/009/what-makes-successful-study-space-academic-building-2.jpg" //Source: https://www.stantec.com/en/ideas/content/blog/2017/studying-the-spaces-designed-for-studying-science
        },
        {
          value:"mid",
          imageLink:"https://www.stantec.com/content/dam/stantec/images/ideas/blogs/009/what-makes-successful-study-space-academic-building-4.jpg.transform/small/image.20200421.jpeg" //Source https://www.stantec.com/en/ideas/content/blog/2017/studying-the-spaces-designed-for-studying-science
        },
        {
          value:"dark",
          imageLink:"https://www.thoughtco.com/thmb/te6wg6ehTIjb9JHMAPe_tEQhsHg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/StudyingAtNight-58c2c2635f9b58af5ca0464b.jpg" //Source: https://www.thoughtco.com/studying-night-before-test-3212056
        }
      ]
    },
    {
      type:"imagepicker",
      name:"question2",
      title:"What type of surroundings do you want in your environment?",
      choices:[
        {
          value:"loud",
          imageLink:"https://brocku.ca/brock-news/wp-content/uploads/2021/09/Rankin-Family-Pavilion-RS-1600x900.jpg?x70330" //https://brocku.ca/brock-news/2021/09/spaces-available-across-campus-for-individual-group-study/
        },
        {
          value:"medium",
          imageLink:"https://students.ubc.ca/sites/students.ubc.ca/files/styles/blog_header_image_widescreen_1x/public/20171201%20-%20Study%20Spaces%20-%20Roberge%20-%205_2.jpg?itok=P-1ttAqw" //https://students.ubc.ca/ubclife/which-ubc-library-you
        },
        {
          value:"silent",
          imageLink:"https://nowtoronto.com/wp-content/uploads/2020/06/GeorgeBrownCollege-studyspace-980x618.jpg" //https://nowtoronto.com/lifestyle/education/study-space-toronto-colleges-universities
        }
      ]
    },
    {
      type: "dropdown",
      name: "question3",
      title: "What is your purpose for your next study session?",
      choices: [
       "Group Study",
       "Personal Focus Session",
       "Casual Personal Study"
      ]
     }
  ]
};
// Survey template: Survey JS surveyjs.io

function Home() {
  const survey = new Model(surveyJson);
  const navigate = useNavigate();
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);
    // navigate.push({
    //   pathname: '/map',
    //     state: "hello"
    // });
    
    navigate('/map', { state: { results:results }});

    // alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <>
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <Survey model={survey} />
  </div>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <p>If you would like to upload your own data to contribute to the project below, please copy and paste it onto the Google Sheets below and manually enter your location</p>
    <Button href="https://docs.google.com/spreadsheets/d/1o9cdA617yVi5t83aChn91FvQts81s50UOKpZBTdb6ZI/edit?usp=sharing" target="_blank">Upload Personal Data</Button> 
  </div>
</>
  )
}

export default Home;