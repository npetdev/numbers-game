import { useState } from "react";
import { initNumbers } from "../utils/initNumbers";
import type { NumbersProps } from "../types/appTypes";
import { updatePlayerScore } from "../services/players";
import { useAuth } from "./useAuth";
export const useGame = () => {
  const [numbers, setNumbers] = useState<NumbersProps>(initNumbers);
  const [score, setScore] = useState(0);
  const [heldNumber, setHeldNumber] = useState(0);
  const { user } = useAuth();
  const rollNumber = () => {
    if (!heldNumber) return;
    setNumbers((prev) =>
      prev.map((item) =>
        !item.hold ? { ...item, num: Math.ceil(Math.random() * 6) } : item
      )
    );
    numbers.every((item) => item.hold)
      ? setScore((prev) => prev)
      : setScore((prev) => prev + 1);
  };

  const setHoldTrue = (id: number) => {
    if (numbers.some((number) => typeof number.num === "string")) return;
    setNumbers((prev) =>
      prev.map((item) =>
        item.id === id && heldNumber === item.num
          ? { ...item, hold: true }
          : item
      )
    );
    // update score in supabase if all numbers are held
   const allHeld = numbers.every((item) =>
      item.id === id && heldNumber === item.num ? true : item.hold
    );  
if (allHeld && user) {
      updatePlayerScore(user.id, score);
    } 
  };

  const resetGame = () => {
    setNumbers(initNumbers);
    setHeldNumber(0);
    setScore(0);
  };

  const setNumber = (number: number) => setHeldNumber(number);

  return {
    numbers,
    score,
    heldNumber,
    rollNumber,
    setHoldTrue,
    resetGame,
    setNumber,
    setNumbers,
    setScore,
  };
};
