import react from 'react';
import React from 'react';

import { StripeProvider } from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout';

export default function Payment() {
  return (
    <div>
      <StripeProvider apiKey='pk_test_nwe2UnrG9Pqx3EBWjbCdHsqP005GI8T6Pl'>
        <MyStoreCheckout />
      </StripeProvider>
    </div>
  );
}
