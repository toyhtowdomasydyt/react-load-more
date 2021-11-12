import React, {Component} from 'react';

import Header from '../Header/Header';
import UserList from '../UserList/UserList';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      page: 0,
      isLoading: false,
      errorMsg: ''
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }

  loadUsers = async () => {
    const {page} = this.state;

    this.setState({isLoading: true});

    try {
      const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);

      this.setState(prevState => ({
        users: [...prevState.users, ...response.data.results],
        errorMsg: ''
      }));

    } catch (err) {
      this.setState({
        errorMsg: 'Error while loading data. Try again later.'
      });

    } finally {
      this.setState({isLoading: false});
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  };

  render() {
    const {users, isLoading, errorMsg} = this.state;

    console.log(users);

    return (
      <div>
        <Header/>
        <div className="container">
          {isLoading && <p>Loading...</p>}
          {errorMsg && <p className='text-danger'>{errorMsg}</p>}
          <UserList users={users}/>
          <div className='mb-3'>
            <button className='btn btn-primary d-block mx-auto' onClick={this.loadMore}>
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
