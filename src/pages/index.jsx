import React from 'react';
import styles from '../styles/homePage.ts';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from "next/head";

const HomePage = () => {
  const classes = makeStyles(styles)();
  return (
    <div className={classes.root}>
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container justify="center" className={classes.main}>
        <Grid item>
          <Typography variant="h3" className={classes.title}>
            Welcome to my website!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
