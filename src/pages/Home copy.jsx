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
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" //Source: https://www.stantec.com/en/ideas/content/blog/2017/studying-the-spaces-designed-for-studying-science
        },
        {
          value:"mid",
          imageLink:<img src="/home/yash/Documents/361prototypes/images/Medium.jpg" width="50" height="50"/>
          //Source: https://www.pinterest.ca/pin/woodward-library-basement-study-area-this-location-has-all-science-books-and-text-books-as-well-as-some-table-space--395472410998781179/
          // imageLink:"/home/yash/Documents/361prototypes/images/Medium.jpg"//Source: https://www.pinterest.ca/pin/woodward-library-basement-study-area-this-location-has-all-science-books-and-text-books-as-well-as-some-table-space--395472410998781179/
          // imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"//Source: https://www.pinterest.ca/pin/woodward-library-basement-study-area-this-location-has-all-science-books-and-text-books-as-well-as-some-table-space--395472410998781179/
        },
        {
          value:"dark",
          imageLink:"/./images/Dark2.jpg" //Source: https://www.thoughtco.com/studying-night-before-test-3212056
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
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" //https://brocku.ca/brock-news/2021/09/spaces-available-across-campus-for-individual-group-study/
        },
        {
          value:"meduim",
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" //https://students.ubc.ca/ubclife/which-ubc-library-you
        },
        {
          value:"silent",
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" //https://nowtoronto.com/lifestyle/education/study-space-toronto-colleges-universities
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
    <Button href="https://docs.google.com/spreadsheets/d/1o9cdA617yVi5t83aChn91FvQts81s50UOKpZBTdb6ZI/edit?usp=sharing">Upload Personal Data</Button> 
  </div>
</>
  )
}

export default Home;