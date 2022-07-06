import { useState } from "react";

const Progress = () => {
  const [activeRound, setActiveRound] = useState(1);
  const [lineWidth, setLineWidth] = useState(0);
  const [prevBtndis, setPrevBtndis] = useState(true);
  const [nextBtndis, setNextBtndis] = useState(false);
  const totalSteps = 5;

  const prevButton = () => {
    if (activeRound > 1) {
      setActiveRound(activeRound - 1);
      setNextBtndis(false);
      setLineWidth(lineWidth - 1);
    }

    if (activeRound === 2) {
      setPrevBtndis(true);
    }
  };

  const nextButton = () => {
    if (activeRound === totalSteps - 1) {
      setNextBtndis(true);
    }

    if (activeRound < totalSteps) {
      setActiveRound(activeRound + 1);
      setPrevBtndis(false);
      setLineWidth(lineWidth + 1);
    }
  };

  const getStepsNumbers = () => {
    const arr = [];
    for (let i = 1; i <= totalSteps; i++) {
      arr.push(
        <span className={i <= activeRound ? "active round" : "round"} key={i}>
          {i}
        </span>
      );
    }
    return arr;
  };

  return (
    <div className="con">
      <div className="bgline">
        <span className="line" style={{ width: `${25 * lineWidth}%` }}></span>
      </div>
      {getStepsNumbers()}
      <br />
      <button className="btn" onClick={prevButton} disabled={prevBtndis}>
        Prev
      </button>
      <button className="btn" onClick={nextButton} disabled={nextBtndis}>
        Next
      </button>
    </div>
  );
};

export default Progress;
