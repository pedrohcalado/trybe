import React from 'react';
const fetch = require('node-fetch');

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      isLoaded: true,
      isTerrier: false,
    }
  }

  getDog = async () => {
    this.setState({
      isLoaded: true,
    })
    await fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
      .then(response => response.json())
      .then(data =>
        (data.message.includes('terrier')) ?
        this.setState({
          isLoaded: false,
          imageUrl: data.message,
          isTerrier: true,
        }) :
        this.setState({
          imageUrl: data.message,
          isLoaded: false,
          isTerrier: false,
        })
        )
      .catch(error => console.log(error))
  }

  componentDidMount() {
    console.log('did mount1')
    this.getDog();
    console.log('did mount2');
  }

  componentWillUpdate() {
    console.log('will uptade')
  }

  componentDidUpdate() {
    localStorage.setItem('dogUrl', this.state.imageUrl);
    // if(!this.state.isLoaded) alert(this.state.imageUrl.split('/')[4])
  }

  render() {
    console.log('render')
    return(
      <div>
        {this.state.isLoaded && <p>Loading...</p>}
        {!this.state.isLoaded && !this.state.isTerrier && <img src={this.state.imageUrl} alt="dog" />}
        <div><button onClick={this.getDog}>Change dog</button></div>
        <h2>{this.state.imageUrl}</h2>
        {this.state.isTerrier && <h2>It's a terrier</h2>}
      </div>
    );
  }

}

export default Dog;
