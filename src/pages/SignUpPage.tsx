import { Card, Input, Button, Typography, Space } from "antd";
import { useAuth } from "../hooks/useAuth";

const { Title, Text } = Typography;

interface SignUpPageProps {
  onSignUp?: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = () => {
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
 
 return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Card
        style={{ width: 360, textAlign: "center" }}
        title={<Title level={3}>{user ? "Account" : "Sign Up"}</Title>}
      >
        {user ? (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Text>Welcome, {playerName || "Player"}!</Text>
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
              onClick={signUp}
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
