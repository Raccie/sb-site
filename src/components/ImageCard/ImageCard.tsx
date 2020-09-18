import React from 'react';
import style from './ImageCard.module.css';
import {Box, BoxProps} from "@material-ui/core";

function Card(props: BoxProps & { image: string, title: string, description: string }){
  return (
      <Box width={props.width} className={style.card}>
        <img style={{maxWidth: props.width, maxHeight: props.width}} src={props.image} alt={props.title + ' logo'}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Box>
  )
}

export {Card};
