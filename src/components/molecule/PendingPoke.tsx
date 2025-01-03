import { createPortal, useFormStatus } from "react-dom";

import { Loading } from "@src/components/atom/Loading";

export const PendingPoke = () => {
  const { pending } = useFormStatus();

  const rootElement = document.getElementById("root");
  if (!rootElement) return <></>;

  return <div>{pending && createPortal(<Loading />, rootElement)}</div>;
};
