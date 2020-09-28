import React from "react";
import {Box, BoxProps} from "@material-ui/core";
// @ts-ignore
import classes from "./ImageCard.module.css";
import TagColors from "../../tags.json";

function Card(props: BoxProps & { image: string, title: string, description: string, tags?:string[] }){

  let tags = [];
  if(props.tags)
    for(let t of props.tags){
      const ct:any  = TagColors.find((triple)=>triple.key===t);
      const {bg, color} = ct;
      if(ct)
        tags.push(<span key={t} style={{backgroundColor: bg, color: color}} className={classes.tag}>{t}</span>)
      else
        tags.push(<span key={t} className={classes.tag}>{t}</span>)
    }
  return (
      <Box width={props.width} className={classes.card}>
        <img style={{maxWidth: props.width, maxHeight: props.width}} src={props.image} alt={props.title + ' logo'}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={classes.tags}>
          {tags?tags:""}
        </div>
      </Box>
  )
}

export {Card};
