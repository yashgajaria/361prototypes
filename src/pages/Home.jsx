import React, { useState, useEffect, useCallback } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
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
      title:"Do you like your environments loud like a lion or quiet like a girafee",
      choices:[
        {
          value:"lion",
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
        },
        {
          value:"giraffe",
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
        }
      ]
    },
    {
      type:"imagepicker",
      name:"question2",
      title:"Brightness Question",
      choices:[
        {
          value:"DArk",
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
        },
        {
          value:"Light",
          imageLink:"https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
        }
      ]
    },

  ]
};

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

  return <Survey model={survey} />;
}

export default Home;