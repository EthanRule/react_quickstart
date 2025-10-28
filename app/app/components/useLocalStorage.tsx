import { useEffect, useState } from "react";

// defining a custom hook

const useLocalStorage = (storageKey) => {
  const [value, setValue] = useState(localStorage.getItem(storageKey) || "");

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [value, setValue]);

  return [value, setValue];
};

export default function FunctionComponent() {
  const [text, setText] = useLocalStorage("text");
}

// React server compoennts are executed on the server.
const ReactServerComponent = async () => {
    const posts = await.db.query('SELECT * FROM posts');
}
