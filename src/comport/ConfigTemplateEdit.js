import React, { useState } from 'react';
import {Button, PageHeader, Table} from 'antd';
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
        title: '增加节点',
        dataIndex: 'operation',
        render: (_, record) => {
            return <Button>增加节点</Button>
        }
    },{
        title: '修改',
        dataIndex: 'operation',
        render: (_, record) => {
            return <Button>修改</Button>
        }
    }
];

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
                address: 'New York No. 2 Lake Park',
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
                        children: [
                            {
                                key: 1311,
                                name: '智能洗衣机',
                                id: 25,
                                address: 'London No. 3 Lake Park',
                            },
                            {
                                key: 1312,
                                name: '滚筒洗衣机',
                                id: 18,
                                address: 'London No. 4 Lake Park',
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
                </Collapse>,
            </div>
        );
    }
}

export default ConfigTemplateEdit;