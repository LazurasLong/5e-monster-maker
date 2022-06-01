export const DICE = {
  // ok this one exists for adding flat damage to attacks, if anyone asks
  d1: 1,
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
};

export const DICE_SELECT = Object.entries(DICE).map(([k, v]) => {
  return { text: k, value: v };
});

export default DICE;
