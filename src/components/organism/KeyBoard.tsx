import RowBoards from "@src/components/molecule/RowBoards"

const KeyBoard = () => {
  return (
    <div className="py-7 flex flex-col items-center">
      <RowBoards.top />
      <RowBoards.home />
      <RowBoards.bottom />
    </div>
  )
}
export default KeyBoard;