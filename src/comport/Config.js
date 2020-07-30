import React from "react";
import {Button, Col, Form, Input, Modal, PageHeader, Row, Select, Table} from "antd";
import {Link} from "react-router-dom";
import {EditOutlined,SearchOutlined,CloudUploadOutlined ,DeleteOutlined } from "@ant-design/icons"


const { Column, ColumnGroup } = Table;

const { Option } = Select;

const data = [
    {
        key: '1',
        group_id: '888888',
        group_name: '门店',
        app_id:"app——1",
        app_name:"应用1",
        config_id:"config1",
        config_name:"configName",
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
        config_id:"config1",
        config_name:"configName",
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
        config_id:"config1",
        config_name:"configName",
        create_user: "master",
        create_time: '2020-06-28',
        update_user: "master",
        update_time: '2020-06-28',
    },
];
class Config extends React.Component {
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
                    title="配置信息"
                    subTitle="配置信息详情"
                />
                <Row style={{margin:'10px'}}>
                    <Col>
                        <Form
                            name="customized_form_controls"
                            layout="inline"
                            onFinish={this.onFinish}
                            initialValues={{price: {number: 0, currency: 'rmb',},}}>
                            <Form.Item
                                name="配置id"
                                label="配置id"
                            >
                                <PriceInput />
                            </Form.Item>
                            <Form.Item
                                name="配置名称"
                                label="配置名称"
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
                    <Column title="服务ID" dataIndex="app_id" key="name" />
                    <Column title="服务名称" dataIndex="app_id" key="name" />
                    <Column title="配置ID" dataIndex="config_id" key="name" />
                    <Column title="配置名称" dataIndex="config_name" key="name" />
                    <Column title="发布状态" dataIndex="发布状态" key="发布状态" />
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
                                <Link to={"configEdit"}>
                                    <Button icon={<EditOutlined/>} onClick={()=>{
                                    }}>编辑</Button>
                                </Link>
                            </>
                        )}
                    />
                    <Column
                        title="发布"
                        key="action"
                        render={(text, record) => (
                            <Button type={"primary"} icon={<CloudUploadOutlined/>}>发布</Button>
                        )}
                    />
                    <Column
                        title="删除"
                        key="action"
                        render={(text, record) => (
                            <Button type={"danger"} icon={<DeleteOutlined/>}>删除</Button>
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
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                        <Form.Item
                            name="应用ID"
                            label="appId"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                        <Form.Item
                            name="配置ID"
                            label="config_id"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                        <Form.Item
                            name="配置名称"
                            label="config_name"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                        <Form.Item
                            name="模版ID"
                            label="template_id"
                        >
                            <Select style={{ width: 120 }}>
                                <Option value="模版1">模版1</Option>
                                <Option value="模版2">模版2</Option>
                                <Option value="模版3">
                                    模版3
                                </Option>
                                <Option value="模版4">模版4</Option>
                            </Select>
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

export default Config;