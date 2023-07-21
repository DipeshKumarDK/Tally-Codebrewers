import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";

const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className = "",
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}) => {
  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className={`w-full text-primary-400 space-y-3 ${className}`}
    >
      <motion.h2
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        className="text-xl font-semibold text-center"
      >
        Results
      </motion.h2>
      <div className="grid grid-cols-3 gap-[40px] mt-4 justify-between w-full ">
        <motion.h3
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="bg-slate-700 text-center pt-2 pb-2 rounded-md"
        >
          Accuracy: {formatPercentage(accuracyPercentage)}
        </motion.h3>
        <motion.h3
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 1 }}
          className="text-red-500 text-center bg-slate-700 pt-2 pb-2 rounded-md"
        >
          Errors: {errors}
        </motion.h3>
        <motion.h3
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 1.4 }}
          className="text-center  bg-slate-700 pt-2 pb-2 rounded-md"
        >
          Typed: {total}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default Results;
