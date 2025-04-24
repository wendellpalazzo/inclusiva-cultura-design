import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { lenis } from "./lenis";

export function useSmoothScroll() {
  const location = useLocation();
  const navigate = useNavigate();


  function scrollToId(id: string) {

    const tryScroll = (retries = 10) => {
      const el = document.getElementById(id);
      console.log(retries, el)
      if (el) {

        lenis?.scrollTo(el, {
          offset: -80, // ajuste se tiver header fixo
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });

      } else if (retries > 0) {
        setTimeout(() => tryScroll(retries - 1), 200);
      }
    };

    tryScroll();
  }

  function goToHashFromAnyPage(id: string) {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      scrollToId(id);
    }
  }

  // sempre que mudar o hash, tenta scrollar
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) scrollToId(hash);
  }, [location.pathname]);

  return goToHashFromAnyPage;
}
