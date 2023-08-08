import { useState, useEffect } from "react";

import { Todo } from "./TodoList";

export default function EditMode({ data, ...rest }) {
  const originData = useState(data);

  useEffect(() => {
    console.log(originData);
  }, []);

  return (
    <div className="TodoList">
      {data.map((todo) => (
        <Todo key={todo.id} todo={todo} {...rest} />
      ))}
    </div>
  );
}
