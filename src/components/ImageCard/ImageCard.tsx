import React from 'react';
import './ImageCard.css';
import {Box, BoxProps} from "@material-ui/core";

const ImageCard = (props: BoxProps & { image: string, title: string, description: string }) => (
  <div className="ImageCard">
    <Box width={props.width} id={"card"}>
      <img style={{maxWidth: props.width, maxHeight: props.width}} src={props.image} alt={props.title + ' logo'}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Box>
  </div>
);

export default ImageCard;
