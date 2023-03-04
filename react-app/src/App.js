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
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Settings from "./pages/Settings";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useState, useEffect } from "react";
import PDService from "./service/service";
import { useHistory } from "react-router-dom";
import { message, Space, Spin } from "antd";

function App() {
  let history = useHistory();
  const [branches, setBranches] = useState([]);
  const [activeBranchID, setActiveBranchID] = useState(null);
  const [staffs, setStaffs] = useState([]);
  const [isWhoamILoading, setIsWhoamILoading] = useState(true);
  const [user, setUser] = useState({});

  let getStaffList = (id) => {
    let data;
    PDService.getStaffs(id)
      .then((res) => {
        data = res.results;
        setStaffs(data);
      })
      .catch((err) => {});
  };

  let getBranchesList = () => {
    let data;
    PDService.getBranches()
      .then((res) => {
        data = res.results;
        setBranches(data);
        setActiveBranchID(data[0]["id"]);
      })
      .catch((err) => {});
  };

  let whoami = () => {
    PDService.whoami()
      .then((res) => {
        if(user.id){
          return
        }
        if (res?.id) {
          setUser(res.results);
          message.success(`Welcome ${res.username}`);
          history.push("/dashboard");
        } else {
          history.push("/");
        }
        setIsWhoamILoading(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (!(user && user.id)) {
      whoami();
    }
  }, [whoami]);

  useEffect(() => {
    if (activeBranchID) {
      getStaffList(activeBranchID);
    }
  }, [activeBranchID]);

  useEffect(() => {
    if (user?.role) {
      getBranchesList();
    }
  }, [user]);

  return isWhoamILoading ? (
    <div
      style={{ height: "100vh" }}
      className={"aligin-center d-flex justify-center justify-content-center"}
    >
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  ) : (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Main
          branches={branches}
          setActiveBranchID={(value) => setActiveBranchID(value)}
        >
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <Home
                {...props}
                setActiveBranchID={(value) => setActiveBranchID(value)}
                activeBranchID={activeBranchID}
                staffs={staffs}
              ></Home>
            )}
          />
          <Route exact path="/billing" component={Billing} />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                {...props}
                setActiveBranchID={(value) => setActiveBranchID(value)}
                activeBranchID={activeBranchID}
                staffs={staffs}
              ></Profile>
            )}
          />
          <Route
            exact
            path="/settings"
            render={(props) => (
              <Settings
                {...props}
                setActiveBranchID={(value) => setActiveBranchID(value)}
                activeBranchID={activeBranchID}
                staffs={staffs}
              ></Settings>
            )}
          />
          {/* <Redirect from="*" to="/" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
