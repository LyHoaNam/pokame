import KeyElements from "@src/components/atom/key-elements";

const TopRowKeyboard = () => {
  return (
    <div className="mb-2">
      <KeyElements.Line rowName="topRow" Component={KeyElements.Key} />
    </div>
  );
};
const HomeRowKeyboard = () => {
  return (
    <div className="mb-2">
      <KeyElements.Line rowName="homeRow" Component={KeyElements.Key} />
    </div>
  );
};
const BottomRowKeyboard = () => {
  return (
    <div className="">
      <KeyElements.Line
        rowName="bottomRow"
        Component={KeyElements.Key}
      >
        <KeyElements.BackSpace />
      </KeyElements.Line>
    </div>
  );
};

const RowBoards = {
  top: TopRowKeyboard,
  home: HomeRowKeyboard,
  bottom: BottomRowKeyboard
}
export default RowBoards;