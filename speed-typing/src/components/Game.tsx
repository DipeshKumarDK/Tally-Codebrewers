import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "../styles/Game.module.scss";
import { GameStateContext, socket } from "../pages/MainLobby";
import { SocketRequestType } from "../type/SocketRequestType";
import ProgressInfoContainer from "./ProgressInfoContainer";
import Road from "./Road";
import WinInfo from "./WinInfo";
import useEngine from "../hooks/useEngine";
import Results from "../components/Results";
import { calculateAccuracyPercentage } from "../utils/helpers";
import { useSelector } from "react-redux";

const PLAYER_COLORS = ["#74B9FF", "#83A868", "#FCAC6F", "#DF4A70"];

const Game: React.FC = () => {
  const gameState = useContext(GameStateContext);

  const { typed, timeLeft, errors, state, restart, totalTyped } = useEngine();

  const [countdown, setCountdown] = useState<number>(-1);

  useEffect(() => {
    let temp = totalTyped - 1;
    socket.emit(SocketRequestType.GAME_UPDATE, temp);
  }, [totalTyped]);

  useEffect(() => {
    if (
      !gameState?.gameStartTime ||
      Date.now() >= (gameState.gameStartTime ?? 0)
    ) {
      setCountdown(-1);
      return;
    }

    setCountdown(Math.floor((gameState.gameStartTime - Date.now()) / 1000));

    const interval = setInterval(() => {
      setCountdown(Math.floor((gameState.gameStartTime - Date.now()) / 1000));

      if (Date.now() >= gameState.gameStartTime) {
        setCountdown(-1);
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [gameState?.gameStartTime]);

  if (!gameState) return <></>;

  return (
    <main className={styles.game}>
      {countdown >= 0 && (
        <div className={styles.countdownWrapper}>
          <div className={styles.countdownOverlay} />
          <div className={styles.countdown}>
            <h1 key={countdown}>{countdown === 0 ? "GO" : countdown}</h1>
          </div>
        </div>
      )}

      {countdown === -1 ? (
        <div className={styles.typingSpace}>
          <ProgressInfoContainer words={gameState.text} typed={typed} />
        </div>
      ) : null}

      <div className={styles.playerSpace}>
        {gameState.players.map((player, index) => (
          <Road
            key={player.socketId}
            username={player.username}
            speed={player.typingSpeed}
            progress={Math.floor(
              (player.currentTextPosition * 100) / gameState.text.length
            )}
            color={PLAYER_COLORS[index % PLAYER_COLORS.length]}
            carIndex={player.carIndex}
          />
        ))}
      </div>

      {gameState.isFinished && <WinInfo />}
    </main>
  );
};

export default Game;
