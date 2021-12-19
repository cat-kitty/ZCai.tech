import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

//This is directly taken from the React website: https://v5.reactrouter.com/web/guides/scroll-restoration
//This makes all of the links scroll from the top when clicked
//Otherwise, without this, the website remains where it is scrolled to when a new link is clicked