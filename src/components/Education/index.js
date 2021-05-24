import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import style from './style.js';

class Education extends React.Component {

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
          <span > Education </span>
        </div>
        <Grid container spacing={6} className={classes.body}>
          <Grid item xs={6}>
            <div> University of Washington Tacama </div>
            <div className={classes.date}> Sept 2017 - June 2019  </div>
            <div className={classes.description}>
              <span className={classes.descriptionHeader}> GPA: </span> 3.65<br/><br/>
              <span className={classes.descriptionHeader}> Favorite Classes: </span> Machine Learning & Algorithms<br/><br/>
              <span className={classes.descriptionHeader}> Extra Curricular: </span> Represented the school in the International Collegiate Programming Contest. Also, participated in HackWA.<br/><br/>
              <span className={classes.descriptionHeader}> Honors: </span> Annual Dean's List<br/><br/>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div> South Seattle College </div>
            <div className={classes.date}> April 2015 - Dec 2016  </div>
            <div className={classes.description}>
              <span className={classes.descriptionHeader}> GPA: </span> 3.80 <br/><br/>
              <span className={classes.descriptionHeader}> Favorite Classes: </span> Python & Java Programming <br/><br/>
              <span className={classes.descriptionHeader}> Extra Curricular: </span> Collaborated with a professor to implement a wifi sensor to collect and analyze wireless data using Raspberry Pi, and Python in order to improve wireless spots on campus.<br/><br/>
              <span className={classes.descriptionHeader}> Honors: </span> Annual Dean's List, Boeing Endowed Scholarships<br/><br/>
            </div>
          </Grid>

        </Grid>
      </div>
    );
  }

}

export default withStyles(style)(Education);
