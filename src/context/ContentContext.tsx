import { createContext, useState, useEffect } from "react";

import type { ContextType } from "../utils/Type";

// eslint-disable-next-line react-refresh/only-export-components
export const ContentContext = createContext<ContextType[] | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContextType[]>([]);

  useEffect(() => {
    fetch(`https://zenvya.vercel.app/array/consulting.json`)
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  }, []);

  if (content.length === 0) {
    return <img src="../images/loader.gif" />;
  }

  const dataResult = content;

  return (
    <ContentContext.Provider value={dataResult}>
      {children}
    </ContentContext.Provider>
  );
}
