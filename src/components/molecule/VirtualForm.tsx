import { type RefObject, useDeferredValue, useEffect } from "react";
import { useFormStatus } from "react-dom";

import WordCloud3D from "@src/components/atom/Word3DItem";
import { usePokeSelector } from "@src/hooks/core";
import { useHandleRealKeyboard } from "@src/hooks/useKeyboard";
import { actionFormPoke } from "@src/services/formpoke";

interface Props {
  ref: RefObject<HTMLButtonElement | null>;
}
const VirtualForm = ({ ref }: Props) => {
  const activeName = usePokeSelector("activeName");
  const inputValue = usePokeSelector("inputValue");
  const { pending } = useFormStatus();
  const deferredValue = useDeferredValue(inputValue);

  const { isSubmit } = useHandleRealKeyboard({ isDisable: pending });
  useEffect(() => {
    if (isSubmit && ref.current) {
      ref.current?.click();
    }
  }, [isSubmit, ref]);
  return (
    <>
      <input
        type="hidden"
        value={activeName}
        name={actionFormPoke().pokeName}
      />
      <input
        type="hidden"
        value={inputValue}
        name={actionFormPoke().inputName}
      />
      <button type="submit" className="hidden" ref={ref} />
      <WordCloud3D text={deferredValue} />
    </>
  );
};
export default VirtualForm;
