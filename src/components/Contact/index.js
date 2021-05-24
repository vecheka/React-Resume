import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import style from './style.js';
// import linkedin from 'images/linkedin.png';
// import github from 'images/github.png';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';



class Contact extends React.Component {

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
          
        </div>

        <Grid container spacing={1} className={classes.body}>
          <Grid item xs={12} className={classes.github} >
            <a href='https://www.linkedin.com/in/vecheka-chhourn/' target="_blank" rel="noreferrer"> <FaLinkedinIn className={classes.icon} /> </a>
            <a href='https://github.com/vecheka' target="_blank" rel="noreferrer"> <FaGithub className={classes.icon} /> </a>
          </Grid>
        </Grid>

      </div>
    );
  }

}

export default withStyles(style)(Contact);
// <span > Contact </span>
// <Grid container spacing={1} className={classes.body}>
//   <Grid item xs={12} className={classes.github} >
//     <img src={linkedin} alt="cur" className="center"/>
//     <img src={github} alt="cur" className="center"/>
//   </Grid>
// </Grid>
