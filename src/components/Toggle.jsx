import * as Switch from "@radix-ui/react-switch";

export default function Toggle({ setTheme }) {
  return (
    <form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "5px",
          right: "5px",
          margin: "10px",
        }}
      >
        <label
          className="Label"
          htmlFor="dark-mode"
          style={{ paddingRight: 15 }}
        >
          Dark mode
        </label>
        <Switch.Root
          onCheckedChange={setTheme}
          defaultChecked={false}
          className="SwitchRoot"
          id="dark-mode"
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </form>
  );
}
