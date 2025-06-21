import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button/Button";
import { AppDispatch, RootState } from "../../../app/storeTypes";
import { reset } from "../model/scoreReducer";

import "./showTotalScoreUI.css";

const ShowTotalScoreUI = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { score } = useSelector((state: RootState) => state.score);
  const navigate = useNavigate();

  return (
    <div className="finish">
      <p className="finish__title">Game finished</p>
      <p className="finish__score">Score: {score} points</p>
      <Button
        className="finish__button-submit button__end"
        onClick={() => {
          dispatch(reset());
          navigate("/start");
        }}
        text="Play again"
      />
    </div>
  );
};

export default ShowTotalScoreUI;
