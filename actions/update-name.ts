export const updateName = async (id: string, name: string) => {
  const delayedResponse = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });

  return { id, name: delayedResponse };
};
