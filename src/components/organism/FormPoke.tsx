import { useActionState, useEffect } from "react";

import { useDispatch } from "@src/hooks/core";
import { actionFormPoke } from "@src/services/formpoke";

import WordBoard from "../molecule/WordBoard";

import KeyBoard from "./KeyBoard";

const FormPoke = () => {
  const [state, actionForm, isPending] = useActionState(
    actionFormPoke().actionName,
    ""
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (state && !isPending) dispatch({ type: state });
  }, [dispatch, state, isPending]);

  return (
    <form className="pb-7 pt-4 flex flex-col items-center" action={actionForm}>
      {state}
      <WordBoard />
      <KeyBoard />
    </form>
  );
};
export default FormPoke;
