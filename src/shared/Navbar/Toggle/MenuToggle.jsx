import React from "react";
import { motion } from "framer-motion";

// Path component for drawing SVG paths with animations
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--background)"
    strokeLinecap="round"
    {...props}
  />
);

// MenuToggle component to handle the open/close button
export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} style={{ background: "blue", border: "none", cursor: "pointer", padding: '12px' }}>
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        initial="closed"
        animate={toggle ? "open" : "closed"}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        opacity="1"
        className="middle"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        initial="closed"
        animate={toggle ? "open" : "closed"}
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        initial="closed"
        animate={toggle ? "open" : "closed"}
      />
    </svg>
  </button>
);
