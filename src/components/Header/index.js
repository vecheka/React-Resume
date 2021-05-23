import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import bg1 from 'images/bg1.png';
import bg2 from 'images/bg2.png';
import bg3 from 'images/bg3.png';
import bg4 from 'images/bg4.png';
// import bg5 from 'images/bg5.png';
import bg6 from 'images/bg6.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import style from './style.js'

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      imageNum: 0,
    }
    this.images = [
      bg1,
      bg2,
      bg3,
      bg4,
      // bg5,
      bg6
    ];
    this.timer = 6000;
  }

  componentDidMount = async () => {
    // TODO: uncomment when ready to deploy
    // setInterval(this.changeImage, this.timer);
  }

  changeImage = async () => {
    const imageNum = this.state.imageNum;
    if (imageNum + 1 >= this.images.length)
      this.setState({ imageNum: 0 });
    else
      this.setState({ imageNum: this.state.imageNum + 1 })
  }

  render() {
    const { classes } = this.props;
    const imageName = this.images[this.state.imageNum];
    return (
      <div className={classes.root}>
        <div>
          <span className={classes.title} onClick={() => window.location.reload()}> Vecheka Chhourn </span>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageName})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '40vh',
            border: 'none'
          }}
        >
        </div>
      </div>
    );
  }

}

export default withStyles(style)(Header);
// <img src={headerBG}/>
