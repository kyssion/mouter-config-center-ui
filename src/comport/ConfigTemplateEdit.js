import React, { useState } from 'react';
import {Button, Col, Form, PageHeader, Row, Select, Table} from 'antd';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}
const columns = [
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
    },
    {
        title: '修改字典',
        dataIndex: '',
        render: (_, record) => {
            return <Button>修改</Button>
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
            return <Button>修改</Button>
        }
    },{
        title: '删除',
        dataIndex: 'operation',
        render: (_, record) => {
            return <Button>删除</Button>
        }
    }
];

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

class ConfigTemplateEdit extends React.Component{
    render() {
        return(
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="站点信息树模板管理"
                    subTitle="站点信息树模板管理编辑"
                />
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="配置信息树1" key="1">
                        <Table columns={columns} rowSelection={rowSelection} dataSource={data} pagination={false}/>
                    </Panel>
                    <Panel header="配置信息树2" key="2">
                        <Table columns={columns} rowSelection={rowSelection} dataSource={data} pagination={false}/>
                    </Panel>
                    <Panel header="配置信息树3" key="3">
                        <Table columns={columns} rowSelection={rowSelection} dataSource={data} pagination={false}/>
                    </Panel>
                </Collapse>
                <Row style={{margin:'10px'}} span={24} justify="end" gutter={10}>
                    <Col>
                        <Form.Item
                            name="group_id"
                            label="group_id">
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Select value="jack">门店</Select>
                            <Select value="lucy">中台</Select>
                            <Select value="disabled" disabled>
                                直供
                            </Select>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name="app_id"
                            label="app_id">
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Select value="jack">门店</Select>
                            <Select value="lucy">中台</Select>
                            <Select value="disabled" disabled>
                                直供
                            </Select>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name="data_id"
                            label="data_id">
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Select value="jack">门店</Select>
                            <Select value="lucy">中台</Select>
                            <Select value="disabled" disabled>
                                直供
                            </Select>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name="customized_form_controls"
                            layout="inline"
                            onFinish={this.onFinish}
                            initialValues={{price: {number: 0, currency: 'rmb',},}}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" onClick={this.showModal}>
                                    增加应用
                                </Button>
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form
                            name="customized_form_controls"
                            layout="inline"
                            onFinish={this.onFinish}
                            initialValues={{price: {number: 0, currency: 'rmb',},}}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" onClick={this.showModal}>
                                    保存
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row style={{margin:'10px'}} justify="end">

                </Row>
            </div>
        );
    }
}

export default ConfigTemplateEdit;