import { useEffect, useContext, useRef } from "react";
import useTodoHandler from "../hooks/useTodoHandler";
import { editContext } from "../context/Context";

import { Todo } from "./TodoList";
import { FormCheck } from "../utils/validation";
import useScroll from "../hooks/useScroll";

export default function EditMode({ data, saveData }) {
  const { edit, setEdit } = useContext(editContext);

  useEffect(() => {
    const beforeUnloadListener = (e) => {
      e.preventDefault();
      return (e.returnValue = false);
    };
    window.addEventListener("beforeunload", beforeUnloadListener);
    return window.removeEventListener("beforeunload", beforeUnloadListener);
  }, []);

  const {
    data: modifiedData,
    handleRemove,
    handleCheck,
    handleAdd,
    handleEdit,
  } = useTodoHandler(data);

  const listRef = useRef(null);

  useScroll(listRef, modifiedData);

  function validateModifiedData(data) {
    const newArr = data.filter((obj) => FormCheck(obj.content));
    return newArr;
  }

  useEffect(() => {
    const prevEdit = edit;
    if (edit.isSaved) {
      saveData((prev) => {
        const nextData = validateModifiedData(modifiedData);
        if (JSON.stringify(prev) === JSON.stringify(nextData)) {
          return prev;
        }
        prevEdit.edited = true;
        return nextData;
      });
      return setEdit({ prevEdit, edit: !edit.edit, isSaved: false });
    }
  }, [edit.isSaved]);

  return (
    <ul className="TodoList" ref={listRef}>
      {modifiedData.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
        />
      ))}
      <button
        style={{
          background: "grey",
          marginTop: "40px",
          display: "inline-block",
          width: "100%",
        }}
        onClick={() => handleAdd("")}
      >
        Add
      </button>
    </ul>
  );
}
