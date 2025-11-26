"use client";

import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

interface HoverHighlightProps {
  children: React.ReactNode;
  color?: string;
  type?: "highlight" | "underline" | "box" | "circle" | "strike-through" | "crossed-off" | "bracket";
}

export function HoverHighlight({
  children,
  color = "rgba(167, 139, 250, 0.3)",
  type = "highlight",
}: HoverHighlightProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <RoughNotation type={type} show={show} color={color} animationDuration={650}>
        {children}
      </RoughNotation>
    </span>
  );
}
