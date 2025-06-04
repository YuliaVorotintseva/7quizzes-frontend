import React from "react";

import "./gameRules.css";
import Button from "../Button/Button";

const GameRules = () => (
  <div className="rules">
    <p className="rules__title">Game rules</p>
    <div className="rules__info">
      <p className="rules__info-topic">
        Players are simultaneously asked a question and given 30 seconds to
        answer. The answer is accepted by the player who first chose the answer
        option. There can be only one correct answer.
      </p>
      <p className="rules__info-topic">
        If the answer turned out to be correct, the answering player receives
        points, and the rest of the players do not receive anything, while they
        see the correct answer and the respondent. If the answer turned out to
        be incorrect, then the respondent does not receive an answer points and
        loses the opportunity to choose an option in this round, waiting for the
        others to answer.
      </p>
      <p className="rules__info-topic">
        The round ends when one of the players gives the correct answer or the
        time allotted for the answer in this round runs out. The game ends when
        the number of questions expires.
      </p>
    </div>
    <Button className="button__start" onClick={() => {}} text="Start" />
  </div>
);

export default GameRules;
