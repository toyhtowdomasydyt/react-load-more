import React from 'react';

const User = ({name, location, email, picture}) => {
  return (
    <div className="col">
      <div className='card'>
        <img src='https://picsum.photos/seed/picsum/900/300' className="card-img-top" alt={name.first}/>
        <div className="card-body">
          <h5 className="card-title">{name.first} {name.last}</h5>
          <a href={`mailto:${email}`} className="card-text">{email}</a>
          <p className="card-text"><small className="text-muted">{location.country}</small></p>
        </div>
      </div>
    </div>
  );
};

export default User;
