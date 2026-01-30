import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <nav
        aria-label="Sidebar"
        style={{
          minWidth: 200,
          background: "#F9FBFD",
          borderRight: "1px solid #EEE",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem"
        }}
      >
        <Link href="/(dashboard)">
          <span style={{ fontWeight: 600 }}>Dashboard Home</span>
        </Link>
        <Link href="/(dashboard)/activity">Activity</Link>
        <Link href="/(dashboard)/general">General</Link>
      </nav>
      <main style={{ flexGrow: 1, background: "#FFF" }}>{children}</main>
    </div>
  );
}