import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function FilterHeader({ filter, handleFilter }) {
  const buttons = ["All", "Todo", "Finished"].map((button, i) => {
    return (
      <ToggleGroup.Item key={i} className="ToggleGroupItem" value={button}>
        {button}
      </ToggleGroup.Item>
    );
  });

  return (
    <ToggleGroup.Root
      type="single"
      defaultValue="All"
      value={filter}
      className="ToggleGroup"
      onValueChange={(filter) => filter && handleFilter(filter)}
    >
      {buttons}
    </ToggleGroup.Root>
  );
}
