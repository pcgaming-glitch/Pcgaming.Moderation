"use client";

import LoginButton from "../components/LoginButton";
import SettingsButton from "../components/SettingsButton";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "60px 20px",
      position: "relative"
    }}>
      <SettingsButton />
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>
        PC Moderation Dashboard
      </h1>
      <LoginButton />
    </div>
  );
}
