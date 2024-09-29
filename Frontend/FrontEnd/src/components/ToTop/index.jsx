import React from "react";
import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function Index() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <div
        className="arrowTop"
        style={{ bottom: visible ? "2%" : "-10%" }}
        onClick={scrollToTop}
      >
        <ArrowCircleUpIcon />
      </div>
    </div>
  );
}
