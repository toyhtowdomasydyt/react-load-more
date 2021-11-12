import React, {Component} from 'react';

import Header from '../Header/Header';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      errorMsg: ''
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});

    axios
      .get('https://randomuser.me/api/?page=0&results=10')
      .then((response) => {
        this.setState({users: response.data.results, errorMsg: ''});
      })
      .catch(err => this.setState({
        errorMsg: 'Error while loading data. Try again later.'
      }))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  render() {
    const {users, isLoading, errorMsg} = this.state;

    console.log(users);

    return (
      <div>
        <Header/>
        <div className="container">
          {isLoading && <p>Loading...</p>}
          {errorMsg && <p className='text-danger'>{errorMsg}</p>}
        </div>
      </div>
    );
  }
}

export default App;
