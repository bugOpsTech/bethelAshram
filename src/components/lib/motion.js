export const popupVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.2, 0.9, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -6,
    transition: {
      duration: 0.22,
    },
  },
};

export const backdropVariants = {
    hidden: { opacity: 0, transition: { duration: 0.18 } },
    visible: { opacity: 1, transition: { duration: 0.18 }},
  }

export const panelVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.6},
    },
    exit: {
      x: "100%",
      transition: { duration: 0.18, ease: "easeInOut" },
    }
  };


