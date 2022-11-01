import logo from './logo.svg';
import './App.css';
import React from 'react';

import { useState } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', file: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFileChange(event) {
    this.setState({ file: event.target.files[0] });
  }

  async handleSubmit(event) {
    event.preventDefault();

    import("./node_modules/hash-based-signatures-wasm/hash_based_signatures_wasm.js").then((js) => {
      js.greet("WebAssembly with npm");
    });

    let content = await this.state.file.arrayBuffer();
    console.log(content);

    // console.log(this.state.file);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          File:
          <input type="file" onChange={this.handleFileChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameForm />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
