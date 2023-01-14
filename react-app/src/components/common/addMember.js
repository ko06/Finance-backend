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

const AddMember = ({ addMemberInfo, onCancel }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      open={addMemberInfo.status}
      title="Add a member to கிழக்கு மரியானதா தெரு"
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
      <div className="finserve-form">
        <Form
          // labelCol={{
          //   span: 10,
          // }}
          // wrapperCol={{
          //   span: 10,
          // }}
          layout="horizontal"
          onValuesChange={onFinish}
          // disabled={componentDisabled}
        >
          <Form.Item label="Join Date">
            <DatePicker />
          </Form.Item>
          <h4>Surety Person:</h4>
          <div style={{ display: "flex" }}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Age">
              <Input />
            </Form.Item>
            <Form.Item label="Relationship">
              <Input />
            </Form.Item>
          </div>
          <h4>Member:</h4>
          <div style={{ display: "flex" }}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Age">
              <Input />
            </Form.Item>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item label="Father name">
              <Input />
            </Form.Item>
            <Form.Item label="Mother name">
              <Input />
            </Form.Item>
          </div>
          <h4>Occupation Details:</h4>
          <div style={{ display: "flex" }}>
            <Form.Item label="Occupation">
              <Input />
            </Form.Item>
            <Form.Item label="Monthly Income">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Yearly Income">
              <InputNumber />
            </Form.Item>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item label="Education">
              <Input />
            </Form.Item>
            <Form.Item label="Religion">
              <Select style={{ width: "200px" }}>
                <Select.Option value="Hindhu">Hindhu</Select.Option>
                <Select.Option value="Chirist">Chirist</Select.Option>
                <Select.Option value="Musulim">Musulim</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Education">
              <Input />
            </Form.Item>
            {/* <Form.Item label="Disabled Person " valuePropName="checked">
            <Switch />
          </Form.Item> */}
            <Form.Item
              label="Disabled Person"
              name="disabledPerson"
              valuePropName="checked"
            >
              <Checkbox>yes</Checkbox>
            </Form.Item>
          </div>
          <Form.Item label="House details">
            <Radio.Group>
              <Radio value="own house">Own House </Radio>
              <Radio value="Rent"> Rent</Radio>
              <Radio value="lease"> Lease </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Years of Service">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Address">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Marital Status">
            <Radio.Group>
              <Radio value="married">Married </Radio>
              <Radio value="unmarried"> UnMarried</Radio>
              <Radio value="widow"> Widow </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Member of Family Members: (Adults)">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Member of Family Members: (Children)">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Aadhaar Number">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Nominee Aadhaar Number">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
export default AddMember;
