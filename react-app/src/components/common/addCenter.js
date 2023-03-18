import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import PDService from "../../service/service";
import { Form, Input, Button, Select, TimePicker, Upload, Modal } from "antd";
const { TextArea } = Input;

const AddCenter = ({ addCenterInfo, onCancel, staffs }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { name, staff_id, dayOrder, time, description } = values;
    setLoading(true);
    try {
      const result = await PDService.addCenter({
        staff_id,
        name,
        dayOrder,
        time: time.format("HH:mm:ss"),
        description,
      });
      setLoading(false);
      onCancel();
    } catch (e) {}
  };

  const getFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Modal
      open={addCenterInfo.status}
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
          form="addCenterForm"
          htmlType="submit"
          loading={loading}
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
        id="addCenterForm"
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={(f) => {
          console.log(f);
        }}
        // disabled={componentDisabled}
      >
        <Form.Item
          name="name"
          label="Center Name"
          rules={[{ required: true, message: "Enter the name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="staff_id"
          label="Staff"
          rules={[{ required: true, message: "Please select Staff" }]}
        >
          <Select>
            {staffs.map((staff) => (
              <Select.Option value={staff.id}>{staff.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="dayOrder"
          label="Dayorder"
          rules={[{ required: true, message: "Please select day!" }]}
        >
          <Select>
            <Select.Option value="monday">Monday</Select.Option>
            <Select.Option value="tuesday">Tuesday</Select.Option>
            <Select.Option value="wednesday">Wednesday</Select.Option>
            <Select.Option value="thursday">Thursday</Select.Option>
            <Select.Option value="friday">Friday</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Proof Images"
          getValueFromEvent={getFile}
          valuePropName="fileList"
        >
          <Upload name="image" listType="picture-card">
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
        <Form.Item
          name="time"
          label="TimePicker"
          rules={[{ required: true, message: "Please select time" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please summarize the center" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddCenter;
