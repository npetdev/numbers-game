import React, { useState } from "react";
import { Card, Input, Button, Typography, Space, message } from "antd";
import { useAuth } from "../hooks/useAuth";
import { addPlayer } from "../services/players";

const { Title, Text } = Typography;

const SignUpPage: React.FC<{ onSwitchToLogin?: () => void }> = () => {
  const {
    user,
    playerName,
    setPlayerName,
    email,
    setEmail,
    password,
    setPassword,
    signUp,
    logout,
  } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!playerName.trim())
      return message.warning("Please enter your player name.");

    try {
      setLoading(true);
      await signUp();

      setTimeout(async () => {
        if (user && user.id) {
          try {
            await addPlayer(user.id, playerName, email, 0);
            message.success("Account created successfully!");
          } catch (err) {
            console.error(err);
            message.error("Error saving player data.");
          }
        }
      }, 500);
    } catch (err) {
      console.error(err);
      message.error("Sign up failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Card
        style={{ width: 360, textAlign: "center" }}
        title={<Title level={3}>{user ? "Account" : "Sign Up"}</Title>}
      >
        {user ? (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Text>Welcome, {user.email || playerName || "Player"}!</Text>
            <Button danger block onClick={logout}>
              Logout
            </Button>
          </Space>
        ) : (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Input
              placeholder="Player name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="primary"
              block
              loading={loading}
              onClick={handleSignUp}
            >
              Create Account
            </Button>

            <Text type="secondary">
              Please enter your player name, email, and password to register.
            </Text>
          </Space>
        )}
      </Card>
    </div>
  );
};

export default SignUpPage;
