"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import TiltLogo from "../../components/TiltLogo";

const DynamicTone = dynamic(() => import("../../components/ToneWrapper"), {
  ssr: false,
});

// Update the tones array with the new colors
const tones = [
  {
    frequency: 396,
    label: "Do",
    color: "#FF0000",
    description: "Liberating Guilt and Fear",
  },
  {
    frequency: 417,
    label: "Re",
    color: "#FF7F00",
    description: "Undoing Situations and Facilitating Change",
  },
  {
    frequency: 528,
    label: "Mi",
    color: "#FFFF00",
    description: "Transformation and Miracles (DNA Repair)",
  },
  {
    frequency: 639,
    label: "Fa",
    color: "#00FF00",
    description: "Connecting/Relationships",
  },
  {
    frequency: 741,
    label: "Sol",
    color: "#0000FF",
    description: "Awakening Intuition",
  },
  {
    frequency: 852,
    label: "La",
    color: "#4B0082",
    description: "Returning to Spiritual Order",
  },
  {
    frequency: 963,
    label: "Ti",
    color: "#9400D3",
    description: "Awakening Perfect State",
  },
];

const SimonSaysPage: React.FC = () => {
  const [toneLoaded, setToneLoaded] = useState(false);

  useEffect(() => {
    const loadTone = async () => {
      const { Tone } = await import("../../components/ToneWrapper");
      setToneLoaded(true);
    };
    loadTone();
  }, []);

  const [activeTone, setActiveTone] = useState<number | null>(null);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const [pressedTone, setPressedTone] = useState<number | null>(null);

  const [score, setScore] = useState<number>(0);
  const [highScores, setHighScores] = useState<
    Array<{ name: string; score: number }>
  >([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>("");

  useEffect(() => {
    fetchHighScores();
  }, []);

  const fetchHighScores = async () => {
    try {
      const response = await fetch("/api/simonsays");
      if (response.ok) {
        const scores = await response.json();
        setHighScores(scores);
      }
    } catch (error) {
      console.error("Failed to fetch high scores:", error);
    }
  };

  const saveScore = async () => {
    if (playerName) {
      try {
        const response = await fetch("/api/simonsays", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: playerName, score }),
        });

        if (response.ok) {
          await fetchHighScores(); // Refresh high scores after saving
        }
      } catch (error) {
        console.error("Failed to save score:", error);
      }
    }
    resetGame();
  };

  const resetGame = () => {
    setGameOver(false);
    setScore(0);
    setPlayerName("");
    setSequence([]);
    setUserSequence([]);
    setIsGameActive(false);
    setMessage("");
  };

  const startGame = () => {
    setIsGameActive(true);
    setSequence([Math.floor(Math.random() * tones.length)]);
    setUserSequence([]);
    setMessage("Repeat the sequence.");
  };

  // Function to play a tone
  const playTone = useCallback(
    async (frequency: number) => {
      if (toneLoaded) {
        const { Tone } = await import("../../components/ToneWrapper");
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(frequency, "8n");
      }
    },
    [toneLoaded]
  );

  // Update handleToneClick
  const handleToneClick = (index: number) => {
    playTone(tones[index].frequency);
    setPressedTone(index);
    setTimeout(() => setPressedTone(null), 300);

    if (isGameActive) {
      const newUserSequence = [...userSequence, index];
      setUserSequence(newUserSequence);

      // Check if the user's input matches the sequence
      if (sequence[newUserSequence.length - 1] !== index) {
        setMessage("Wrong Sequence! Game Over.");
        handleGameOver();
      } else {
        setScore((prevScore) => prevScore + 1); // Increment score with each correct click
        if (newUserSequence.length === sequence.length) {
          setMessage("Correct! Next Round.");
          setUserSequence([]);
          setTimeout(() => generateNextInSequence(), 1000);
        }
      }
    }
  };

  // Update generateNextInSequence
  const generateNextInSequence = () => {
    setSequence((prevSequence) => [
      ...prevSequence,
      Math.floor(Math.random() * tones.length),
    ]);
    // Remove score increment from here
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  useEffect(() => {
    if (sequence.length > 0) {
      // Play the sequence for the user
      const playSequence = async () => {
        for (let i = 0; i < sequence.length; i++) {
          setActiveTone(sequence[i]);
          playTone(tones[sequence[i]].frequency);
          await new Promise((res) => setTimeout(res, 800)); // Delay between tones
          setActiveTone(null);
          await new Promise((res) => setTimeout(res, 200)); // Delay before next tone
        }
      };

      playSequence();
    }
  }, [sequence, playTone]);

  const colorWord = "colors";
  const coloredLetters = colorWord.split("").map((letter, index) => (
    <span key={index} style={{ color: tones[index % tones.length].color }}>
      {letter}
    </span>
  ));

  return (
    <>
      <Header />
      <Navigation />
      <main className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold mb-2">
            Solfeggio Simon Says by{" "}
            <span className="relative group inline-block">
              <span className="relative z-10 leadership-class-text">
                Leadership Class
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
            </span>
          </h2>
          <p className="text-center text-2xl mb-8 text-gray-300">
            Test your memory and explore the healing frequencies of Solfeggio
            tones in this musical challenge! Click on the {coloredLetters} to
            play as an instrument or click Start Game and see if you can repeat
            Simon&apos;s musical pattern.
          </p>

          <div className="scoreboard mb-8 border-4 border-green-500 bg-green-900 p-4 font-pixelify text-green-300 text-2xl text-center">
            <div className="mb-2">High Scores:</div>
            {highScores.slice(0, 3).map((score, index) => (
              <div key={index}>
                {score.name} {score.score.toString().padStart(5, "0")}
              </div>
            ))}
            <div className="mt-2">
              Current Score: {score.toString().padStart(5, "0")}
            </div>
          </div>

          <div className="game-board mb-8 relative">
            <svg width="300" height="300" viewBox="0 0 100 100">
              {tones.map((tone, index) => {
                const sliceAngle = 360 / tones.length;
                const startAngle = index * sliceAngle - 90; // Start at the top
                const endAngle = startAngle + sliceAngle;
                const largeArcFlag = sliceAngle > 180 ? "1" : "0";
                const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);
                const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={tone.color}
                    stroke="#ffffff"
                    strokeWidth="0.5"
                    onClick={() => handleToneClick(index)}
                    style={{
                      cursor: "pointer",
                      opacity:
                        activeTone === index || pressedTone === index ? 1 : 0.7,
                      filter:
                        activeTone === index || pressedTone === index
                          ? "brightness(1.3)"
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                );
              })}
            </svg>

            {gameOver && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="game-over-modal border-4 border-green-500 bg-green-900 p-4 font-pixelify text-green-300 text-2xl">
                  <p className="mb-4">Game Over! Your score: {score}</p>
                  {score > highScores[0]?.score ? (
                    <p className="mb-4">New High Score! Enter your initials:</p>
                  ) : (
                    <p className="mb-4">Do you want to save your score?</p>
                  )}
                  <input
                    type="text"
                    maxLength={3}
                    value={playerName}
                    onChange={(e) =>
                      setPlayerName(e.target.value.toUpperCase())
                    }
                    placeholder="AAA"
                    className="bg-green-800 text-green-300 p-2 mb-4 w-full uppercase"
                  />
                  <div className="flex justify-center space-x-4">
                    <button onClick={saveScore} className="btn-retro">
                      Save Score
                    </button>
                    <button onClick={resetGame} className="btn-retro">
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="controls mb-8 text-center">
            <button
              onClick={startGame}
              disabled={isGameActive}
              className="btn-custom"
            >
              {isGameActive ? "Game in Progress" : "Start Game"}
            </button>
            <p className="text-lg mt-4">{message}</p>
          </div>
          <div className="key-description bg-muted p-6 rounded-lg shadow-lg max-w-2xl">
            <h3 className="text-2xl font-semibold text-custom-gold mb-4">
              Solfeggio Tones Description
            </h3>
            <ul className="space-y-2">
              {tones.map((tone, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: tone.color }}
                  ></div>
                  <span>
                    <strong>
                      {tone.label} ({tone.frequency} Hz):
                    </strong>{" "}
                    {tone.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
};

export default SimonSaysPage;
