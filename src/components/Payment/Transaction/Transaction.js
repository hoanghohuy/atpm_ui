import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Spin, Statistic, Divider, Button, Checkbox, Form, Input, Alert } from 'antd';
import 'antd/dist/antd.css';
import {SwapLeftOutlined, MailOutlined } from '@ant-design/icons'
import { Link, useParams } from 'react-router-dom';
import { MESSAGE } from '../../../common/Message.Common';
import { EXPIRED_TIME, SUPPORT_MAIL } from '../../../config';
import './Css/Transaction.css'
import axios from 'axios';
const { Countdown } = Statistic;



export default function Transaction() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {atm} = useParams();
    const handleFinish = () => {
        alert("Phien dang nhap het han")
    }
    useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    return clearTimeout()
    },[]);

    const onFinish = async (values) => {
        setLoading(true)
        var data = JSON.stringify({
            // "bin": "970405",
            "bin": "970436",
            "accountNumber": values.sothe
          });
        var config = {
        method: 'post',
        url: 'https://api.vietqr.io/v2/lookup',
        headers: { 
            'x-client-id': '3d4dc572-9708-4a71-ab63-31d9828c939b', 
            'x-api-key': '6a85d103-190d-4c21-aaf6-ddd5b4ef031e', 
            'Content-Type': 'application/json',
        },
        data : data
        };
        // try {
        //     await axios(config).then(function (response) {
                
        //         if(response.data.code === "00") {
        //             console.log("ten", response.data.data.accountName )
        //             if(response.data.data.accountName === values.tenchuthe) {
        //                 window.location.assign("/Transaction/Confirm")
        //             }
        //             else {
        //                 setLoading(false)
        //                 setError(true)
        //             }
        //         }
        //         else {
        //             setLoading(false)
        //             setError(true)
        //         }
        //     })
        // } catch (error) {
        //     setLoading(false)
        //     setError(true)
        // }

        window.location.assign(`/Transaction/Confirm/${atm}`)
        // setError(true)
        // setLoading(false)
    }

  return (
    <Spin size="large" spinning={loading} >
    <div className='main main-layout'>
        <div className='pm_header'>
            <Row style={{width: '100%'}}>
                <Col span={4}>
                    <Link className='link' to='/PaymentMethod'><SwapLeftOutlined className='pr4' />Quay lại</Link>
                </Col>
            </Row>
        </div>
        <div className='card'>
        <Card className='box'style={{ width: '100%' }}>
            {/* Header */}
            <div className='box_header'>
                <img src='https://sandbox.vnpayment.vn/paymentv2/Images/brands/logo.svg'/>
                <Countdown prefix={<span style={{fontSize: 16, paddingBottom: '2px !important', color: '#5a7087'}}>{MESSAGE.EXPIRED_ON}</span>} 
                value={Date.now() + EXPIRED_TIME * 60 * 1000} onFinish={handleFinish} valueStyle={{fontSize: 20, fontWeight: '600'}} 
                format={"mm:ss"}
                />
            </div>
            {/* Section */}
            <div className='box-section-transaction'>
                <div className='transaction-card'>
                    <h3 className='transaction-card-title'>Thông tin đơn hàng</h3>
                    <Divider/>
                    <div className='transaction-card-item'>
                        <div className='transaction-item-title'>Số tiền thanh toán</div>
                        <div className='transaction-item-value'>99000đ</div>
                    </div>
                    <div className='transaction-card-item'>
                        <div className='transaction-item-title'>Gía trị đơn hàng</div>
                        <div className='transaction-item-value'>90000đ</div>
                    </div>
                    <div className='transaction-card-item'>
                        <div className='transaction-item-title'>Phí giao dịch</div>
                        <div className='transaction-item-value'>9000đ</div>
                    </div>
                    <div className='transaction-card-item'>
                        <div className='transaction-item-title'>Mã đơn hàng</div>
                        <div className='transaction-item-value'>123541</div>
                    </div>
                </div>
                <div className='transaction-pay'>
                    <h3 className='transaction-pay-title'>Thanh toán qua Tài khoản {atm}</h3>
                    <div className='pay-noidia'>
                        <Form labelCol={{span: 24}} wrapperCol={{span: 24}}
                        onFinish={onFinish}
                        >
                        <div>Số thẻ</div>
                        <Form.Item
                            name="sothe"
                            rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số thẻ!',
                            },
                            ]}
                        >
                            <Input placeholder='Nhập số thẻ' />
                        </Form.Item>
                        <div>Tên chủ thẻ</div>
                        <Form.Item
                            name="tenchuthe"
                            rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập Tên chủ thẻ!',
                            },
                            ]}
                        >
                            <Input placeholder='Nhập tên chủ thẻ (không dấu)' />
                        </Form.Item>
                        <div>Ngày phát hành</div>
                        <Form.Item
                            name="ngayphathanh"
                            rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập Ngày phát hành!',
                            },
                            ]}
                        >
                            <Input placeholder='MM/YY'/>
                        </Form.Item>
                        <Checkbox required>Điều kiện sử dụng <a>tại đây</a></Checkbox>
                        <Divider/>
                        {
                            error ? 
                            <>
                            <Alert showIcon message="Sai thông tin thanh toán. Vui lòng điền đúng các trường thông tin." type="error" />
                            <Divider/>
                            </> :
                            ''
                        }
                        
                        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                            <div className='btn-container'>
                                <Button type="primary" htmlType="submit">Tiếp tục</Button>
                                <Button type="default">Hủy thanh toán</Button>
                            </div>
                        </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='box-footer'>
                <div className='box-footer-list'>
                    <Link className='link' to={'/'}><MailOutlined className='pr4' />{SUPPORT_MAIL}</Link>
                </div>
            </div>
        </Card>
        </div>
    </div>
    </Spin>
  )
}
