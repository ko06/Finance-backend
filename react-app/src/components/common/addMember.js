import React, { useState } from "react";
import PDService from "../../service/service";
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
  message,
} from "antd";
const { TextArea } = Input;

let EDUCATION_TYPE, HOUSE_TYPE, MARTIAL_TYPE, OCCUPATION_TYPE, RELIGION_TYPE;

RELIGION_TYPE = [
  { key: "hindu", value: "HINDU" },
  { key: "christian", value: "CHRISTIAN" },
  { key: "muslim", value: "MUSLIM" },
  { key: "others", value: "OTHERS" },
];

HOUSE_TYPE = [
  { key: "own", value: "Own House" },
  { key: "rent", value: "Rent House" },
  { key: "lease", value: "Lease House" },
];
EDUCATION_TYPE = [
  { key: "10-grade", value: "10 Grade" },
  { key: "12-grade", value: "12 Grade" },
  { key: "UG", value: "Under Graduate" },
  { key: "PG", value: "Post Graduate" },
  { key: "diploma", value: "Diploma" },
  { key: "others", value: "Others" },
];
MARTIAL_TYPE = [
  { key: "married", value: "Married" },
  { key: "unmarried", value: "UnMarried" },
  { key: "widow", value: "Widow" },
];
OCCUPATION_TYPE = [
  { key: "agriculture", value: "Agriculture" },
  { key: "tailor", value: "Tailor" },
  { key: "wages", value: "Wages" },
  { key: "driver", value: "Driver" },
  { key: "salaried", value: "Salaried" },
];

let RELATIONSHIP_TYPE = [
  { key: "father", value: "Father" },
  { key: "mother", value: "Mother" },
  { key: "husband", value: "Husband" },
  { key: "son", value: "Son" },
  { key: "daughter", value: "Daughter" },
  { key: "son-in-law", value: "Son In Law" },
  { key: "father-in-law", value: "Father in Law" },
];

const AddMember = ({ addMemberInfo, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const onFinishFailed = () => {
    setLoading(false);
  };

  const onFinish = async (values) => {
    try {
      let {
        name,
        tamil_name,
        dob,
        surety_dob,
        f_name,
        m_name,
        religion,
        occupation,
        surety_aadhaar_no,
        surety_name,
        relationship,
        years_service,
        marital_status,
        education,
        aadhaar_no,
        house,
        no_of_children,
        no_of_adults,
        address,
        monthly_income,
        disabled_person,
        years_of_house,
      } = values;
      setLoading(true);
      dob = dob.format("DD-MM-YYYY");
      surety_dob = surety_dob.format("DD-MM-YYYY");
      const result = await PDService.addMember(
        {
          name,
          tamil_name,
          dob,
          surety_dob,
          f_name,
          m_name,
          religion,
          occupation,
          surety_aadhaar_no,
          surety_name,
          relationship,
          years_service,
          marital_status,
          education,
          aadhaar_no,
          house,
          no_of_children,
          no_of_adults,
          address,
          monthly_income,
          disabled_person,
          years_of_house,
        },
        addMemberInfo.id
      );
      setLoading(false);
      message.success("member added successfully!");
      onCancel();
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={addMemberInfo.status}
      title={`Add a member to ${addMemberInfo.name}`}
      onOk={() => console.log("Done")}
      onCancel={() => onCancel()}
      footer={[
        <Button key="back" onClick={() => onCancel()}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          form="addMemberForm"
          onClick={() => onFinish()}
          htmlType="submit"
          loading={loading}
        >
          Submit
        </Button>,
      ]}
    >
      <div className="finserve-form">
        <Form
          layout="horizontal"
          id="addMemberForm"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <h4>Surety Person:</h4>
          <div style={{ display: "flex" }}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please give name" }]}
              label="Name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tamil_name"
              rules={[{ required: true, message: "Please give tamil name" }]}
              label="Tamil Name"
            >
              <Input />
            </Form.Item>
            <Form.Item name="dob" label="Age">
              <DatePicker format="DD-MM-YYYY" />
            </Form.Item>
            <Form.Item
              name="relationship"
              rules={[
                { required: true, message: "Please choose relationship" },
              ]}
              label="Relationship"
            >
              <Select style={{ width: "200px" }}>
                {RELATIONSHIP_TYPE.map((r, index) => (
                  <Select.Option key={index} value={r.key}>
                    {r.value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <h4>Member:</h4>
          <div style={{ display: "flex" }}>
            <Form.Item
              label="Name"
              name="surety_name"
              rules={[{ required: true, message: "Please give name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={"surety_dob"} label="Age">
              <DatePicker format="DD-MM-YYYY" />
            </Form.Item>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item
              name="f_name"
              rules={[{ required: true, message: "Please give father name" }]}
              label="Father name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="m_name"
              rules={[{ required: true, message: "Please give mother name" }]}
              label="Mother name"
            >
              <Input />
            </Form.Item>
          </div>
          <h4>Occupation Details:</h4>
          <div style={{ display: "flex" }}>
            <Form.Item
              rules={[{ required: true, message: "Please choose occupation" }]}
              name="occupation"
              label="Occupation"
            >
              <Select style={{ width: "200px" }}>
                {OCCUPATION_TYPE.map((r, index) => (
                  <Select.Option key={index} value={r.key}>
                    {r.value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Monthly Income"
              name="monthly_income"
              rules={[{ required: true, message: "Please give income" }]}
            >
              <InputNumber />
            </Form.Item>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item label="Religion" name="religion">
              <Select style={{ width: "200px" }}>
                {RELIGION_TYPE.map((r, index) => (
                  <Select.Option key={index} value={r.key}>
                    {r.value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="education" label="Education">
              <Select style={{ width: "200px" }}>
                {EDUCATION_TYPE.map((r, index) => (
                  <Select.Option key={index} value={r.key}>
                    {r.value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            {/* <Form.Item label="Disabled Person " valuePropName="checked">
            <Switch />
          </Form.Item> */}
          </div>
          <Form.Item
            label="Disabled Person"
            name="disabled_person"
            valuePropName="checked"
          >
            <Checkbox>yes</Checkbox>
          </Form.Item>
          <Form.Item
            label="House details"
            name="house"
            rules={[{ required: true, message: "Please choose valid option" }]}
          >
            <Radio.Group>
              {HOUSE_TYPE.map((r, index) => (
                <Radio value={r.key}>{r.value} </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Years of house"
            name="years_of_house"
            rules={[{ required: true, message: "Please five Years of House" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Years of Service"
            name="years_service"
            rules={[
              { required: true, message: "Please five Years of Service" },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please give address" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Marital Status"
            name="marital_status"
            rules={[
              { required: true, message: "Please choose Marital Status" },
            ]}
          >
            <Radio.Group>
              <Radio value="married">Married </Radio>
              <Radio value="unmarried"> UnMarried</Radio>
              <Radio value="widow"> Widow </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="no_of_adults"
            rules={[{ required: true, message: "Please give family members" }]}
            label="Member of Family Members: (Adults)"
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="no_of_children"
            rules={[{ required: true, message: "Please give family members" }]}
            label="Member of Family Members: (Children)"
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="aadhaar_no"
            rules={[{ required: true, message: "Please give Aadhaar Number" }]}
            label="Aadhaar Number"
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="surety_aadhaar_no"
            rules={[
              { required: true, message: "Please give Nominee Aadhaar Number" },
            ]}
            label="Nominee Aadhaar Number"
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
export default AddMember;
