import React from 'react';
import './Technology.css';
import {useRouteMatch} from 'react-router'
import technologies from '../Technologies/technologies.json'
import {articles} from '../TechnologyCollection/TechnologyCollection'

function getID(url:string){
  const split = url.split('/');
  return split[split.length-1];
}

const Technology : React.FC = () => {
  const {url} = useRouteMatch();

  let tech = technologies.find((techno)=>techno.id === getID(url));
  if(tech === undefined)
    return <h3>technology <span className="primary">"{getID(url)}"</span> not found</h3>

  let site = articles.get(tech.id)();
  console.log(site);
  if(site!==undefined)
    return (
      <div className="Technology">
        {site}
      </div>
    )
  else
    return <h3>no article for <span className="primary">{tech.name}</span> found</h3>
}


export default Technology;
