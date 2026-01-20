"use client"
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Avatar to isolate it from server
const Avatar = dynamic(() => import("./components/Avatar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <Avatar />
    </main>
  );
}
