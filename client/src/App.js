import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Header/>
      <div class="container-fluid containerr">
        <div class="row-md-auto">
          <Navbar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
