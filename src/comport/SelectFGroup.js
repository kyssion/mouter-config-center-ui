import React, { useState } from 'react';
import { Form, Input , Button,Select } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Table, Tag, Space } from 'antd';

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
const SelectFGroup = () => {
    const onFinish = values => {
        console.log('Received values from form: ', values);
    };
    return (
        <div>
        <Row style={{margin:'10px'}}>
            <Col>
                <Form
                    name="customized_form_controls"
                    layout="inline"
                    onFinish={onFinish}
                    initialValues={{price: {number: 0, currency: 'rmb',},}}>
                    <Form.Item
                        name="groupId"
                        label="groupId"
                    >
                        <PriceInput />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="add" htmlType="submit">
                            新建
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        </div>
    );
};

export default SelectFGroup;