import {Modal, Button, Form, Input} from 'antd';
import React, { useState } from 'react';

class GroupModule extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form
                        name="customized_form_controls"
                        initialValues={{price: {number: 0, currency: 'rmb',},}}>
                        <Form.Item
                            name="groupId"
                            label="groupId"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="group_name"
                            label="group_name"
                        >
                            <Input/>
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
                </Modal>
            </div>
        );
    }
}

export default GroupModule;