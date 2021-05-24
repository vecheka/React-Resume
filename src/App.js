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
  constructor (props) {
    super(props);
  }

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
               <Paper>
                  <About />
               </Paper>
             </Grid>
             <Grid item xs={12}>
               <Paper>
                  <Education />
               </Paper>
             </Grid>
             <Grid item xs={12}>
               <Paper>
                  <Skills />
               </Paper>
             </Grid>
             <Grid item xs={12}>
               <Paper>
                  <Experience />
               </Paper>
             </Grid>
             <Grid item xs={12}>
               <Paper>
                  <Contact />
               </Paper>
             </Grid>
           </Grid>
         </div>
     );
   }
}

export default App;
