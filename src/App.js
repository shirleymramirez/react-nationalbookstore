import React from 'react';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';


class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <Main />
        <Footer copyright="Shirley Ramirez 2019" />
      </>
    )
  }
}

export default App;
