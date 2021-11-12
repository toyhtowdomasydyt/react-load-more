import React from 'react';

const User = ({name, location, email, picture}) => {
  return (
      <div className='card w-50 mb-3'>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={picture.large} className="img-fluid rounded-start" alt={name.first}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name.first} {name.last}</h5>
              <a href={`mailto:${email}`} className="card-text">{email}</a>
              <p className="card-text"><small className="text-muted">{location.country}</small></p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default User;
