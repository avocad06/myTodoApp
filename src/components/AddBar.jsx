import { useState } from "react";
import { FormCheck } from "../utils/validation";
import * as Form from "@radix-ui/react-form";

import { useContext } from "react";
import { themeContext } from "../context/Context";

export default function AddBar({ onAdd }) {
  const [inputText, setInputText] = useState("");
  // const inputPlaceholder = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = FormCheck(inputText);

    if (valid) {
      onAdd(valid);
    }

    // if (!valid) {
    //     inputPlaceholder.current.placeholder = '내용을 입력해주세요.'
    //     setTimeout(() => {
    //         inputPlaceholder.current.placeholder = ''
    //     }, 600);
    // }

    return setInputText("");
  };

  const theme = useContext(themeContext);

  return (
    <>
      <Form.Root onClearServerErrors={handleSubmit} className="FormRoot">
        <Form.Field className="FormField">
          <Form.Control asChild>
            <input
              className={`Input ${theme}:text-white`}
              value={inputText}
              type="text"
              onChange={(e) => setInputText(e.target.value)}
              required
            />
          </Form.Control>
          <Form.Message
            className="FormMessage"
            match={(value) => !FormCheck(value)}
          >
            내용을 입력해 주세요.
          </Form.Message>
        </Form.Field>

        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }} type="submit">
            Add
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
}
