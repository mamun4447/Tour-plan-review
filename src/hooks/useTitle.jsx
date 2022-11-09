import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-TourPlan`;
  }, [title]);
};

export default useTitle;
