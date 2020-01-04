import React from 'react';
import Subnav from '../components/Subnav';
import Useraccount from '../components/Useraccount';
import Cookies from 'js-cookie';
import handleSessions from '../utils/handleSessions';
import UpdateUser from '../components/UpdateUser';

export default function Update() {
  return (
    <div>
      <Subnav />
      <UpdateUser />
    </div>
  );
}
