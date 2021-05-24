// import logo from './logo.svg';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

// Components
import Header from 'components/Header';
import About from 'components/About';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Experience from 'components/Experience';
import Contact from 'components/Contact';



class App extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  render() {
      return (
         <div>
           <Grid container spacing={3}>
             <Grid item xs={12}>
                <Paper>
                  <Header />
                </Paper>
             </Grid>
             <Grid item xs={12}>

                  <About />

             </Grid>
             <Grid item xs={12}>

                  <Education />

             </Grid>
             <Grid item xs={12}>

                  <Skills />

             </Grid>
             <Grid item xs={12}>

                  <Experience />

             </Grid>
             <Grid item xs={12}>

                  <Contact />

             </Grid>
           </Grid>
         </div>
     );
   }
}

export default App;
