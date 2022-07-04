import { useCallback } from "react";

import "survey-core/modern.min.css";
// import 'survey-core/survey.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

// const surveyJson = {
//   elements: [
//     {
//       name: "FirstName",
//       title: "Enter your first name:",
//       type: "text"
//     },
//     {
//       name: "LastName",
//       title: "Enter your last name:",
//       type: "text"
//     }
//   ]
// };
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


function App() {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);
    // history.push("/Map");

    // alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
  // <Routes />
}

export default App;

