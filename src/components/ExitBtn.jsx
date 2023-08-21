import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useContext, useState } from "react";
import { editContext } from "../context/Context";

export default function ExitBtn({ container }) {
  const [open, setOpen] = useState(false);
  const { edit, setEdit } = useContext(editContext);

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>
        <button className="Button">Cancel</button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal container={container}>
        <AlertDialog.Overlay
          onClick={() => setOpen(false)}
          className="AlertDialogOverlay"
          style={{
            background: "rgba(0, 0, 0, 0.447)",
            position: "fixed",
          }}
        />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogContentTitle">
            저장하지 않고 나가시겠습니까?
          </AlertDialog.Title>
          <div className="AlertDialogBtnContainer">
            <AlertDialog.Cancel>취소</AlertDialog.Cancel>
            <AlertDialog.Action
              onClick={() => setEdit({ ...edit, edit: !edit.edit })}
            >
              저장 안 함
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
