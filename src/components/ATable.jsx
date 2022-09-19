import React, { Component } from "react";

import { Table, Tag } from "antd";
import Item from "antd/lib/list/Item";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, { chname, mmname }) => <a>{chname || text}</a>,
    width: 400,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    align: "left",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "CLS123",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "LCS456",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "LCS789",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "MM789",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "MM456",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "MM123",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const libdata = [
  { chname: "你好", name: "CLS123", mmname: "M你好", mmcode: "MM123" },
  { chname: "哈哈", name: "LCS456", mmname: "M哈哈", mmcode: "MM789" },
  { chname: "世界", name: "LCS789", mmname: "M世界", mmcode: "MM456" },
];

const columnsDefault = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
    // render: (_, record) => (
    //   <div size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </div>
    // ),
  },
];
//

export default class ATable extends Component {
  render() {
    let tabledata = data.map((itme) => {
      const slectlib = libdata.find((lib) => itme.name == lib.name);
      // debugger;
      // console.log(slectlib);
      let chName = "";
      console.log(slectlib?.mmcode,itme.name);
      
      if (itme.name == slectlib?.name) {
        chName = slectlib?.chname;
      } else if (itme.name == slectlib?.mmcode) {
        chName = slectlib?.mmname;
      }
      // itme.name == slectlib?.name ? slectlib?.chname :
      console.log(chName);
      return { ...itme, chname: chName };
    });
    // console.log(tabledata);
    return (
      <>
        <Table bordered columns={columns} dataSource={tabledata} />
        <br />
        {/* <Table columns={columnsDefault} dataSource={this.props.data} /> */}
      </>
    );
  }
}
