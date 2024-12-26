export const actionFormPoke = () => {
  const inputName = "pokeName";
  const actionName = async (_: string, formData: FormData): Promise<string> => {
    const itemName = (formData.get(inputName) as string) || "";
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log("🚀 ~ actionName ~ itemName:", itemName);
    return itemName;
  };
  return {
    inputName,
    actionName,
  };
};
