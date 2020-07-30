import React, { useState } from 'react';
import {Select, Button, Checkbox, Col, Form, Input, PageHeader, Row, Table, Modal} from 'antd';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const { Option } = Select;
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
    },{
        title: '节点值',
        dataIndex: 'value',
        key: 'name',
        render: ()=>{
            let num = Math.random()*3000;
            if(num<1000){
                return  (<Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>);
            }else if(num>=1000&&num<2000){
                return (<Select mode="multiple" defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>);
            }else{
                return <Input/>
            }
        }
    },{
        title:"元数据类型",
        dataIndex: "type",
        key:"type",
    },{
        title:"元数据信息",
        dataIndex: "typeValue",
        key:"typeValue",
        render:(text)=>{
            return <textarea value={text}></textarea>
        }
    },{
        title: '元数据编辑',
        dataIndex: 'value',
        key: 'name',
        render: ()=>{
            return <Button onClick={
                ()=>{
                    that.status({visible:true})
                }
            }>编辑</Button>
        }
    }
];

let that;

const data = [
    {
        key: 1,
        name: '商品',
        id: 60,
        address: 'New York No. 1 Lake Park',
        children: [
            {
                key: 11,
                name: '手机',
                id: 42,
                value:"value1",
                address: 'New York No. 2 Lake Park',
                type:"DIV",
                typeValue:"<div>test</div>"
            },
            {
                key: 12,
                name: '电视',
                id: 30,
                value:"value1",
                address: 'New York No. 3 Lake Park',
                type:"DIV",
                typeValue:"<div>test</div>",
                children: [
                    {
                        key: 121,
                        name: '红米电视',
                        id: 16,
                        address: 'New York No. 3 Lake Park',
                        type:"DIV",
                        typeValue:"<div>test</div>"
                    },
                ],
            },
            {
                key: 13,
                name: '家电',
                id: 72,
                address: 'London No. 1 Lake Park',
                type:"DIV",
                typeValue:"<div>test</div>",
                children: [
                    {
                        key: 131,
                        name: '洗衣机',
                        id: 42,
                        address: 'London No. 2 Lake Park',
                        children: [
                            {
                                key: 1311,
                                name: '智能洗衣机',
                                id: 25,
                                value:"value1",
                                address: 'London No. 3 Lake Park',
                                type:"DIV",
                                typeValue:"<div>test</div>"
                            },
                            {
                                key: 1312,
                                name: '滚筒洗衣机',
                                id: 18,
                                value: "zhi",
                                address: 'London No. 4 Lake Park',
                                type:"DIV",
                                typeValue:"<div>test</div>"
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

class ConfigEdite extends React.Component{

    constructor(prop) {
        super(prop);
        this.state = {
            visible:false
        }
        that = this;
    }

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
        console.log(this.state);
        return(
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="服务配置信息管理"
                    subTitle="服务配置信息管理编辑"
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
                <Row style={{margin:'10px'}} justify="end">
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
                <Modal
                    title="Basic Modal"
                    visible={false}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                    </Form>
                </Modal>
            </div>

        );
    }
}
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


export default ConfigEdite;