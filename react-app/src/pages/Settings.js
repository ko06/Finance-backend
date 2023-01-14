/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

import { Card, Col, Row, Button, Collapse, Radio, Table, Checkbox } from "antd";
import AddMember from "../components/common/addMember";
import AddCenter from "../components/common/addCenter";
import AddLoan from "../components/common/addLoan";
const { Panel } = Collapse;

const columns1 = [
  {
    title: "Selva Ganapathi",

    children: [
      {
        title: "maiyam Name",
        dataIndex: "number",
        key: "number",
        width: 100,
        children: [
          {
            title: "maiyam Time 6.30 AM",
            dataIndex: "number",
            key: "number",
            width: 100,
            children: [
              {
                title: "amount",
                dataIndex: "AmountRecieved",
                key: "AmountRecieved",
                width: 70,
              },
              {
                title: "key",
                dataIndex: "key",
                key: "key",
                width: 100,
              },
              {
                title: "kulu en",
                dataIndex: "number",
                key: "number",
                width: 100,
              },
              {
                title: "Uruppinar",
                dataIndex: "name",
                key: "name",
                width: 200,
                sorter: (a, b) => a.age - b.age,
              },
            ],
          },
        ],
      },
      {
        title: "mangarai-01",
        children: [
          {
            title: "Staff Name: Saravanan",
            dataIndex: "number",
            key: "number",
            width: 100,
            children: [
              {
                title: "Attenance",
                dataIndex: "attence",
                key: "key",
                width: 100,
              },
              {
                title: "NET EMI",
                dataIndex: "emi",
                key: "emi",
                width: 100,
              },
              {
                title: "LOAN",
                dataIndex: "loan",
                key: "loan",
                width: 100,
              },
              {
                title: "JLG - Date",
                dataIndex: "date",
                key: "date",
                width: 100,
              },
              {
                title: "JLG - Week",
                dataIndex: "week",
                key: "week",
                width: 100,
              },
            ],
          },
        ],
      },
      {
        title: "maya Date : Friday",
        children: [
          {
            title: "PRI",
            dataIndex: "PRI",
            key: "PRI",
            width: 100,
          },
          {
            title: "INT",
            dataIndex: "INT",
            key: "INT",
            width: 100,
          },
          {
            title: "SLG-Date",
            dataIndex: "SLGDate",
            key: "SLGDate",
            width: 100,
          },
          {
            title: "SLG-Week",
            dataIndex: "SLGWeek",
            key: "SLGWeek",
            width: 100,
          },
          {
            title: "RSD",
            dataIndex: "RSD",
            key: "RSD",
            width: 100,
          },
          {
            title: "TOTAL",
            dataIndex: "TOTAL",
            key: "TOTAL",
            width: 100,
          },
        ],
      },
    ],
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    AmountRecieved: <Checkbox></Checkbox>,
    key: i,
    name: "John Brown",
    age: i + 1,
    street: "Lake Park",
    building: "C",
    number: `${parseInt((i % 5) + 1)}:${(i % 5) + 1}`,
    companyAddress: "Lake Street 42",
    companyName: "SoftLake Co",
    gender: "M",
    week: "1",
    date: "15.12.2022",
    emi: "14",
    loan: "34",
    SLGWeek: 1,
    SLGDate: "15.12.2022",
    PRI: 310,
    INT: 200,
    TOTAL: 510,
  });
}

function Home() {
  let text = "asdfdsfg";
  const onChange = (key) => {
    console.log(key);
  };
  const [addMemberInfo, setAddMemberInfo] = useState({ status: false });
  const [addCenterInfo, setAddCenterInfo] = useState({ status: false });
  const [addLoanInfo, setAddLoanInfo] = useState({ status: false });

  return (
    <>
      <Card
        bodyStyle={{ display: "none" }}
        style={{ marginBottom: "20px" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col
              span={24}
              md={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingBottom: "20px",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">TODAY</Radio.Button>
                <Radio.Button value="c">TOMORROW</Radio.Button>
              </Radio.Group>
              <div
                style={{ paddingLeft: 20 }}
                className="header-col header-btn"
              >
                <Button
                  type="primary"
                  onClick={() => setAddCenterInfo({ status: true })}
                >
                  New Center
                </Button>
              </div>
            </Col>
            <Col span={24} md={24} className="col-info">
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="கிழக்கு மரியானதா தெரு- 01" key="1">
                  <Button
                    style={{ marginBottom: "20px" }}
                    type="primary"
                    onClick={() => setAddMemberInfo({ status: true })}
                  >
                    New Member
                  </Button>
                  <Table
                    columns={columns1}
                    dataSource={data}
                    bordered
                    size="middle"
                    scroll={{
                      x: "calc(700px + 50%)",
                      y: 700,
                    }}
                  />
                </Panel>
                <Panel header="கிழக்கு மரியானதா தெரு- 02" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="கிழக்கு மரியானதா தெரு- 03" key="4">
                  <p>{text}</p>
                </Panel>
                <Panel header="கிழக்கு மரியானதா தெரு- 04" key="5">
                  <p>{text}</p>
                </Panel>
                <Panel header="கிழக்கு மரியானதா தெரு- 05" key="6">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        }
      ></Card>
      <Card
        bodyStyle={{ display: "none" }}
        style={{ marginBottom: "20px" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col
              span={24}
              md={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingBottom: "20px",
              }}
            >
              <div
                style={{ paddingLeft: 20 }}
                className="header-col header-btn"
              >
                <Button
                  type="primary"
                  onClick={() => setAddLoanInfo({ status: true })}
                >
                  New Loan
                </Button>
              </div>
            </Col>
            <Col span={24} md={24} className="col-info">
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="9000 - Passbook" key="4">
                  <p>EMI: 380</p>
                  <p>TOTAL MONTH: 28</p>
                </Panel>
                <Panel header="14000 - Passbook" key="3">
                  <p>EMI: 510</p>
                  <p>TOTAL MONTH: 33</p>
                </Panel>
                <Panel header="24000 - Passbook" key="2">
                  <p>EMI: 660</p>
                  <p>TOTAL MONTH: 45</p>
                </Panel>
                <Panel header="34000 - Passbook" key="1">
                  <p>EMI: 840</p>
                  <p>TOTAL MONTH: 50</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        }
      ></Card>
      <AddMember
        onCancel={() => setAddMemberInfo({ status: false })}
        addMemberInfo={addMemberInfo}
      ></AddMember>
      <AddCenter
        addCenterInfo={addCenterInfo}
        onCancel={() => setAddCenterInfo({ status: false })}
      ></AddCenter>
      <AddLoan
        addLoanInfo={addLoanInfo}
        onCancel={() => setAddLoanInfo({ status: false })}
      ></AddLoan>
    </>
  );
}

export default Home;
