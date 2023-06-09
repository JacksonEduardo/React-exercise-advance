import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Hermes Bar - ${title}`;
  }, [title]);
};

export default useTitle;
