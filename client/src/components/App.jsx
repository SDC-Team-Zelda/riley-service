import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './Introduction.jsx';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: []
    }
    this.getPhotosAndIntro = this.getPhotosAndIntro.bind(this)
  }

  componentDidMount () {
    this.getPhotosAndIntro();
  }

  getPhotosAndIntro () {
    let endPoint = window.location.href.split('=')[1];

    axios.get(`/api/intro/?id=${endPoint}`)
    .then((res) => {
      console.log(res.data)
      this.setState({
        intro: [ res.data ]
      })
    })
    .catch((err) => {
      console.log('GET error', err)
    })
  }

  render () {
    return (
      <div>
        <Introduction info={this.state.intro}/>
      </div>
    )
  }
}
export default App;

export {App};