import React, { Component } from "react";
import Tab from "./Tab";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Button, Tabs, Modal } from "antd";

const { TabPane } = Tabs;
const { confirm } = Modal;

export default class Out extends Component {
  state = {
    cardId: "1",
  };

  callback = (key) => {
    sessionStorage.setItem("cardId", key);
    this.setState({ cardId: key });
  };
  showConfirm = () => {
    confirm({
      title: "Do you want to delete these items?",
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      cancelText: "回传清单",
      className: "leileiConfirm",
      width: 400,
      centered: true,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };
  render() {
    const { cardId } = this.state;
    return (
      <>
        {/* <Tabs onChange={this.callback} type="card">
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
        <Page1 cardId={cardId} />
        <Page2 cardId={cardId} />
        <Page3 cardId={cardId} /> */}
        <Button onClick={this.showConfirm}>Confirm</Button>
      </>
    );
  }
}
