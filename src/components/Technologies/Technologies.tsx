import React from 'react';
import './Technologies.css';
import {LinearProgress, LinearProgressProps} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  larger: {
    height: "100px"
  }
});

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  const classes = useStyles();

  return (
      <Box display="flex" alignItems="center">
        <Box className={classes.root} mr={1}>
          <LinearProgress className={classes.larger} variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
              props.value,
          )}%`}</Typography>
        </Box>
      </Box>
  );
}

const Technologies: React.FC = () => {

  let items = [];
  for(let i = 0; i < 5; i++){
    items.push(<LinearProgressWithLabel className={"bar"} value={100}/>)
    items.push(<br/>)
  }

  return(
  <div className="Technologies">
    {items}
  </div>
  )
};

export default Technologies;
