import { Button, Select } from "antd";
import React, { Component } from "react";
const { Option } = Select;

export default class Page2 extends Component {
  selectChange = (value) => {
    const { handleSelectChange } = this.props;
    handleSelectChange("flag2", value === "0" ? true : false);
  };
  render() {
    return (
      <div>
        <div className="h-52">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>页面2</div>
            <div>
              <div>
                <Button>页面2-1</Button>
                {<Button>自定义2-1</Button>}
                <Button>页面2-2</Button>
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
          <div className="w-62 bg-red-100">22222</div>
        </div>
      </div>
    );
  }
}
