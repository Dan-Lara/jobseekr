import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./routes/landingPage";
import AddJob from "./routes/addJob";
import Billing from "./routes/billing";
import Contributions from "./routes/contributions";
import Jobs from "./routes/jobs";
import MeetUps from "./routes/meetUps";
import Settings from "./routes/settings";
import SignIn from "./routes/signIn";
import SignOut from "./routes/signOut";
import Header from "./components/header";

const JobSeeker = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/addJob" component={AddJob} />
      <Route path="/billing" component={Billing} />
      <Route path="/contributions" component={Contributions} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/meetUps" component={MeetUps} />
      <Route path="/settings" component={Settings} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signOut" component={SignOut} />
    </div>
  </Router>
);


export default JobSeeker;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Jumbotron, Button } from 'react-bootstrap';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
// 				<Jumbotron>
//   <h1>JobSeekr!</h1>
//   <p>
// 		Find your next job quickly and in an organized fashion!
//   </p>
//   <p>
//     <Button bsStyle="primary">Buy Now!</Button>
//   </p>
// </Jumbotron>
//       </div>
//     );
//   }
// }

// export default App;