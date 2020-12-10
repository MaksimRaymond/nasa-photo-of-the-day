import React from 'react';
import './main-header.css';

const MainHeader = (props) => {
  const { date } = props.image

  return (
    <h1>
      NASA's Image Of The Day for {date}
    </h1>


  );
};

export default MainHeader