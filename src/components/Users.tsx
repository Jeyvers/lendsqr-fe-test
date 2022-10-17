import React, { useEffect } from 'react';
import { urls } from '../assets/strings/exports';
import useFetch from '../hooks/useFetch';

const users = () => {
  const data = useFetch(urls.users);
  console.log(data);

  return <div>users</div>;
};

export default users;
