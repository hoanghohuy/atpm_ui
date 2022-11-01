import React, { useEffect } from 'react'
import { MESSAGE } from '../../../common/Message.Common';
import Transaction from './Transaction';

export default function TransactionPage() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = MESSAGE.CHOOSE_PAYMENT_METHOD;
      });
  return (
    <Transaction/>
  )
}
