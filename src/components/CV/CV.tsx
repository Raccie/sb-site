import React from 'react';
import './CV.css';

import educationData from './education.json'

const education = educationData.map((data)=>{
  let degrees = [];
  if(data.degrees.length > 0) {
    degrees.push(<h5>Abschluss:</h5>)
    for (let d of data.degrees) {
      degrees.push(<h5>&bull; {d}</h5>)
    }
  }
  return (
      <div className="inline listItemWhole">
        <div className="listItemLeft">
          {data.start} - {data.end}
        </div>
        <div className="vertical">
        </div>
        <div className="listItemRight">
          <h4 key={data.name}>{data.name}</h4>
          {degrees}
        </div>
      </div>
  )
})

const Hobbies: React.FC = ()=>{
  return (
    <div>
      <ul>
        <li>Bruh</li>
        <li>Bruh</li>
        <li>Bruh</li>
      </ul>
    </div>
  )
}

const CV: React.FC = () => {
  return(
  <div className="CV">
    <div id="education">
      <h2>Ausbildung</h2>
      {education}
    </div>
    <div id="hobbies">
      <h2>Hobbies</h2>
      <Hobbies/>
    </div>
  </div>
  )
};

export default CV;
