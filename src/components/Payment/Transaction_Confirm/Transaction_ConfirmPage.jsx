import React, { useEffect } from 'react'
import { MESSAGE } from '../../../common/Message.Common';
import Transaction_Confirm from './Transaction_Confirm';

export default function Transaction_ConfirmPage() {
    useEffect(() => {
        document.title = MESSAGE.CHOOSE_PAYMENT_METHOD;
    });
  return (
    <Transaction_Confirm/>
  )
}
