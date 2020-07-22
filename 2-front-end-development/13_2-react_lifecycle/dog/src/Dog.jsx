import React from 'react';
const fetch = require('node-fetch');

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      isLoaded: true,
      isTerrier: false,
      dogInput: '',
      dog: [],
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
    const dogs = JSON.parse(localStorage.getItem('dogName2'));
    // console.log(dogs[dogs.length - 1])
    dogs[0] !== undefined ?
    this.setState({
      imageUrl: dogs[dogs.length - 1].dogUrl,
      isLoaded: false,
      isTerrier: false,
      dogInput: '',
      
    }) :
    this.getDog();
  }

  componentWillMount() {
    return localStorage.getItem('dogName') === '[]' ?
    false :
    localStorage.setItem('dogName2', localStorage.getItem('dogName'));
  }

  componentDidUpdate() {
    localStorage.setItem('dogUrl', this.state.imageUrl);
    localStorage.setItem('dogName', JSON.stringify(this.state.dog));
    // if(!this.state.isLoaded) alert(this.state.imageUrl.split('/')[4])
  }

  handleClick = async () => {
    await this.setState({
      dog: [
        ...this.state.dog,
        {
        dogName: this.state.dogInput,
        dogUrl: this.state.imageUrl,
        }
      ]
    })
    alert('Nome salvo');
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      dogInput: value,
    });
  }

  render() {
    return(
      <div>
        {this.state.isLoaded && <p>Loading...</p>}
        {!this.state.isLoaded && !this.state.isTerrier && <img src={this.state.imageUrl} alt="dog" />}
        <div>
          <label htmlFor="name">Give your dog a name: 
            <input onChange={this.handleInput} name={this.state.dog.dogName} />
          </label>
          <button type='button' onClick={this.handleClick}>Save the name of your catioro</button>
        </div>
        <div><button onClick={this.getDog}>Change dog</button></div>
        <h2>{this.state.imageUrl}</h2>
        {this.state.isTerrier && <h2>It's a terrier</h2>}
      </div>
    );
  }

}

export default Dog;
