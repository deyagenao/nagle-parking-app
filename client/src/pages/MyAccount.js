import React from 'react';
import Subnav from '../components/Subnav';
import Useraccount from '../components/Useraccount';
import Cookies from 'js-cookie';
import handleSessions from '../utils/handleSessions';

export default function MyAccount() {
  return (
    <div>
      <Subnav />
      <Useraccount />
    </div>
  );
}
