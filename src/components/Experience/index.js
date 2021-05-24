import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';

import Job from './job.js';
import style from './style.js';

class Experience extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };
    this.jobs = [
      {
        title: 'Engineer I',
        location: 'Seattle, WA',
        company: 'Nordstrom',
        date: 'Sept 2019 - Present',
        description: 'Currently working as a software engineer in a network team, writing network automations and network tools for network engineers. Developing coding standards within the team, managing Linux servers, and open source and proprietary softwares.'
      },
      {
        title: 'Software Engineer Intern',
        location: 'Seattle, WA',
        company: 'Nordstrom',
        date: 'June 2019 - Sept 2019',
        description: 'Wrote automation utilizing external APIs like LiveAction and Datadog to create telemetry report for analysis and alert. Developed Slack App and web server as network tools for network engineers.'
      },
      {
        title: 'Quantitative Tutor',
        location: 'Tacoma, WA',
        company: 'University of Washington Tacoma',
        date: 'Dec 2017 - June 2019',
        description: 'Enhanced students understanding in Computer Science & Mathematics, and organized math and Computer Science workshops to increse students\' academic success.'
      },
      {
        title: 'Tutor',
        location: 'Seattle, WA',
        company: 'South Seattle College',
        date: 'Jan 2016 - June 2017',
        description: 'Assisted students with the concepts of Computer Science & Math.'
      },

    ];
    this.gridSize = parseInt(12 / this.jobs.length);
  }

  componentDidMount = async () => {
    console.log(this.gridSize);
  }



  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.title}>
          <span > Experience </span>
        </div>
        <Grid container spacing={4} className={classes.body}>
          {this.jobs.map(job => (
            <Grid item xs={this.gridSize}>
              <Job
                title={job.title}
                location={job.location}
                company={job.company}
                date={job.date}
                description={job.description}
              />
            </Grid>
          ))}

        </Grid>


        <div style={{  borderBottom: '1px dotted' }}> </div>
      </div>
    );
  }

}

export default withStyles(style)(Experience);
// <Grid container spacing={4} className={classes.body}>
//   {this.jobs.map(job => (
//     <Grid item xs={3}>
//       <Job
//         title={job.title}
//         location={job.location}
//         company={job.company}
//         date={job.date}
//         description={job.description}
//       />
//     </Grid>
//   ))}
//
// </Grid>
