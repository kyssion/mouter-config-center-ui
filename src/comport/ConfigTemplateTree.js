import React from "react";
import {Button, Col, Form, Input, Modal, PageHeader, Row, Select, Table} from "antd";
import {Link} from "react-router-dom";

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        group_id: '888888',
        group_name: '门店',
        app_id:"app——1",
        app_name:"应用1",
        template_tree_id:"template_tree 2",
        template_tree_name:"template_tree_name_2",
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
    {
        key: '2',
        group_id: '888889',
        group_name: '中台',
        app_id:"app——2",
        app_name:"应用2",
        template_tree_id:"template_tree 2",
        template_tree_name:"template_tree_name_2",
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
    {
        key: '3',
        group_id: '888890',
        group_name: '直供',
        app_id:"app——1",
        app_name:"应用3",
        template_tree_id:"template_tree 2",
        template_tree_name:"template_tree_name_2",
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
];
class ConfigTemplateTree extends React.Component {
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
                    title="应用字段信息"
                    subTitle="应用字段信息详情"
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
                                label="配置组ID"
                            >
                                <Select defaultValue="lucy" style={{ width: 120 }}>
                                    <Select value="jack">门店</Select>
                                    <Select value="lucy">中台</Select>
                                    <Select value="disabled" disabled>
                                        直供
                                    </Select>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="appId"
                                label="服务ID"
                            >
                                <Select defaultValue="lucy" style={{ width: 120 }}>
                                    <Select value="jack">门店</Select>
                                    <Select value="lucy">中台</Select>
                                    <Select value="disabled" disabled>
                                        直供
                                    </Select>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="configId"
                                label="应用ID"
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
                    <Column title="配置组ID" dataIndex="group_id" key="group_id" />
                    <Column title="服务ID" dataIndex="app_id" key="name" />
                    <Column title="应用ID" dataIndex="template_tree_id" key="name" />
                    <Column title="应用名称" dataIndex="template_tree_name" key="name" />
                    <Column title="创建时间" dataIndex="create_time" key="create time" />
                    <Column title="更新时间" dataIndex="update_time" key="update time" />
                    <Column title="创建人" dataIndex="create_user" key="create user" />
                    <Column title="更新人" dataIndex="update_user" key="update user" />
                    <Column
                        title="编辑"
                        dataIndex="group_id"
                        key="tags"
                        render={(text, record) => (
                            <>
                                <Link to={"tree"}>
                                <Button onClick={()=>{
                                }}>编辑</Button>
                                </Link>
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
                            label="配置组ID"
                        >
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Select value="jack">门店</Select>
                                <Select value="lucy">中台</Select>
                                <Select value="disabled" disabled>
                                    直供
                                </Select>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="group_name"
                            label="服务ID"
                        >
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Select value="jack">门店</Select>
                                <Select value="lucy">中台</Select>
                                <Select value="disabled" disabled>
                                    直供
                                </Select>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="appId"
                            label="应用ID"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                        <Form.Item
                            name="appName"
                            label="应用名称"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
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

export default ConfigTemplateTree;
