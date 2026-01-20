"use client"; // enables React hooks & DOM access

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import React from "react";

const STATE_MACHINE = "State Machine 1";

export default function Avatar() {
  // Initialize Rive
  const { rive, RiveComponent } = useRive({
    src: "/avatar.riv",      // URL path to .riv file in /public
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  // Get state machine inputs
  const waveTrigger = useStateMachineInput(rive, STATE_MACHINE, "idle");
  const talkTrigger = useStateMachineInput(rive, STATE_MACHINE, "sad");
  const happyBool = useStateMachineInput(rive, STATE_MACHINE, "hover");
    const thinkingTrigger = useStateMachineInput(rive, STATE_MACHINE, "thinking");

  return (
    <div style={{ textAlign: "center" }}>
      <RiveComponent style={{ width: 300, height: 300 }} />

      <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={() => waveTrigger?.fire()}>Wave 👋</button>
        <button onClick={() => talkTrigger?.fire()}>Talk 🗣️</button>
        <button
          onClick={() => happyBool && (happyBool.value = !happyBool.value)}
        >
          Toggle Happy 😊
        </button>
      </div>
    </div>
  );
}
