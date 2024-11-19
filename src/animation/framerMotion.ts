export const buttonVarriants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export const navbarVarriants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      delay: 0.5,
      ease: "linear",
    },
  },
};

export const h1Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      when: "beforeChildren",
    },
  },
};
