import React from 'react';

import User from '../User/User';

const UserList = ({users}) => {
  return (
    <div className='row row-cols-1 row-cols-md-2 g-4 mb-3'>
      {users && users.map((user) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};

export default UserList;
