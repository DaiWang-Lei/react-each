import { Button, Select } from "antd";
import React, { Component } from "react";
const { Option } = Select;

export default class Page1 extends Component {
  render() {
    // sessionStorage.getItem('cardId')
    console.log(sessionStorage.getItem("cardId"));
    return (
      <div>
        <div className="h-52">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>页面1</div>
            <div>
              <div>
                <Button>页面1-1</Button>
                {<Button>自定义1-1</Button>}
                <Button>页面1-2</Button>
              </div>
            </div>
          </div>
          <Select
            className="w-20"
            defaultValue={"1"}
            onChange={this.selectChange}
          >
            <Option key={0} value={"0"}>
              0
            </Option>
            <Option key={1} value={"1"}>
              1
            </Option>
          </Select>
          <div className="w-62 bg-blue-100">11111</div>
        </div>
      </div>
    );
  }
}
