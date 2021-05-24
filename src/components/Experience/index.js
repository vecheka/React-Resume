import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import style from './style.js';

class Experience extends React.Component {

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
          <span > Experience </span>
        </div>
        <Grid container spacing={4} className={classes.body}>
          <Grid item xs={3}>
            <div> Engineer I </div>
            <div className={classes.location}> Seattle, WA </div>
            <div className={classes.company}> Nordstrom </div>
            <div className={classes.date}> Sept 2019 - Present </div>
            <div className={classes.description}>
              Currently working as a software engineer in a network team, writing network automations and network tools for network engineers.
              Developing coding standards within the team, managing Linux servers, and open source and proprietary softwares.
            </div>
          </Grid>

          <Grid item xs={3}>
            <div> Software Engineer Intern </div>
            <div className={classes.location}> Seattle, WA </div>
            <div className={classes.company}> Nordstrom </div>
            <div className={classes.date}> June 2019 - Sept 2019 </div>
            <div className={classes.description}>
              Wrote automation utilizing extenal APIs like LiveAction and Datadog to create
              telemetry report for analysis and alert. Developed Slack App and web server as network tools for network engineers.
            </div>
          </Grid>

          <Grid item xs={3}>
            <div> Quantitative Tutor  </div>
            <div className={classes.location}> Tacoma, WA </div>
            <div className={classes.company}> University of Washington Tacoma </div>
            <div className={classes.date}> Dec 2017 - June 2019 </div>
            <div className={classes.description}>
              Enhanced students understanding in Computer Science & Mathematics, and organized math and Computer Science workshops
              to increse students' academic success.
            </div>
          </Grid>

          <Grid item xs={3}>
            <div> Tutor </div>
            <div className={classes.location}> Seattle, WA </div>
            <div className={classes.company}> South Seattle College </div>
            <div className={classes.date}> Jan 2016 - June 2017 </div>
            <div className={classes.description}>
              Assisted students with the concepts of Computer Science & Math.
            </div>
          </Grid>

        </Grid>
      </div>
    );
  }

}

export default withStyles(style)(Experience);
