import FilterHeader from "./FilterHeader";
import { useRef, useState, useContext, useEffect } from "react";

import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";
import { editContext } from "../context/Context";

import EditInput from "./EditInput";
import useScroll from "../hooks/useScroll";

export default function TodoList({ data, handleCheck, handleRemove }) {
  const [filter, setFilter] = useState("All");

  const listRef = useRef(null);

  useScroll(listRef, data);

  const filteredTodo = data.filter((todo) => {
    if (filter === "Todo") {
      return todo.active;
    }

    if (filter === "Finished") {
      return !todo.active;
    }

    return todo;
  });

  const handleFilter = (name) => {
    setFilter(name);
  };

  const Todos = filteredTodo.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      handleCheck={handleCheck}
      handleRemove={handleRemove}
    />
  ));

  return (
    <section
      style={{
        height: "60%",
        marginBottom: "25px",
      }}
    >
      <FilterHeader filter={filter} handleFilter={handleFilter} />
      <ul className="TodoList" ref={listRef}>
        {filteredTodo.length ? (
          Todos
        ) : (
          <p
            style={{
              color: "rgb(111, 110, 119)",
              width: "100%",
              textAlign: "center",
            }}
          >
            Empty {filter}
          </p>
        )}
      </ul>
    </section>
  );
}

export function Todo({ todo, handleRemove, handleCheck, handleEdit }) {
  const delBtnRef = useRef(null);

  const { edit, setEdit, handleId, clickedId: id } = useContext(editContext);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && todo.id === id) {
      inputRef.current.focus();
    }
    return () => (inputRef.current = null);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    handleRemove(todo.id);
  };

  return (
    <form>
      <li className="TodoRow">
        <Checkbox.Root
          className="CheckboxRoot"
          onCheckedChange={() => handleCheck(todo.id)}
          checked={!todo.active}
          onMouseOver={() => {
            delBtnRef.current.style.opacity = "0";
          }}
          onMouseLeave={() => {
            delBtnRef.current.style = "";
          }}
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        {edit.edit ? (
          <EditInput
            todo={todo}
            editValue={todo.content}
            handleEdit={handleEdit}
            ref={inputRef}
          />
        ) : (
          <p
            className="TodoText"
            onClick={() => {
              handleId(todo.id);
              setEdit({ ...edit, edit: !edit.edit });
            }}
          >
            {todo.content}
          </p>
        )}
        <button ref={delBtnRef} onClick={handleClick}>
          <Cross2Icon />
        </button>
      </li>
    </form>
  );
}
