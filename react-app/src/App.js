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
import PDService  from './service/service';

function App() {
  const [branches, setBranches] = useState([]);
  const [activeBranchID, setActiveBranchID] = useState([]);
  let getBranchesList = () => {
    let data;
    PDService.getBranches()
      .then((res) => {
        data = res.results;
        setBranches(data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getBranchesList();
  },[]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Main branches={branches} setActiveBranchID={(value) => setActiveBranchID(value)}>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/profile" render ={props => <Profile  {...props} activeBranchID={activeBranchID}></Profile>} />
          <Route exact path="/settings" component={Settings} />
          {/* <Redirect from="*" to="/" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
