const CountDown = ({ timeleft }: { timeleft: number }) => {
    return (
      <div
        className="text-slate-500 text-center text-xl font-semibold"
      >
        {timeleft}
      </div>
    );
  };
  
  export default CountDown;