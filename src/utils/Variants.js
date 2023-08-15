export const fadeInLeftVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
};

export const fadeInRightVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
};

export const fadeInTopVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
};

export const fadeInBottomVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
};

export const slideInLeft = {
  hidden: {
    x: '-100vh',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: .5,
    }
  },
  exit: {
    x: '-100vh',
    opacity: 0,

    transition: {
      type: 'tween',
      duration: .5,
    }
  }
};

export const slideInRight = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: .5,
    }
  },
  exit: {
    x: '-100vh',
    opacity: 0,

    transition: {
      type: 'tween',
      duration: .5,
    }
  }
};