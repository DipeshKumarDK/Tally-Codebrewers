import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

const generateWords = (count: number, difficulty: string) => {
  if (difficulty === "easy") {
    return faker.lorem.words(count).replace(/[^a-zA-Z ]/g, "");
  } else if (difficulty === "medium") {
    return faker.lorem.words(count).replace(/[^a-zA-Z ]/g, "");
  } else if (difficulty === "hard") {
    return faker.lorem.words(count).replace(/[^a-zA-Z0-9 ]/g, "");
  } else {
    return "";
  }
};

const useWords = (count: number, difficulty: string) => {
  const [words, setWords] = useState<string>(generateWords(count, difficulty));

  const updateWords = useCallback(() => {
    setWords(generateWords(count, difficulty));
  }, [count, difficulty]);

  return { words, updateWords };
};

export default useWords;
