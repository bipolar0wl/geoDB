import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Tabs
      value={`/${location.pathname.split(`/`)[1]}`}
      textColor="secondary"
      indicatorColor="secondary"
    >
      <Tab label="Главная" value="/" to="/" component={Link} />
      <Tab label="Образцы" value="/samples" to="/samples" component={Link} />
      <Tab label="Шлифы" value="/sections" to="/sections" component={Link} />
      <Tab label="Анализы" value="/analyzes" to="/analyzes" component={Link} />
      <Tab label="Книги" value="/books" to="/books" component={Link} />
    </Tabs>
  );
};

export default Header;
