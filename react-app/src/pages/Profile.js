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
import { useState,useEffect } from "react";
import PDService from "../service/service";
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Space,
  Collapse,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
  Checkbox,
  DatePicker,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-1.png";
import project1 from "../assets/images/center-1.jpeg";
import project2 from "../assets/images/center-2.jpeg";
import project3 from "../assets/images/center.jpeg";
import AddMember from "../components/common/addMember";
import UpdateMoney from "../components/common/updateMoney";
const { RangePicker } = DatePicker;

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
for (let i = 0; i < 3; i++) {
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

function Profile() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  const [addMemberInfo, setAddMemberInfo] = useState({ status: false });
  const [updateMoneyInfo, setUpdateMoneyInfo] = useState({ status: false });

  let text = "asdfdsfg";
  const onChange = (key) => {
    console.log(key);
  };

  let selva = () => {
  
    let data ;

    PDService.getCaste('http://localhost:8000/wel/')
    .then(res => {
        data = res.data;
        this.setState({
            details : data    
        });
    })
    .catch(err => {})
}

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const project = [
    {
      img: project1,
      titlesub: "கிழக்கு மரியானதா தெரு- 01",
      title: "Modern",
      time: "6.00 AM",
      lead: "திலகா",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "கிழக்கு மரியானதா தெரு- 02",
      title: "Scandinavian",
      time: "6.30 AM",
      lead: "செலின் மெரி ",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "கிழக்கு மரியானதா தெரு- 03",
      title: "Minimalist",
      time: "7.00 AM",
      lead: "ஜெயபாரதி",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  useEffect(() => {
    // Update the document title using the browser API
    selva()
  });

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Saravanan</h4>
                  <p>Staff </p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
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
                <Button type="primary">Get Order</Button>
              </div>
            </Col>
          </Row>
        }
      ></Card>

      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">Projects</h6>
            <p>Active Centers</p>
          </>
        }
      >
        <Row gutter={[24, 24]}>
          {project.map((p, index) => (
            <Col span={16} md={12} xl={8} key={index}>
              <Card
                bordered={false}
                className="card-project"
                cover={<img alt="example" src={p.img} />}
              >
                <div className="card-tag">{p.titlesub} </div>
                <div className="card-time">
                  <div>{p.lead} </div>
                  <div>{p.time}</div>
                </div>
                {/* <h5>{p.titile}</h5> */}
                {/* <p>{p.disciption}</p> */}
                <Row gutter={[6, 0]} className="card-footer">
                  <Col span={12}>
                    <Button
                      type="button ant-btn-primary"
                      onClick={() => setAddMemberInfo({ status: true })}
                    >
                      Add Member
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      type="button"
                      onClick={() => setUpdateMoneyInfo({ status: true })}
                    >
                      UPDATE AMOUNT
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}

          {/* <Col span={24} md={12} xl={6}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader projects-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageURL ? (
                <img src={imageURL} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col> */}
        </Row>
      </Card>

      <Card
        bodyStyle={{ display: "none" }}
        style={{ marginBottom: "20px" }}
        title={
          <>
            {" "}
            <p style={{ marginBottom: "20px" }}>Pending List</p>
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
                <Radio.Group defaultValue="a" style={{ marginRight: "20px" }}>
                  <Radio.Button value="c">YESTERDAY</Radio.Button>
                  <Radio.Button value="b">TODAY</Radio.Button>
                  <Radio.Button value="a">THIS WEEK</Radio.Button>
                </Radio.Group>
                <Space direction="vertical" size={12}>
                  <RangePicker />
                </Space>
                <div
                  style={{ paddingLeft: 20 }}
                  className="header-col header-btn"
                ></div>
              </Col>
              <Col span={24} md={24} className="col-info">
                <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                  <Panel header="கிழக்கு மரியானதா தெரு- 01" key="1">
                    <Button
                      style={{ marginBottom: "20px" }}
                      type="primary"
                      // onClick={() => setAddMemberInfo({ status: true })}
                    >
                      Update Money
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
                </Collapse>
              </Col>
            </Row>
          </>
        }
      ></Card>
      <AddMember
        onCancel={() => setAddMemberInfo({ status: false })}
        addMemberInfo={addMemberInfo}
      ></AddMember>
      <UpdateMoney
        onCancel={() => setUpdateMoneyInfo({ status: false })}
        updateMoneyInfo={updateMoneyInfo}
      ></UpdateMoney>
    </>
  );
}

export default Profile;
