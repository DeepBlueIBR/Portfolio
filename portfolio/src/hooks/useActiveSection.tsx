import { useEffect, useState } from "react";

export default function useActiveSection (selectionIds: string[], threshold = 0.5) {

  const [active, setActive] = useState(selectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] =[];

    selectionIds.forEach((id) => {
      const target = document.getElementById(id);
      if (!target) return ;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActive(id);
          }
        },{
          threshold: 0.5,
        }
      );
      observer.observe(target);
      observers.push(observer);
    });
    return() => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [selectionIds, threshold]);

  return active;
}
