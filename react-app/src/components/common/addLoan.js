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
  Upload,
  Modal,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const AddLoan = ({ addLoanInfo, onCancel }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      open={addLoanInfo.status}
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
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onValuesChange={onFinish}
        // disabled={componentDisabled}
      >
        <Form.Item label="Loan Name">
          <Input />
        </Form.Item>
        <Form.Item label="Total Emi Tenure">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Percentage of Interest">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Minimum RD">
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddLoan;
