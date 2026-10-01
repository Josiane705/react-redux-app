export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

export type CounterAction =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof RESET };