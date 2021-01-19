import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="right"
        gutterBottom
      >
        Hello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>{" "}
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>{" "}
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>{" "}
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>{" "}
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>{" "}
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        {/* <Button variant="contained" color="secondary"> */}
        TEST BUTTON
      </Button>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>{" "}
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>{" "}
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>{" "}
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8} />y
          <Grid item xs={2}>
            Test
          </Grid>
        </Grid>
        <Grid item xs={12} justify="space-around" container>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resource
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resource
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resource
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
