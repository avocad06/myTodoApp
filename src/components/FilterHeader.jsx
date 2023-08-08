import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function FilterHeader({ handleFilter }) {
  const buttons = ["All", "Todo", "Finished"].map((button, i) => {
    return (
      <ToggleGroup.Item
        key={i}
        value={button}
        className="ToggleGroupItem"
        onClick={() => handleFilter(button)}
      >
        {button}
      </ToggleGroup.Item>
    );
  });

  return (
    <ToggleGroup.Root type="single" defaultValue="All" className="ToggleGroup">
      {buttons}
    </ToggleGroup.Root>
  );
}
