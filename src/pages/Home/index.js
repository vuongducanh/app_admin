import React from 'react'
import SurveyComponent from './../../components/SurveyComponent';
import './styles.scss'

const Home = () => {
  const _onComplete = (value) => {
    console.log('value = ', value);
  }

  return (
    <div className="wrap-home">
      <SurveyComponent
        onComplete={_onComplete}
      />
    </div>
  )
}

export default Home
