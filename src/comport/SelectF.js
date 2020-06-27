import React, { useState } from 'react';
import { Form, Input , Button,Select } from 'antd';
import { Row, Col, Divider } from 'antd';
const PriceInput = ({ value = {}, onChange }) =>{
    return (
        <span>
            <Input
              type="text"
              style={{
                  width: 300,
              }}
            />
        </span>
    );
};
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}
const SelectF = () => {
    const onFinish = values => {
        console.log('Received values from form: ', values);
    };
    const checkPrice = (rule, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }

        return Promise.reject('Price must be greater than zero!');
    };
    return (
        <Row style={{marginTop:'10px'}}>
            <Col>
                <Form
                    name="customized_form_controls"
                    layout="inline"
                    onFinish={onFinish}
                    initialValues={{price: {number: 0, currency: 'rmb',},}}>
                    <Form.Item
                        name="group"
                        label="配置组"
                        rules={[
                            {
                                validator: checkPrice,
                            },
                        ]}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">中台</Option>
                            <Option value="lucy">门店</Option>
                            <Option value="disabled" disabled>
                                仓储
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="group"
                        label="应用"
                        rules={[
                            {
                                validator: checkPrice,
                            },
                        ]}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">站点80001</Option>
                            <Option value="lucy">站点80002</Option>
                            <Option value="disabled" disabled>
                                站点800003
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="configId"
                        label="configId"
                        rules={[
                            {
                                validator: checkPrice,
                            },
                        ]}
                    >
                        <PriceInput />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default SelectF;