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
import { useState, useEffect } from "react";

import { Card, Col, Row, Button, Collapse, Radio, Table, Checkbox } from "antd";
import AddMember from "../components/common/addMember";
import AddCenter from "../components/common/addCenter";
import AddLoan from "../components/common/addLoan";
import PDService from "../service/service";
const { Panel } = Collapse;

function Profile({ activeBranchID, staffs, isStaff, user }) {
  return (
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
            <div style={{ paddingLeft: 20 }} className="header-col header-btn">
              User Details
              {/* <Button
              type="primary"
              onClick={() => setAddLoanInfo({ status: true })}
            >
              New Loan
            </Button> */}
            </div>
          </Col>
          <Col span={24} md={24} className="col-info">
            <p>Username : {user.username}</p>
            <p>First name : {user.first_name}</p>
            <p>Last name : {user.last_name}</p>
            <p>Blood type : {user.blood_type}</p>
          </Col>
        </Row>
      }
    ></Card>
  );
}

export default Profile;
