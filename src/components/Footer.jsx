import { useContext, useState } from "react";
import { editContext } from "../context/Context";
import ExitBtn from "../components/ExitBtn";
import AddBar from "./AddBar";

export default function Footer({ onAdd }) {
  const [container, setContainer] = useState(null);
  const { edit: editMode, setEdit } = useContext(editContext);

  const handleClick = () => {
    setEdit({ ...editMode, isSaved: true });
  };

  if (!editMode.edit) return <AddBar onAdd={onAdd} />;

  return (
    <div className="footer__btnContainer" ref={setContainer}>
      <ExitBtn container={container} />
      <button className="Button" onClick={handleClick}>
        Save
      </button>
    </div>
  );
}
