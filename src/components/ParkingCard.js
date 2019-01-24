import React from "react";
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

const ParkingCard = () => {
  return (
    <Card 
      <CardContent>
        <Typography
          
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">          
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
