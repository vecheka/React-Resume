import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

import style from './style.js';

class Skills extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };
    this.stars = {
      'Java': 5,
      'Python': 5,
      'Reactjs': 4,
      'HTML': 4,
      'Nodejs': 4,
      'JavaScript': 4,
      'CSS': 3,
      'C': 3,
      'MySQL/PSQL': 3,
      'Serverless': 3
    };
    // this.languages = ['Java', 'Python', 'Reactjs', 'HTML', 'C', ];
    this.languages = Object.keys(this.stars);
  }

  componentDidMount = async () => {

  }



  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.title}>
          <span > Skills </span>
        </div>
        <Grid container spacing={3} className={classes.body}>
          {this.languages.map(language => (
            <Grid item xs={4}>
              <div className={classes.language}> {language} </div>
              {[...Array(this.stars[language])].map((x, i) => <StarRoundedIcon className={classes.starIcon} key={i} />)}
              {this.stars[language] < 5 &&
                <span>
                  {[...Array(5 - this.stars[language])].map((x, i) => <StarBorderRoundedIcon className={classes.starIcon} key={i} />)}
                </span>
              }
            </Grid>
          )
          )}
        </Grid>
      </div>
    );
  }

}

export default withStyles(style)(Skills);
