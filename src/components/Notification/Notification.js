import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Spin, Result, Button } from 'antd';
import {SwapLeftOutlined, MailOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { EXPIRED_TIME, SUPPORT_MAIL } from '../../config';

export default function Notification() {
    const [loading, setLoading] = useState(true);

    const handleFinish = () => {
        alert("Phien dang nhap het han")
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        return clearTimeout()
    },[]);

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
        {/* <Alert message="Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên website. Xin cảm ơn!" type="warning" /> */}
        <div className='card'>
        <Card className='box'style={{ width: '100%' }}>
            {/* Header */}
            <div className='box_header'>
                <img src='https://sandbox.vnpayment.vn/paymentv2/Images/brands/logo.svg'/>
                {/* <Countdown prefix={<span style={{fontSize: 16, paddingBottom: '2px !important', color: '#5a7087'}}>{MESSAGE.EXPIRED_ON}</span>} 
                value={Date.now() + EXPIRED_TIME * 60 * 1000} onFinish={handleFinish} valueStyle={{fontSize: 20, fontWeight: '600'}} 
                format={"mm:ss"}
                /> */}
            </div>
            {/* Section */}
            <div className='box-section-transaction'>
            <Result style={{width: '100%'}}
                status="success"
                title="Giao dịch được thực hiện thành công!"
                subTitle={<p>Mã đơn hàng: 2017182818828182881, có thể xem chi tiết đơn hàng <a>tại đây.</a></p>}
                extra={[
                <Button type="primary" key="console" href='/'>
                    Trang chủ
                </Button>,
                // <Button key="buy">Lịch sử mua hàng</Button>,
                ]}
            />
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
