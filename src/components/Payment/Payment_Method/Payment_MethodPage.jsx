import React, { useEffect } from 'react'
import Payment_Method from './Payment_Method'
import { Spin } from 'antd';
import { MESSAGE } from '../../../common/Message.Common';
import 'antd/dist/antd.css';

export default function Payment_MethodPage() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = MESSAGE.CHOOSE_PAYMENT_METHOD;
      });
  return (
    <Payment_Method/>
  )
}
