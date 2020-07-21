import React from 'react';
const fetch = require('node-fetch');

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      isLoaded: true
    }
  }

  getDog = () => {
    this.setState({
      isLoaded: true,
    })
    fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
      .then(response => response.json())
      .then(data => 
        this.setState({
          imageUrl: data.message,
          isLoaded: false,
        })
        )
      .catch(error => console.log(error))
  }

  componentDidMount() {
    console.log('did mount1')
    fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
      .then(response => response.json())
      .then(data => 
        this.setState({
          imageUrl: data.message,
          isLoaded: false,
        })
        )
      .catch(error => console.log(error))
    console.log('did mount2')
  }

  componentWillUpdate() {
    console.log('will uptade')
  }

  render() {
    console.log('render')
    return(
      <div>
        {this.state.isLoaded && <p>Loading...</p>}
        {!this.state.isLoaded && <img src={this.state.imageUrl} alt="dog" />}
        <div><button onClick={this.getDog}>Change dog</button></div>
      </div>
    );
  }

}

export default Dog;
