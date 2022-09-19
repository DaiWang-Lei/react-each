import React from "react";
import { Button, Tabs } from "antd";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const { TabPane } = Tabs;

class Tab extends React.Component {
  componentDidMount() {
    sessionStorage.setItem("cardId", 1);
  }
  callback = (key) => {
    sessionStorage.setItem("cardId", key);
  };

  render() {
    return (
      <>
        <Tabs onChange={this.callback} type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default Tab;
