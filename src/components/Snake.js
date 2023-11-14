import React, { useEffect, useState } from "react";

const Snake = () => {
  const [gridColumn, setGridColumn] = useState(10);
  const [gridRow, setGridRow] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState("");
  console.log(gridRow);
  console.log(gameOver);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!gameOver) {
        switch (event.key) {
            case "ArrowUp":
              if (direction !== "DOWN") setDirection("UP");
              break;
            case "ArrowDown":
              if (direction !== "UP") setDirection("DOWN");
              break;
            case "ArrowLeft":
              if (direction !== "RIGHT") setDirection("LEFT");
              break;
            case "ArrowRight":
              if (direction !== "LEFT") setDirection("RIGHT");
              break;
            default:
              break;
          }
      }
    };

    const snakeAdvancement = () => {
      if (!gameOver) {
        switch (direction) {
          case "UP":
            setGridRow((prevGridRow) => prevGridRow - 1);
            break;
          case "DOWN":
            setGridRow((prevGridRow) => prevGridRow + 1);
            break;
          case "LEFT":
            setGridColumn((prevGridColumn) => prevGridColumn - 1);
            break;
          case "RIGHT":
            setGridColumn((prevGridColumn) => prevGridColumn + 1);
            break;
          default:
            break;
        }
      }
    };

    const colision = () => {
      if (gridRow < 1 || gridRow > 20 || gridColumn < 1 || gridColumn > 20) {
        setGameOver(true);
      }
    };

    const interval = setInterval(() => {
        snakeAdvancement();
        colision();
    }, 300)

    window.addEventListener("keydown", handleKeyPress);
    return () => {
        clearInterval(interval)
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gridColumn, gridRow, direction]);

  const restart = () => {
    setGridColumn(10);
    setGridRow(10);
    setDirection("")
    setGameOver(false);
  };

  return (
    <div className="snake" style={{ gridColumn, gridRow }}>
      {gameOver ? (
        <div className="gameover">
          <p>Game Over!</p>
          <button onClick={restart}>Recommencer</button>
        </div>
      ) : (
        <div className="body"></div>
      )}
    </div>
  );
};

export default Snake;
