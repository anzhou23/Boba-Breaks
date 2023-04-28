import React from 'react';
import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href="../public/images/to/boba.ico" type="image/x-icon" />
        <link rel="icon" href="../public/images/bobafavicon.ico" type="image/x-icon" />
      </Helmet>
    </div>
  );
};

export default MyComponent;
