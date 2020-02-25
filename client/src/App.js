import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ContentView from './ContentView';

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Header/>
      <div class="container-fluid">

        <div class="row-md-auto">
          <Navbar />
        </div>
        <div class="row-md-auto">
          <ContentView />
        </div>
        <div class="row-md-auto">
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
