import { supabase } from "../supabaseClient";

export const addPlayer = async (
  user_id: string,
  player_name: string,
  email: string,
  score: number
) => {
  const { data, error } = await supabase
    .from("players")
    .insert([{ user_id, player_name, email, score }]);

  if (error) throw error;
  return data;
};

export const updatePlayerScore = async (userId: string, score: number) => {
  const { data, error } = await supabase
    .from("players")
    .update({ score })
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};
