import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

const DesignFooter = () => {
    return (
        <React.Fragment>
            <Footer className="footer">
                Copyright to Bosch Interview - {new Date().getFullYear()}
            </Footer>
        </React.Fragment>
    );
};

export default DesignFooter;