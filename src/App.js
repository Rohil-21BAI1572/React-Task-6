import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="header bg-primary text-white py-5 text-center">
        <h1 className="name">Rohil Jain</h1>
        <p className="job-title">Full Stack Developer</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
           I'm a B.Tech student studying CSE. I wish to be data scientist.
          </p>
        </div>
      </section>

      <section className="contact py-5 bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <p>Email: rohiljain02@gmail.com</p>
          
          <p>GitHub: <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
