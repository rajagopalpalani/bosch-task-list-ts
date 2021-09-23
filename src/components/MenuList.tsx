import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  UnorderedListOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import { INavNames, INavList, IMenuProps } from './../constants/interface';

const MenuList = ({ currentMenu, setCurrentMenu, collapsed }: IMenuProps) => {
  const navList: INavNames = { name: [{ menuName: "Tasks", icon: <UnorderedListOutlined /> }, { menuName: "Contact Us", icon: <ContactsOutlined /> }] };
  
  return (
    <React.Fragment>
      <Menu theme="dark" defaultSelectedKeys={[currentMenu.toString()]} inlineCollapsed={collapsed}>
        {navList.name.map((item: INavList, index: number) => (
          <Menu.Item key={`menu-${index}`} icon={item.icon} onClick={() => setCurrentMenu(index)}>
            {item.menuName}
          </Menu.Item>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default MenuList;