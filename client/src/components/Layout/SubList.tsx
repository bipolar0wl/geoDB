import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"; // Главная
import BentoIcon from "@mui/icons-material/Bento"; // Образцы
import BiotechIcon from "@mui/icons-material/Biotech"; // Шлифы
import AttractionsIcon from "@mui/icons-material/Attractions"; // Анализы
import BookIcon from "@mui/icons-material/Book"; // Книги

import AddIcon from "@mui/icons-material/Add";
import AddBoxIcon from "@mui/icons-material/AddBox";

import AccountBoxIcon from "@mui/icons-material/AccountBox"; // Авторы
import TagIcon from "@mui/icons-material/Tag"; // Теги
import DiamondIcon from "@mui/icons-material/Diamond"; // Минералы
import TextureIcon from "@mui/icons-material/Texture"; // Текстуры
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek"; // Структуры
import BubbleChartIcon from "@mui/icons-material/BubbleChart"; // Элементы

import { useNavigate } from "react-router-dom";

const SubList = () => {
  let navigate = useNavigate();

  const mainPages = [
    {
      text: "Главная",
      icon: <HomeIcon />,
      ref: "/",
    },
    {
      text: "Образцы",
      icon: <BentoIcon />,
      ref: "/samples",
    },
    {
      text: "Шлифы",
      icon: <BiotechIcon />,
      ref: "/sections",
    },
    {
      text: "Анализы",
      icon: <AttractionsIcon />,
      ref: "/analyzes",
    },
    {
      text: "Книги",
      icon: <BookIcon />,
      ref: "/books",
    },
  ];
  const addPages = [
    {
      text: "Добавить образец",
      icon: <HomeIcon />,
      ref: "/samples/post",
    },
    {
      text: "Добавить шлиф",
      icon: <HomeIcon />,
      ref: "/sections/post",
    },
    {
      text: "Добавить анализ",
      icon: <HomeIcon />,
      ref: "/analyzes/post",
    },
    {
      text: "Добавить книгу",
      icon: <HomeIcon />,
      ref: "/books/post",
    },
  ];
  const subPages = [
    {
      text: "Список авторов",
      icon: <AccountBoxIcon />,
      ref: "/authors",
    },
    {
      text: "Список тегов",
      icon: <TagIcon />,
      ref: "/tags",
    },
    {
      text: "Список минералов",
      icon: <DiamondIcon />,
      ref: "/minerals",
    },
    {
      text: "Список текстур",
      icon: <TextureIcon />,
      ref: "/textures",
    },
    {
      text: "Список структур",
      icon: <CalendarViewWeekIcon />,
      ref: "/structures",
    },
    {
      text: "Список элементов",
      icon: <BubbleChartIcon />,
      ref: "/elements",
    },
  ];
  return (
    <>
      <List>
        {mainPages.map((page, index) => (
          <ListItem button key={index} onClick={() => navigate(page.ref)}>
            <ListItemIcon sx={{ pl: 1 }}>{page.icon}</ListItemIcon>
            <ListItemText primary={page.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {addPages.map((page, index) => (
          <ListItem button key={index} onClick={() => navigate(page.ref)}>
            <ListItemIcon sx={{ pl: 1 }}>
              {index % 2 === 0 ? <AddIcon /> : <AddBoxIcon />}
            </ListItemIcon>
            <ListItemText primary={page.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subPages.map((page, index) => (
          <ListItem button key={index} onClick={() => navigate(page.ref)}>
            <ListItemIcon sx={{ pl: 1 }}>{page.icon}</ListItemIcon>
            <ListItemText primary={page.text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SubList;
