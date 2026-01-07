import { useEffect, useState, useCallback, useRef } from "react";

export default function useActiveSection(selectionIds: string[], threshold: number = 0.2) {
  const [active, setActive] = useState(selectionIds[0]);
  const [manualOverrideId, setManualOverrideId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleScrollUpdate = useCallback((id: string) => {
    if (!manualOverrideId) {
      setActive(id);
    }
  }, [manualOverrideId]);

  useEffect(() => {
    // Track which sections are currently intersecting
    const visibleSections = new Map<string, number>();

    // SINGLE observer for all sections (more efficient than multiple observers)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        // Find the most visible section
        if (visibleSections.size > 0) {
          let maxRatio = 0;
          let mostVisible = selectionIds[0];

          visibleSections.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              mostVisible = id;
            }
          });

          handleScrollUpdate(mostVisible);
        }
      },
      { threshold: [0, threshold, 0.5, 1] }
    );

    // Observe all sections with single observer
    selectionIds.forEach((id) => {
      const target = document.getElementById(id);
      if (target && observerRef.current) {
        observerRef.current.observe(target);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [selectionIds, threshold, handleScrollUpdate]);

  return [active, setActive, setManualOverrideId] as const;
}
