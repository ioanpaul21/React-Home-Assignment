import React, { useEffect, useState } from "react";
import Card, { CardProps } from "../Card/Card";
import { SlideshowContainer } from "./styles";
import { Button } from "../Button/Button";

interface SlideshowProps {
  cards: CardProps[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ cards, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isRunning, setIsRunning] = useState(true); // State to track if slideshow is running

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    // Start the slideshow when isRunning is true
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, interval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, cards.length, interval]);

  return (
    <SlideshowContainer>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            display: currentIndex === index ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <Card {...card} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "30px",
            }}
          >
            <Button
              onClick={() => setIsRunning(false)}
              ariaLabel="Stop"
              variant="secondary"
              disabled={!isRunning}
            >
              Stop
            </Button>
            <div className="index-users">{index + 1}</div>
            <Button
              onClick={() => setIsRunning(true)}
              ariaLabel="Start"
              variant="primary"
              disabled={isRunning}
            >
              Start
            </Button>
          </div>
        </div>
      ))}
    </SlideshowContainer>
  );
};

export default Slideshow;
