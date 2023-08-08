import "./App.css";
import AddBar from "./components/AddBar";
import TodoList from "./components/TodoList";
import EditMode from "./components/EditMode";
import { themeContext } from "./context/Context";

//hooks
import { useEffect, useState } from "react";

let nextId = 2;

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchData();
    return;
  }, []);

  async function fetchData() {
    const dataRes = await fetch("/mock/data.json");
    if (dataRes.ok) {
      const result = await dataRes.json();
      setData(result);
    }
  }

  const handleAdd = (args) => {
    setData([
      ...data,
      {
        id: nextId++,
        content: args,
        active: true,
      },
    ]);
  };

  const handleCheck = (id) => {
    const nextData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, active: !todo.active };
      }
      return todo;
    });
    setData(nextData);
  };

  const handleRemove = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  const darkClass = {
    text: "dark:text-white",
    bg: "dark:bg-slate-800",
  };

  const themeClass =
    theme === "dark"
      ? `darkMode ${[darkClass.text, darkClass.bg].join(" ")}`
      : "";

  return (
    <div className={`TodoApp ${themeClass}`}>
      <themeContext.Provider value={theme}>
        <EditMode
          data={data}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
        />
        {/* <TodoList
          data={data}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
        /> */}
        <AddBar onSubmit={handleAdd} />
      </themeContext.Provider>
      <input
        id="theme"
        type="checkbox"
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label htmlFor="theme">set DarkMode</label>
    </div>
  );
}

export default App;
