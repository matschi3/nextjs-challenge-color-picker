import useLocalStorageState from "use-local-storage-state";

export default function Home() {
  const [pickedColor, setPickedColor] = useLocalStorageState("pickedColor", {
    defaultValue: "#00ffdd",
  });

  const styleObjectBackground = {
    backgroundColor: pickedColor,
  };

  function handleColorPick(event) {
    const colorPick = event.target.value;
    setPickedColor(colorPick);
  }

  return (
    <div style={styleObjectBackground}>
      <input
        type="color"
        value={pickedColor}
        onChange={handleColorPick}
      ></input>
      <input type="text" value={pickedColor} onChange={handleColorPick}></input>
    </div>
  );
}
