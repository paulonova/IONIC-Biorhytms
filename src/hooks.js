import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
  const [value, setValue] = useState(getInitialValue);

  const setAndStoreValeu = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setAndStoreValeu];
}
