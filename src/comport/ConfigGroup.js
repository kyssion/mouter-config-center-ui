import React from "react";
import {Button, Col, Form, Input, Modal, PageHeader, Row, Select, Table} from "antd";

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        group_id: '888888',
        group_name: '门店',
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
    {
        key: '2',
        group_id: '888889',
        group_name: '中台',
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
    {
        key: '3',
        group_id: '888890',
        group_name: '直供',
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
];
class ConfigGroup extends React.Component {
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

    onFinish = values => {
        console.log('Received values from form: ', values);
    };

    render() {
        console.log(this.state);
       return  (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="配置组信息"
                    subTitle="配置组信息详情"
                />
                <Row style={{margin:'10px'}}>
                    <Col>
                        <Form
                            name="customized_form_controls"
                            layout="inline"
                            onFinish={this.onFinish}
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
                                <Button type="add" htmlType="submit" onClick={this.showModal}>
                                    新建
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Table dataSource={data}>
                    <Column title="group id" dataIndex="group_id" key="group_id" />
                    <Column title="group name" dataIndex="group_name" key="name" />
                    <Column title="create time" dataIndex="create_time" key="create time" />
                    <Column title="update time" dataIndex="update_time" key="update time" />
                    <Column title="create user" dataIndex="create_user" key="create user" />
                    <Column title="update user" dataIndex="update_user" key="update user" />

                    <Column
                        title="编辑"
                        dataIndex="group_id"
                        key="tags"
                        render={(text, record) => (
                            <>
                                <Button onClick={()=>{
                                    this.setState((r)=>{
                                        console.log(text);
                                        console.log(record);
                                        let newSt = Object.assign({},r);
                                        newSt.module_id=record.group_id;
                                        newSt.module_name=record.group_name;
                                        newSt.visible=true;
                                        return newSt;
                                    })
                                }}>编辑</Button>
                            </>
                        )}
                    />
                    <Column
                        title="删除"
                        key="action"
                        render={(text, record) => (
                            <Button>删除</Button>
                        )}
                    />
                </Table>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form
                        name="ttttt">
                        <Form.Item
                            name="groupId"
                            label="groupId"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                        <Form.Item
                            name="group_name"
                            label="group_name"
                        >
                            <Input type={"input"} defaultValue={this.state.module_name}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
};



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

export default ConfigGroup;