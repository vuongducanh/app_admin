import React, { Component } from "react";

// import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";

import "survey-knockout/survey.css";
import "survey-creator/survey-creator.css";
import "./styles.scss";

SurveyCreator.StylesManager.applyTheme("default");

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onComplete = () => null } = this.props;
  
    // Show Designer, Test Survey, JSON Editor and additionally Logic tabs
    var options = {
      showLogicTab: false,
      showTestSurveyTab: false,
      showJSONEditorTab: false,
      questionTypes : ["checkbox"],
    };
    //create the SurveyJS Creator and render it in div with id equals to "creatorElement"
    var creator = new SurveyCreator.SurveyCreator("creatorElement", options);

    //Show toolbox in the right container. It is shown on the left by default
    creator.showToolbox = "right";
    //Show property grid in the right container, combined with toolbox
    creator.showPropertyGrid = "right";
    //Make toolbox active by default
    creator.rightContainerActiveItem("toolbox");

    creator.onModified.add(function (sender, options) {
      onComplete(sender.JSON)
    })
  }


  render() {
    return <div id="creatorElement" />;
  }
}

export default SurveyComponent;
