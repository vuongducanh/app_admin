import React from 'react';
import './styles.scss';
// import { ReactFormGenerator } from 'react-form-builder2';
// import 'react-form-builder2/dist/app.css';

const Dashboard = () => {
  return (
    <div className="login">
      Dashboard
      {/* <ReactFormGenerator
        form_action="/path/to/form/submit"
        form_method="POST"
        task_id={12} // Used to submit a hidden variable with the id to the form from the database.
        // answer_data={JSON_ANSWERS} // Answer data, only used if loading a pre-existing form with values.
        // authenticity_token={AUTH_TOKEN} // If using Rails and need an auth token to submit form.
        // data={JSON_QUESTION_DATA} // Question data
      /> */}
    </div>
  );
};

export default Dashboard;
