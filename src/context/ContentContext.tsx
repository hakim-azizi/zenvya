// contexts/ContentContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

import type { ContentType } from "../utils/Type";

// eslint-disable-next-line react-refresh/only-export-components
export const ContentContext = createContext<ContentType | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentType | null>(null);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL;

    Promise.all([
      fetch(`${baseUrl}/array/recommendations.json`).then((res) => res.json()),
      fetch(`${baseUrl}/array/information.json`).then((res) => res.json()),
      fetch(`${baseUrl}/array/points-to-consider.json`).then((res) =>
        res.json(),
      ),
    ])
      .then(([recommendations, information, pointsToConsider]) => {
        setContent({ recommendations, information, pointsToConsider });
      })
      .catch((error) => console.error(error));
  }, []);

  if (!content) {
    return <img src="../images/loader.gif" alt="Chargement..." />;
  }

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider.");
  }
  return context;
}
