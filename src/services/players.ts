import { supabase } from "../supabaseClient";

export type PlayerRow = {
  id: number;
  player_name: string | null;
  score: number | null;
  user_id: string | null;
  email: string | null;
  created_at: string;
};

// ✅ Fetch all players
export const getPlayers = async () => {
  const { data, error } = await supabase
    .from("players")
    .select("id, player_name, score, user_id, email, created_at")
    .order("score", { ascending: true });

  if (error) throw error;
  return data as PlayerRow[];
};

// ✅ Add new player
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

// ✅ Update player's score
export const updatePlayerScore = async (userId: string, score: number) => {
  const { data, error } = await supabase
    .from("players")
    .update({ score })
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};

// ✅ Check if a player name already exists
export const checkPlayerNameExists = async (playerName: string) => {
  const { data, error } = await supabase
    .from("players")
    .select("id")
    .eq("player_name", playerName)
    .maybeSingle();

  if (error) {
    console.error("Error checking player name:", error.message);
    throw new Error("Failed to check player name.");
  }

  return !!data; // true if player name exists, false otherwise
};
