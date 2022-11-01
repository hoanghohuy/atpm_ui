import React from 'react'
import { Col, Row, Card, Spin, Collapse } from 'antd';
import './Css/Payment_Method.css'
import { Link } from 'react-router-dom';
import {SwapLeftOutlined, MailOutlined } from '@ant-design/icons'
import { MESSAGE } from '../../../common/Message.Common';
import { SUPPORT_MAIL } from '../../../config';
const { Panel } = Collapse;
const tokenBill = 'mytoken'
export default function Payment_Method() {
  return (
    
        <div className='main main-layout'>
            <div className='pm_header'>
            <Row style={{width: '100%'}}>
                <Col span={4}>
                    <Link className='link' to='/'><SwapLeftOutlined className='pr4' />Quay lại</Link>
                </Col>
            </Row>
            </div>
            <div className='card'>
                <Spin size="large" spinning={false} >
                <Card className='box'style={{ width: '100%' }}>
                    <div className='box_header'>
                        <img src='https://sandbox.vnpayment.vn/paymentv2/Images/brands/logo.svg'/>
                    </div>
                    
                    {tokenBill === 'mytoken' ? 
                    // token sống
                        <div className='box-section'>
                        <div className='box-section-header'>{MESSAGE.CHOOSE_PAYMENT_METHOD}</div>
                        <div className='method-list-item'>
                            <div className='method-list-item-wrapper'>
                                <button className='method-list-button'>{MESSAGE.APPLICATION_PAYMENT_SUPPORT}</button>
                                <img src='https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-vnpay-qr.svg' />
                            </div>
                            <div className='method-list-item-wrapper'>
                                <Collapse className='method-list-button collapse-delay df' expandIcon={isNaN}>
                                <Panel header={MESSAGE.ATM} key="1">
                                <div className='df atm-img-wrapper'>
                                    <Link to={`../Transaction/Vietcombank?token=asd123asd123`}>
                                        <img className='atm-img' src='https://sandbox.vnpayment.vn/paymentv2/images/img/logos/bank/big/vietcombank.svg'></img>
                                    </Link>
                                    <Link to={`../Transaction/Vietinbank?token=asd123asd123`}>
                                        <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/vietinbank.svg'></img>
                                    </Link>
                                    <Link to={`../Transaction/BIDV?token=asd123asd123`}>
                                        <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/bidv.svg'></img>
                                    </Link>
                                    <Link to={`../Transaction/Agribank?token=asd123asd123`}>
                                        <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/agribank.svg'></img>
                                    </Link>
                                    
                                </div>
                                <div className='df atm-img-wrapper'>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn/paymentv2/images/img/logos/bank/big/sacombank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/techcombank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/mbbank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/acb.svg'></img>
                                </div>
                                <div className='df atm-img-wrapper'>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn/paymentv2/images/img/logos/bank/big/vpbank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/dongabank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/shb.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/eximbank.svg'></img>
                                </div>
                                <div className='df atm-img-wrapper'>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn/paymentv2/images/img/logos/bank/big/msbank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/vib.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/shinhanbank.svg'></img>
                                    <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/saigonbank.svg'></img>
                                </div>
                                </Panel> 
                                </Collapse>
                                <img src='https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-atm.svg' />
                            </div>

                            <div className='method-list-item-wrapper'>
                                <Collapse className='method-list-button collapse-delay df' expandIcon={isNaN}>
                                    <Panel header={'Thẻ thanh toán quốc tế'} key="2">
                                    <div className='df atm-img-wrapper'>
                                        <Link to={"/InternationalTransaction/VISA"}>
                                            <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/VISA.svg'></img>
                                        </Link>
                                        <Link to={"/InternationalTransaction/AMEX"}>
                                            <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/AMEX.svg'></img>
                                        </Link>
                                        <Link to={"/InternationalTransaction/MASTERCARD"}>
                                            <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/MASTERCARD.svg'></img>
                                        </Link>
                                        <Link to={"/InternationalTransaction/JCB"}>
                                            <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/JCB.svg'></img>
                                        </Link>
                                    </div>
                                        <div className='df atm-img-wrapper'>
                                            <img className='atm-img' src='https://sandbox.vnpayment.vn//paymentv2/images/img/logos/bank/big/UPI.svg'></img>
                                        </div>
                                    </Panel> 
                                </Collapse>
                                <img src='https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-credit.svg' />
                            </div>


                            {/* <div className='method-list-item-wrapper'>
                            <button className='method-list-button'>Thẻ nội địa và tài khoản ngân hàng</button>
                                <img src='https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-atm.svg' />
                            </div> */}
                            {/* <div className='method-list-item-wrapper'>
                            <button className='method-list-button'>Thẻ thanh toán quốc tế</button>
                                <img src='https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-credit.svg' />
                            </div> */}
                            <div className='method-list-item-wrapper'>
                            <button className='method-list-button'>Ví điện tử</button>
                                <img src='https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-vi-vnpay.svg' />
                            </div>
                        

                            </div>
                        </div>
                        :
                        // Token hết hạn
                        <div className='method-list-item'>Giao dịch quá thời gian chờ thanh toán. Quý khách vui lòng thực hiện lại giao dịch</div>
                    }
                    
                    <div className='box-footer'>
                        <div className='box-footer-list'>
                            <Link className='link' to={'/'}><MailOutlined className='pr4' />{SUPPORT_MAIL}</Link>
                        </div>
                    </div>
                </Card>
                </Spin>
                
            </div>
        </div>
  )
}
