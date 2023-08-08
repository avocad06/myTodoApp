import FilterHeader from "./FilterHeader";
import { useEffect, useRef, useState } from "react";

import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";

export default function TodoList({ data, handleCheck, handleRemove }) {
  const [filter, setFilter] = useState("All");
  const [listHeight, setListHeight] = useState(0);

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const height = listRef.current.scrollHeight;

      if (listHeight < height) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
      return setListHeight(height);
    }
  }, [data.length]);

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
        minHeight: "250px",
        overflow: "hidden",
        marginBottom: "25px",
      }}
    >
      <FilterHeader handleFilter={handleFilter} />
      <ul className="TodoList" ref={listRef}>
        {filteredTodo.length ? (
          Todos
        ) : (
          <p style={{ color: "rgb(111, 110, 119)" }}>Empty {filter}</p>
        )}
      </ul>
    </section>
  );
}

export function Todo({ todo, handleCheck, handleRemove }) {
  const delBtnRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
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
        <p>{todo.content}</p>
        <button ref={delBtnRef} onClick={handleClick}>
          <Cross2Icon />
        </button>
      </li>
    </form>
  );
}
