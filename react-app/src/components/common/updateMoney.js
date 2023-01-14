import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Table,
  Modal,
} from "antd";
const { TextArea } = Input;

const UpdateMoney = ({ updateMoneyInfo, onCancel }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
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
  for (let i = 0; i < 20; i++) {
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
  return (
    <Modal
      open={updateMoneyInfo.status}
      title="Add a center to - DGL"
      onOk={() => console.log("Done")}
      onCancel={() => onCancel()}
      footer={[
        <Button key="back" onClick={() => onCancel()}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          //   loading={loading}
          //   onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <Table
        columns={columns1}
        dataSource={data}
        bordered
        size="middle"
        pagination={false}
        scroll={{
          x: "calc(700px + 50%)",
          y: 700,
        }}
      />
    </Modal>
  );
};
export default UpdateMoney;
