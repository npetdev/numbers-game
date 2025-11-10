import { Card, Input, Button, Typography, Space } from "antd";
import { useAuth } from "../hooks/useAuth";

const { Title, Text } = Typography;

interface LogInPageProps {
  onLogin?: () => void;
}

const LogInPage: React.FC<LogInPageProps> = () => {
  const {
    user,
    email,
    setEmail,
    password,
    setPassword,
    playerName,
    login,
    logout,
  } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <Card
        style={{ width: 360, textAlign: "center" }}
        title={<Title level={3}>{user ? "Welcome" : "Login"}</Title>}
      >
        {user ? (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Text>
              Hello, <strong>{playerName || "Player"}</strong>!
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
            <Button type="primary" block onClick={login}>
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
