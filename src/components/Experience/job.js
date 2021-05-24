import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Grid from '@material-ui/core/Grid';

import style from './style.js';

class Job extends React.Component {

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
      <div style = {{ marginLeft: '' }}>
          <div> {this.props.title} </div>
          <div className={classes.location}> {this.props.location} </div>
          <div className={classes.company}> {this.props.company} </div>
          <div className={classes.date}> {this.props.date} </div>
          <div className={classes.description}>
            {this.props.description}
          </div>
      </div>
    );
  }

}

export default withStyles(style)(Job);
