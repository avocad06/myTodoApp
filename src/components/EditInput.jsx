import { forwardRef, useEffect, useState } from "react";

export default forwardRef(function EditInput(
  { todo, editValue, handleEdit },
  ref
) {
  const [text, setText] = useState(editValue);

  useEffect(() => {
    if (text.length === 0) {
      ref.current?.focus();
    }
  }, []);

  return (
    <input
      type="text"
      ref={ref}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => handleEdit(todo.id, text)}
    />
  );
});
