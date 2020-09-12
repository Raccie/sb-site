import React from 'react';
import './Projects.css';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const Projects: React.FC = () => {
  const bull = <span className={"bullet"}>•</span>;

  return (
    <div className={"Projects"}>
      <div className={"root"}>
        <Grid container spacing={2}>
          <Grid item >
            <Card className={"root"}>
              <CardContent>
                <Typography className={"title"} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={"pos"} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item >
            <Card className={"root"}>
              <CardContent>
                <Typography className={"title"} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={"pos"} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export default Projects;
