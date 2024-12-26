import { useActionState } from "react";

import { actionFormPoke } from "@src/services/formpoke";

import WordBoard from "../molecule/WordBoard";

import KeyBoard from "./KeyBoard";

const FormPoke = () => {
  const [state, actionForm] = useActionState(actionFormPoke().actionName, "");

  return (
    <form className="pb-7 pt-4 flex flex-col items-center" action={actionForm}>
      {state}
      <WordBoard />
      <KeyBoard />
    </form>
  );
};
export default FormPoke;
