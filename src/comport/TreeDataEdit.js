import React, { useState } from 'react';
import {Button, Form, Input, Modal, PageHeader, Select, Table} from 'antd';

const data = [
    {
        key: 1,
        name: '商品',
        id: 60,
        address: 'New York No. 1 Lake Park',
        nodeType:"单选",
        nodeDef:"default",
        metaType:"DIV",
        metaDef:"<div>default</div>",
        children: [
            {
                key: 11,
                name: '手机',
                id: 42,
                address: 'New York No. 2 Lake Park',
                nodeType:"单选",
                nodeDef:"default",
                metaType:"DIV",
                metaDef:"<div>default</div>",
            },
            {
                key: 12,
                name: '电视',
                id: 30,
                address: 'New York No. 3 Lake Park',
                children: [
                    {
                        key: 121,
                        name: '红米电视',
                        id: 16,
                        address: 'New York No. 3 Lake Park',
                        nodeType:"单选",
                        nodeDef:"default",
                        metaType:"DIV",
                        metaDef:"<div>default</div>",
                    },
                ],
            },
            {
                key: 13,
                name: '家电',
                id: 72,
                address: 'London No. 1 Lake Park',
                children: [
                    {
                        key: 131,
                        name: '洗衣机',
                        id: 42,
                        address: 'London No. 2 Lake Park',
                        nodeType:"单选",
                        nodeDef:"default",
                        metaType:"DIV",
                        metaDef:"<div>default</div>",
                        children: [
                            {
                                key: 1311,
                                name: '智能洗衣机',
                                id: 25,
                                address: 'London No. 3 Lake Park',
                                nodeType:"单选",
                                nodeDef:"default",
                                metaType:"DIV",
                                metaDef:"<div>default</div>",
                            },
                            {
                                key: 1312,
                                name: '滚筒洗衣机',
                                id: 18,
                                address: 'London No. 4 Lake Park',
                                nodeType:"单选",
                                nodeDef:"default",
                                metaType:"DIV",
                                metaDef:"<div>default</div>",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: '赠品',
        id: 32,
        address: 'Sidney No. 1 Lake Park',
        nodeType:"单选",
        nodeDef:"default",
        metaType:"DIV",
        metaDef:"<div>default</div>",
    },
];


// rowSelection objects indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};

class TreeDataEdit extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            visible1: false,
            visible2: false
        }
    }
    columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '节点名称',
            dataIndex: 'name',
            key: 'name',
            width: '12%',
        }, {
            title: '节点类型',
            dataIndex: 'nodeType',
            key: 'name',
            width: '12%',
        },{
            title: '默认值',
            dataIndex: 'nodeDef',
            key: 'name',
            width: '12%',
        },{
            title: '绑定字典',
            dataIndex: '',
            render:(text)=>{
                return <div>test1</div>
            }
        },
        {
            title: '修改字典',
            dataIndex: '',
            render: (_, record) => {
                return <Button onClick={this.showModal1}>修改</Button>
            }
        },{
            title: '元数据类型',
            dataIndex: 'metaType',
        },{
            title: '元数据默认值',
            dataIndex: 'metaDef',
        },{
            title: '元数据编辑',
            dataIndex: 'operation',
            render: (_, record) => {
                return <Button onClick={this.showModal2}>修改</Button>
            }
        },{
            title: '删除',
            dataIndex: 'operation',
            render: (_, record) => {
                return <Button>删除</Button>
            }
        }
    ];

    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    };

    handleOk2 = e => {
        console.log(e);
        this.setState({
            visible2: false,
        });
    };

    handleCancel2 = e => {
        console.log(e);
        this.setState({
            visible2: false,
        });
    };

    onFinish1 = values => {
        console.log('Received values from form: ', values);
    };
    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    };

    handleOk1 = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };

    handleCancel1 = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };

    onFinish1 = values => {
        console.log('Received values from form: ', values);
    };

    render() {
        return(
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="应用字段信息"
                    subTitle="应用字段信息详情"
                />
                <Table  columns={this.columns} dataSource={data} />

                <Modal
                    title="字典编辑"
                    visible={this.state.visible1}
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                >
                    <Form
                        name="ttttt">
                        <Form.Item
                            name="groupId"
                            label="节点类型"
                        >
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Select value="jack">单选</Select>
                                <Select value="lucy">多选</Select>
                                <Select>
                                    BOOL
                                </Select>
                                <Select>
                                    字符串
                                </Select>
                                <Select>
                                    数字
                                </Select>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="group_name"
                            label="绑定字典"
                        >
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Select value="jack">字典1</Select>
                                <Select value="lucy">字典2</Select>
                                <Select value="dic">字典3</Select>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="appId"
                            label="默认值"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal
                    title="元数据编辑"
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                >
                    <Form
                        name="ttttt">
                        <Form.Item
                            name="groupId"
                            label="元数据类型"
                        >
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Select value="jack">DIV</Select>
                                <Select value="lucy">IMAGE</Select>
                                <Select>
                                    URL
                                </Select>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="appId"
                            label="默认值"
                        >
                            <Input type={"input"} defaultValue={this.state.module_id}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default TreeDataEdit;
