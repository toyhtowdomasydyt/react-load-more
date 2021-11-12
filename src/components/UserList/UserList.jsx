import React from 'react';

import User from '../User/User';

const UserList = ({users}) => {
  return (
    <div>
      {users && users.map((user) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};

export default UserList;
