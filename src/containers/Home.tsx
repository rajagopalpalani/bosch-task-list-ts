import React, { useState } from "react";
import { Layout } from 'antd';
import DesignHeader from "../components/DesignHeader";
import DesignFooter from "../components/DesignFooter";
import MenuList from "../components/MenuList";
import Tasks from "./Tasks";
import ContactUs from "./ContactUs";

const { Sider, Content } = Layout;

const Home = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [collapsed, setCollapse] = useState(false);

  return (
    <React.Fragment>
      <Layout>
        <DesignHeader setCollapse={setCollapse} collapsed={collapsed} />
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}><MenuList currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} collapsed={collapsed} /></Sider>
          <Content>{currentMenu === 0 && <Tasks />}
            {currentMenu === 1 && <ContactUs />}</Content>
        </Layout>
        <DesignFooter />
      </Layout>
    </React.Fragment>
  );
};

export default Home;