import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { addPlayer, checkPlayerNameExists } from "../services/players";
import type { User } from "@supabase/supabase-js";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);

      if (data.session?.user) {
        await fetchPlayerName(data.session.user.id);
      }
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) fetchPlayerName(session.user.id);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const fetchPlayerName = async (userId: string) => {
    const { data, error } = await supabase
      .from("players")
      .select("player_name")
      .eq("user_id", userId)
      .single();

    if (!error && data?.player_name) {
      setPlayerName(data.player_name);
    }
  };

  const signUp = async () => {
    if (!email || !password || !playerName)
      return alert("Enter player name, email and password.");

    try {
      // Check if the player name exists (now handled by the helper)
      const nameExists = await checkPlayerNameExists(playerName);
      if (nameExists) {
        return alert(
          "That player name is already taken. Please choose another one."
        );
      }

      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) return alert(error.message);

      const newUser = data.user;
      if (newUser) {
        const { data: existingPlayer } = await supabase
          .from("players")
          .select("id")
          .eq("user_id", newUser.id)
          .maybeSingle();

        if (!existingPlayer) {
          await addPlayer(newUser.id, playerName, email, 0);
        }

        setUser(newUser);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const login = async () => {
    if (!email || !password) return alert("Enter email and password.");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return alert(error.message);

    setUser(data.user ?? null);

    if (data.user) {
      await fetchPlayerName(data.user.id);
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return alert(error.message);

    setUser(null);
    setEmail("");
    setPassword("");
    setPlayerName("");
  };

  return {
    user,
    email,
    setEmail,
    password,
    setPassword,
    playerName,
    setPlayerName,
    signUp,
    login,
    logout,
  };
};
