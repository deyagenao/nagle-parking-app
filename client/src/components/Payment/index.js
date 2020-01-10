import React from 'react';
import './payment.css';

import { StripeProvider } from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout';

export default function Payment() {
  return (
    <div>
      <div className='testingThis'>
        <StripeProvider apiKey='pk_test_nwe2UnrG9Pqx3EBWjbCdHsqP005GI8T6Pl'>
          <MyStoreCheckout />
        </StripeProvider>
      </div>
    </div>
  );
}
