import React from 'react';
import Subnav from '../components/Subnav';
import Cookies from 'js-cookie';
import handleSessions from '../utils/handleSessions';

export default function MyAccount() {
  const cookie = Cookies.get('userId');
  console.log(cookie);

  return (
    <div>
      <Subnav />
    </div>
  );
}
