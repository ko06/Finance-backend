import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import PDService from '../../service/service'
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

const AddCenter = ({ addCenterInfo, onCancel, staffs }) => {
  const onFinish = (values) => {
    handleOk(values)
  };

  const handleOk = (values) => {
    PDService.addCenter({
      name: "selva",
      description: "this is dummy text",
      dayorder: "monday",
      time: "6.30",
    })
      .then((res) => {
        // debugger;
      })
      .catch((err) => {});
  };

  return (
    <Modal
      open={addCenterInfo.status}
      title="Add a center to - DGL"
      onOk={() => console.log("Done")}
      onCancel={() => onCancel()}
      // footer={[
      //   <Button key="back" onClick={() => onCancel()}>
      //     Return
      //   </Button>,
      //   <Button
      //     key="submit"
      //     type="primary"
      //     // loading={loading}
      //     onClick={handleOk}
      //   >
      //     Submit
      //   </Button>,
      // ]}
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
        <Form.Item label="Center Name">
          <Input />
        </Form.Item>
        <Form.Item label="Staff">
          <Select>
            {staffs.map((staff) => (
              <Select.Option value={staff.id}>
                {staff.user.username}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Dayorder">
          <Select>
            <Select.Option value="monday">Monday</Select.Option>
            <Select.Option value="tuesday">Tuesday</Select.Option>
            <Select.Option value="wednesday">Wednesday</Select.Option>
            <Select.Option value="thursday">Thursday</Select.Option>
            <Select.Option value="friday">Friday</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Proof Images" valuePropName="fileList">
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
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Information">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddCenter;
