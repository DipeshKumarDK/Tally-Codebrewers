import React, { useState, useEffect } from "react";
import GeneratedWords from "../components/GeneratedWords";
import RestartButton from "../components/RestartButton";
import Results from "../components/Results";
import UserTypings from "../components/UserTypings";
import useEngine from "../hooks/useEngine";
import { calculateAccuracyPercentage } from "../utils/helpers";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { changeDifficultySolo, changeDuration, changeSearchId } from "../actions/index";


const Solo = () => {
  const { words, typed, errors, state, restart, totalTyped } = useEngine();

  const [allWords, setAllWords] = useState(words);

  const duration = useSelector((state: any) => state.changeDuration);
  const difficulty = useSelector((state: any) => state.changeDifficultySolo);

  useEffect(() => {
    setAllWords(words);
  }, [difficulty, words]);

  useEffect(() => {
    console.log("Words changed");
  }, [words]);

  const dispatch = useDispatch();

  var user = useSelector((state: any) => state.changeUser);

  useEffect(() => {
    dispatch(changeSearchId(user?.userid))
  }, [])
  

  return (
    <div className="lg:w-3/4 pt-[50px] pb-[30px] solo">
      <CountdownTimer timeLeft={duration} />

      <section className="flex w-full mt-8">
        <div className="sm:mt-0 mt-4" style={{ position: "relative" }}>
          <h4 className="font-semibold text-sm mb-2">Duration</h4>
          <select
            name="duration"
            id="duration"
            className="w-[180px] cursor-pointer p-2 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
            onChange={(e) => dispatch(changeDuration(e.target.value))}
          >
            <option value="30">30 sec</option>
            <option value="60">60 sec</option>
          </select>
        </div>

        <div className="sm:ml-3 sm:mt-0 mt-4" style={{ position: "relative" }}>
          <h4 className="font-semibold text-sm mb-2">Difficulty</h4>
          <select
            name="duration"
            id="duration"
            className="w-[180px] cursor-pointer p-2 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200"
            onChange={(e) => dispatch(changeDifficultySolo(e.target.value))}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </section>

      <div className="border-2 border-slate-100 max-h-96 overflow-y-scroll p-8">
        <WordsContainer>
          <GeneratedWords key={allWords} words={allWords} />
          {/* User typed characters will be overlayed over the generated words */}
          <UserTypings
            className="absolute inset-0"
            words={allWords}
            userInput={typed}
          />
        </WordsContainer>
      </div>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl leading-relaxed break-all mt-3 ">
      {children}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  const dispatch = useDispatch();
  const { totalTyped } = useEngine();

  // Reduce time timer by 1 second every second until it reaches 0 ans start the timer only when the total typed characters becomes > 0 for the first time
  useEffect(() => {
    if (totalTyped > 0 && timeLeft > 0) {
      const interval = setInterval(() => {
        dispatch(changeDuration(timeLeft - 1));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [timeLeft, totalTyped]);

  return (
    <h2 className="text-primary-400 font-medium text-center text-lg">
      Time: {timeLeft} sec
    </h2>
  );
};

export default Solo;
