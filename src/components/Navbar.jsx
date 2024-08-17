import { Tabs, Typography } from "antd";
import { NavLink } from "react-router-dom";

const { Title } = Typography;

const items = [
  {
    key: "1",
    label: (
      <NavLink to="/">
        <Title level={5}>All</Title>
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink to="/fullstack-development">
        <Title level={5}>Full Stack Development</Title>
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <NavLink to="/data-science">
        <Title level={5}>Data Science</Title>
      </NavLink>
    ),
  },
  {
    key: "4",
    label: (
      <NavLink to="cyber-security">
        <Title level={5}>Cyber Security</Title>
      </NavLink>
    ),
  },
  {
    key: "5",
    label: (
      <NavLink to="career">
        <Title level={5}>Career</Title>
      </NavLink>
    ),
  }
];
const Navbar = () => {
  return <Tabs items={items} defaultActiveKey="1" centered />;
};

export default Navbar;
