import "./App.css";
import TodoList from "./components/TodoList";
import EditMode from "./components/EditMode";
import Footer from "./components/Footer";
import { editContext } from "./context/Context";
import Toggle from "./components/Toggle";

import useTodoHandler from "./hooks/useTodoHandler";

//hooks
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [edit, setEdit] = useState({
    edit: false,
    isSaved: false,
    isEdited: false,
  });
  const [clickedId, setClickedId] = useState(null);

  function handleId(id) {
    setClickedId(id);
  }

  const {
    data: originData,
    setData: setOriginData,
    handleAdd,
    handleRemove,
    handleCheck,
  } = useTodoHandler(null);

  useEffect(() => {
    fetchData();
    return;
  }, []);

  async function fetchData() {
    const dataRes = await fetch("/mock/data.json");
    if (dataRes.ok) {
      const result = await dataRes.json();
      setOriginData(result);
    }
  }

  const darkClass = {
    text: "dark:text-white",
    bg: "dark:bg-slate-900",
  };

  const themeClass =
    theme === "dark"
      ? `darkMode ${[darkClass.text, darkClass.bg].join(" ")}`
      : "";

  if (!originData) return;

  return (
    <div className={`App ${themeClass}`}>
      <div className="TodoApp">
        <editContext.Provider value={{ edit, setEdit, clickedId, handleId }}>
          {edit.edit ? (
            <EditMode data={originData} saveData={setOriginData} />
          ) : (
            <TodoList
              data={originData}
              handleCheck={handleCheck}
              handleRemove={handleRemove}
            />
          )}
          <Footer onAdd={handleAdd} />
        </editContext.Provider>
        <Toggle
          setTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </div>
  );
}

export default App;
