// components/LoginPage.tsx
import React, { useState } from "react";
import { Card, Input, Button, Typography, Space, message } from "antd";
import { useAuth } from "../hooks/useAuth";

const { Title, Text } = Typography;

const LogInPage: React.FC = () => {
  const {
    user,
    email,
    playerName,
    password,
    setEmail,
    setPassword,
    login,
    logout,
  } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password)
      return message.warning("Enter your email and password.");
    try {
      setLoading(true);
      await login();
      message.success("Login successful!");
    } catch (err) {
      console.error(err);
      message.error("Login failed.");
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
        background: "#fff",
      }}
    >
      <Card
        style={{ width: 360, textAlign: "center" }}
        title={
          <Title level={3} style={{ marginBottom: 0 }}>
            {user ? "Welcome" : "Login"}
          </Title>
        }
      >
        {user ? (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Text>
              Hello, <strong>{playerName || user.email || "Player"}</strong>!
            </Text>
            <Button danger block onClick={logout}>
              Logout
            </Button>
          </Space>
        ) : (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
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
              onClick={handleLogin}
            >
              Login
            </Button>
            <Text type="secondary">
              Enter your email and password to sign in.
            </Text>
          </Space>
        )}
      </Card>
    </div>
  );
};

export default LogInPage;
