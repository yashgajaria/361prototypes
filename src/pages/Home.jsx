import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");


//JSON model for survey questions and options 
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
          imageLink:"https://www.advisor.ca/wp-content/uploads/sites/5/2018/12/800x600_Education_Classroom_54318832_xl123RFStockPhoto.jpg" //https://www.advisor.ca/news/industry-news/university-of-waterloo-will-teach-sustainable-financial-management/
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
// Survey template source: Survey JS surveyjs.io

//Main function for survey logic on the home page-> this section handles the survey responses
function Home() {
  //Establish survey model and initiate navigate
  const survey = new Model(surveyJson);
  const navigate = useNavigate();

  //Handle completation of survey and redirect
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);

    //Redirect to map page and pass in survey results
    navigate('/map', { state: { results:results }});
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
    <div style={{
      paddingBottom: "100px",
      justifyContent: "center",
      alignItems: 'center',
    }}>
      {/* Section to prompt users to upload their own data */}
    <p>If you would like to upload your own data to contribute to the project below, please copy and paste it (following the same format) onto the Google Sheets below and manually enter your location for your data</p>
    </div>
      <Button variant="success" href="https://docs.google.com/spreadsheets/d/1o9cdA617yVi5t83aChn91FvQts81s50UOKpZBTdb6ZI/edit?usp=sharing" target="_blank">Upload Personal Data</Button> 
  </div>
</>
  )
}

export default Home;