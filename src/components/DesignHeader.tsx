import React from "react";
import { Layout } from 'antd';
import {
    MenuOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { IDesignHeaderProps } from './../constants/interface';

const { Header } = Layout;

const DesignHeader = ({ setCollapse, collapsed }: IDesignHeaderProps) => {
    return (
        <React.Fragment>
            <Header className="header">
                <div className="logo">BESTE</div>
                <MenuOutlined style={{ color: "#fff", fontSize: "20px" }} onClick={() => setCollapse(!collapsed)} />
            </Header>
        </React.Fragment>
    );
};

export default DesignHeader;