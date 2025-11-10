import { useEffect, useState } from "react";
import { getPlayers } from "../services/players";
import type { PlayerRow } from "../services/players";
export default function BestScoresPage() {
  const [players, setPlayers] = useState<PlayerRow[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const data = await getPlayers();
        const noZeroScores = data.filter(player => player.score && player.score > 0);
        setPlayers(noZeroScores);
      
      } catch (error) {
        console.error("❌ Error fetching players:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);


  if (loading) return <p>Loading leaderboard...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>🏆 Best Player Scores</h1>

      {players.length === 0 ? (
        <p>No scores yet 😅</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {players.map((player, index) => (
            <li
              key={player.id}
              style={{
                background: index === 0 ? "#ffd700" : "#f3f3f3",
                margin: "8px 0",
                padding: "10px 15px",
                borderRadius: "6px",
              }}
            >
              #{index + 1} <strong>{player.player_name ?? "Unknown"}</strong> —{" "}
              {player.score ?? 0} pts
              <br />
              <small>
                {player.created_at
                  ? new Date(player.created_at).toLocaleString()
                  : "—"}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
