import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <Footer copyright="Shirley Ramirez 2019" />
      </>
    )
  }
}

export default App;
