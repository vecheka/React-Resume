import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import style from './style.js';
import resumePDF from 'files/resume.pdf';

class About extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount = async () => {

  }



  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.title}>
          <span > About </span>
        </div>
        <Grid container spacing={5} className={classes.body}>
          <Grid item xs={6} >
            <span className={classes.sectionHeader}> Work. </span>
            My name is Vecheka (say Ve-check-ah). I was born and raised in Cambodia, and moved to the US to pursue higher education back in 2015.
            My journey here has been full of obstacles and challenges but I learned, grew, and most importantly I enjoyed every bit of it. Like they say
            <span className={classes.italic} > "Change is the only constant in life". </span> As an engineer, I enjoy solving hard problems and learning new technologies as well writing
            softwares that make people's lives easy. I have experienced with many different programmming languages, and I am also a quick learner, and love to get things done.

            <br/><br/>
            I am currently working as a software engineer in a network team at Nordstrom. I write automations to help network engineers with automationg network devices across all Nordstrom's stores, and network tools
            for troubleshooting use on the networks. Check out <a className={classes.resume} href={resumePDF} target="_blank" rel="noreferrer">my resume</a> to learn more about what I do.

          </Grid>
          <Grid item xs={6}>
            <span className={classes.sectionHeader}> Fun. </span>
            I like to keep my brain active and continue to learn new things all the time but at the same time, I have to give my body the same attention. I enjoy going to the gym and going hiking around Washington
            with my friends during the Summer weekends. I am also a big road trip lover, I usually plan a big road trip around the US during the summer with a friend or by myself. The scenic around the US is
            one of the best in the world if not the best. I dislike the rain and Winter season.
            <br/><br/>

          </Grid>
        </Grid>
        <div style={{  borderBottom: '1px dotted' }}> </div>
      </div>
    );
  }

}

export default withStyles(style)(About);
