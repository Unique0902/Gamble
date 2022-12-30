const reinforceSword = (sword) => {
  if (!sword.isDestroyed) {
    if (Math.random() * 100 < 100 - 5 * sword.level) {
      return { ...sword, level: sword.level + 1 };
    } else {
      return { ...sword, isDestroyed: true };
    }
  } else {
    return sword;
  }
};

export { reinforceSword };
