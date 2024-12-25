import CharacterInput from "@src/components/atom/character-input";

const WordBoard = () => {
  return (
    <div className="relative w-full flex justify-center">
      <CharacterInput.Word Component={CharacterInput.Character} word="spyduck" />
    </div>
  );
};
export default WordBoard;
