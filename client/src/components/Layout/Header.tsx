import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const tabs = [
    { label: "Главная", to: "/" },
    { label: "Образцы", to: "/samples" },
    { label: "Шлифы", to: "/sections" },
    { label: "Анализы", to: "/analyzes" },
    { label: "Книги", to: "/books" },
  ];

  return (
    <Tabs
      // value={false}
      value={`/${location.pathname.split(`/`)[1]}`}
      textColor="secondary"
      indicatorColor="secondary"
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.to}
          label={tab.label}
          value={tab.to}
          to={tab.to}
          component={Link}
        />
      ))}
    </Tabs>
  );
};

export default Header;
