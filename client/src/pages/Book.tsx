import { FC, useState, useEffect } from "react";
import { Button, Grid, SelectChangeEvent, TextField } from "@mui/material";
import TagsDropList from "../components/TagsDropList";
import AuthorsDropList from "../components/AuthorsDropList";
import LangTypeDropList from "../components/LangTypeDropList";
import TextTypeDropList from "../components/TextTypeDropList";
import { useLocation } from "react-router-dom";
import { addBook, fetchOneBook, updateBook } from "../API/books.api";

const Book: FC = () => {
  const location = useLocation();
  const page = location.pathname.split(`/`);
  const id = parseInt(page[page.length - 1]) || 0;

  // * Данные
  const [name, setName] = useState(""); // Наименование
  const [langType, setLangType] = useState(); // Оригинал или перевод
  const [textType, setTextType] = useState(); // Тип
  const [tags, setTags] = useState([]); // Теги
  const [authors, setAuthors] = useState([]); // Авторы
  const [year, setYear] = useState(""); // Дата публикации
  const [publisher, setPublisher] = useState(""); // Издатель
  const [source, setSource] = useState(""); // Источник
  const [ref, setRef] = useState(""); // Ссылка
  const [doi, setDoi] = useState(""); // DOI
  const [gost, setGost] = useState(""); // ГОСТ
  const [mla, setMla] = useState(""); // MLA
  const [apa, setApa] = useState(""); // APA
  const [description, setDescription] = useState(""); // Описание
  const [notice, setNotice] = useState(""); // Заметка
  useEffect(() => {
    fetchOneBook(id).then((response) => {
      if (id) {
        setName(response.name); // Наименование
        setLangType(response.langType); // Оригинал или перевод
        setTextType(response.textType); // Тип
        setTags(response.tags); // Теги
        setAuthors(response.author); // Авторы
        setYear(response.year); // Дата публикации
        setPublisher(response.publisher); // Издатель
        setSource(response.source); // Источник
        setRef(response.ref); // Ссылка
        setDoi(response.doi); // DOI
        setGost(response.gost); // ГОСТ
        setMla(response.mla); // MLA
        setApa(response.apa); // APA
        setDescription(response.description); // Описание
        setNotice(response.notice); // Заметка
      }
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
        <TextField
          required
          id="name"
          label="Название книги"
          size="small"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item xs={8} sm={6} md={4} lg={3} xl={2}>
        <LangTypeDropList langType={langType} setLangType={setLangType} />
      </Grid>
      <Grid item xs={4} sm={6} md={3} lg={3} xl={2}>
        <TextTypeDropList textType={textType} setTextType={setTextType} />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={6} xl={2} display="flex">
        <TextField
          id="year"
          label="Дата публикации"
          size="small"
          fullWidth
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
        <TextField
          id="publisher"
          label="Издательство"
          size="small"
          fullWidth
          value={publisher}
          onChange={(event) => setPublisher(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
        <TextField
          id="source"
          label="Источник"
          size="small"
          fullWidth
          value={source}
          onChange={(event) => setSource(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
        <TextField
          id="ref"
          label="Ссылка"
          size="small"
          fullWidth
          value={ref}
          onChange={(event) => setRef(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <TextField
          id="doi"
          label="DOI"
          size="small"
          fullWidth
          multiline
          rows={4}
          value={doi}
          onChange={(event) => setDoi(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <TextField
          id="gost"
          label="ГОСТ"
          size="small"
          fullWidth
          multiline
          rows={4}
          value={gost}
          onChange={(event) => setGost(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <TextField
          id="mla"
          label="MLA"
          size="small"
          fullWidth
          multiline
          rows={4}
          value={mla}
          onChange={(event) => setMla(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <TextField
          id="apa"
          label="APA"
          size="small"
          fullWidth
          multiline
          rows={4}
          value={apa}
          onChange={(event) => setApa(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <TextField
          id="description"
          label="Описание"
          size="small"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <TextField
          id="notice"
          label="Заметка"
          size="small"
          fullWidth
          multiline
          rows={4}
          value={notice}
          onChange={(event) => setNotice(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <AuthorsDropList authors={authors} setAuthors={setAuthors} />
      </Grid>
      <Grid item xs={12}>
        <TagsDropList tags={tags} setTags={setTags} />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="end">
        {id ? (
          <Button
            variant="outlined"
            onClick={() => {
              console.log(langType);
              addBook({
                name: name, // Наименование
                langType: langType, // Оригинал или перевод
                textType: textType, // Тип
                tags: tags, // Теги
                authors: authors, // Авторы
                year: year, // Дата публикации
                publisher: publisher, // Издатель
                source: source, // Источник
                ref: ref, // Ссылка
                doi: doi, // DOI
                gost: gost, // ГОСТ
                mla: mla, // MLA
                apa: apa, // APA
                description: description, // Описание
                notice: notice, // Заметка
              });
            }}
          >
            Сохранить изменения
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => {
              updateBook(id, {
                name: name, // Наименование
                langType: langType, // Оригинал или перевод
                textType: textType, // Тип
                tags: tags, // Теги
                authors: authors, // Авторы
                year: year, // Дата публикации
                publisher: publisher, // Издатель
                source: source, // Источник
                ref: ref, // Ссылка
                doi: doi, // DOI
                gost: gost, // ГОСТ
                mla: mla, // MLA
                apa: apa, // APA
                description: description, // Описание
                notice: notice, // Заметка
              });
            }}
          >
            Добавить книгу
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Book;
