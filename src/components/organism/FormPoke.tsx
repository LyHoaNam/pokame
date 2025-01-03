import { useActionState, useEffect, useRef } from "react";
import VirtualForm from "src/components/molecule/VirtualForm";

import KeyBoard from "@src/components/molecule/KeyBoard";
import { PendingPoke } from "@src/components/molecule/PendingPoke";
import WordBoard from "@src/components/molecule/WordBoard";
import { useDispatch } from "@src/hooks/core";
import { actionFormPoke } from "@src/services/formpoke";

const FormPoke = () => {
  const [state, actionForm, isPending] = useActionState(
    actionFormPoke().actionName,
    ""
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (state && !isPending) dispatch({ type: state });
  }, [dispatch, state, isPending]);

  return (
    <form className="pb-7 pt-4 flex flex-col items-center" action={actionForm}>
      <p
        className="font-bold text-lg"
        style={{ color: state === "FAIL" ? "red" : "green" }}
      >
        {state}
      </p>
      <WordBoard />
      <KeyBoard />
      <PendingPoke />
      <VirtualForm ref={ref} />
    </form>
  );
};
export default FormPoke;
