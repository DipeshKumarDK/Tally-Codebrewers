import React , {useState , useEffect} from "react";
import GeneratedWords from "../components/GeneratedWords";
import RestartButton from "../components/RestartButton";
import Results from "../components/Results";
import UserTypings from "../components/UserTypings";
import useEngine from "../hooks/useEngine";
import { calculateAccuracyPercentage } from "../utils/helpers";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeDuration } from "../actions/index";

const Solo = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();

  const [sorts, setSorts] = useState(0);
  const [filters, setFilters] = useState(0);
  const [duration, setDuration] = useState(30)
  const [diff, setDiff] = useState("easy")
  const [allWords, setAllWords] = useState(words)

  const changeFilters = () => {
    if(filters === 0){
        setFilters(1)
    }else{
        setFilters(0);
    }
  }

  const changeSorts = () => {
    if(sorts === 0){
        setSorts(1)
    }else{
        setSorts(0);
    }
  }


  useEffect(() => {
    if(diff === "easy"){
     setAllWords(words.toLowerCase())
    }else{
        setAllWords(words)
    }
  }, [diff])


  const dispatch = useDispatch();
  
  dispatch(changeDuration(duration));


  return (
    <div className="lg:w-3/4 pt-[50px] pb-[30px] solo">
      <CountdownTimer timeLeft={timeLeft+30} />


      <section className="flex w-full mt-8">
      <div className="sm:mt-0 mt-4" style={{position: 'relative'}}>
            <h4 className="font-semibold text-sm mb-2">Duration</h4>
            <div onClick={changeSorts} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">30 sec</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white text-slate-800 border-[1px] border-slate-200 ${
              sorts === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "80px" }}
          >
            <h3 onClick={()=>setDuration(30)} className="text-sm pt-1 pb-1 pl-2 pr-2 cursor-pointer hover:bg-blue-600 hover:text-white">
              30 sec
            </h3>
            <h3 onClick={()=>setDuration(60)} className="text-sm pt-1 pb-1 pl-2 pr- cursor-pointer hover:bg-blue-600 hover:text-white">
              60 sec
            </h3>
          </div>
          </div>

          <div className="sm:ml-3 sm:mt-0 mt-4" style={{position: 'relative'}}>
            <h4 className="font-semibold text-sm mb-2">Difficulty</h4>
            <div onClick={changeFilters} className="w-[180px] cursor-pointer pt-4 pb-4 pl-3 pr-3 bg-[#051b24] text-white flex justify-between border-[1px] border-slate-200">
              <h3 className="text-slate-300">Easy</h3>
              <RiArrowDropDownLine className="h-6 w-6 text-white bg-[#051b24] ml-2" />
            </div>
            <div
            className={`w-[180px] bg-white text-slate-800 border-[1px] border-slate-200 ${
              filters === 1 ? "" : "hidden"
            }`}
            style={{ position: "absolute", top: "80px" }}
          >
            <h3 onClick={()=>setDiff("easy")} className="text-sm pt-1 pb-1 pl-2 pr-2 cursor-pointer hover:bg-blue-600 hover:text-white">
              Easy
            </h3>
            <h3 onClick={()=>setDiff("difficult")} className="text-sm pt-1 pb-1 pl-2 pr- cursor-pointer hover:bg-blue-600 hover:text-white">
              Hard
            </h3>
          </div>
          </div>
      </section>
 


      <div className="border-[2px] border-slate-100 max-h-[400px] overflow-y-scroll scrollbar pl-[50px] pr-[50px] pt-[50px] pb-[50px] mt-[20px]">
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
  return <h2 className="text-primary-400 font-medium text-center text-lg">Time: {timeLeft}</h2>;
};

export default Solo;