import React, { useEffect } from 'react';
import { urls } from '../assets/strings/exports';
import useFetch from '../hooks/useFetch';

const UserDetails = () => {
  const data = useFetch(urls.userDetails);
  console.log(data);

  return <div>UserDetails</div>;
};

export default UserDetails;
