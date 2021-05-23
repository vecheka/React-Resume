// import logo from './logo.svg';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

// Components
import Header from 'components/Header';
import About from 'components/About';



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


           </Grid>
         </div>
     );
   }
}

export default App;

// <Grid item xs={12}>
//   <Paper>
//      hello world!
//   </Paper>
// </Grid>
// <Grid item xs={12}>
//   <Paper>
//      hello world!
//   </Paper>
// </Grid>
