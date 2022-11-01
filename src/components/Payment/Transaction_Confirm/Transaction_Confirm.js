import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Spin, Collapse, Statistic, Divider, Button, Alert, Form, Input } from 'antd';
import {SwapLeftOutlined, MailOutlined } from '@ant-design/icons'
import { Link, useParams } from 'react-router-dom';
import { MESSAGE } from '../../../common/Message.Common';
import { EXPIRED_TIME, SUPPORT_MAIL } from '../../../config';
import { ATM_List } from '../Payment_Method/Model/Method.Model';
const { Countdown } = Statistic;


export default function Transaction_Confirm() {

    const [loading, setLoading] = useState(true);
    const {atm} = useParams();
    let urlATM = ''
    switch (atm) {
        case 'Vietcombank':
            urlATM = ATM_List.Vietcombank.url
            break;
        case 'Agribank':
            urlATM = ATM_List.Agribank.url
            break;
        case 'Vietinbank':
            urlATM = ATM_List.Vietinbank.url
            break;
        case 'BIDV':
            urlATM = ATM_List.Bidv.url
            break;
        default:
            break;
    }
    const handleFinish = () => {
        alert("Phien dang nhap het han")
    }
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    return clearTimeout()
    },[]);

    const onFinish = (values) => {
        console.log("values", values )
        // createBrowserHistory.push({ pathname: '/Transaction/Confirm' })
        alert("Giao dich thanh cong!!")
        window.location.href = "/Transaction/Return"
    }

  return (
    <Spin size="large" spinning={loading} >
    <div className='main main-layout'>
        <div className='pm_header'>
            <Row style={{width: '100%'}}>
                <Col span={4}>
                    <Link className='link' to='/'><SwapLeftOutlined className='pr4' />Quay lại</Link>
                </Col>
            </Row>
        </div>
        <Alert message="Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên website. Xin cảm ơn!" type="warning" />
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
                    <h3 className='transaction-pay-title'>Xác thực OTP</h3>
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
                                message: 'Quý khách vui lòng nhập mã OTP!',
                            },
                            ]}
                        >
                            <Input placeholder='Nhập mã OTP...' 
                            suffix={<img style={{width: 60}} src={urlATM}/>}
                            />
                        </Form.Item>
                        <div>OTP đã được gửi về số điện thoại đăng ký. Quý khách vui lòng nhập OTP để tiếp tục thực hiện giao dịch.</div>
                        <Divider/>
                        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                            <div className='btn-container'>
                                <Button type="primary" htmlType="submit">Thanh toán</Button>
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
