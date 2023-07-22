import React from "react";
import styles from "../styles/SelectBox.module.scss";

interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SelectBox: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.label}>{label}</div>
      <select
        className={`${styles.inputBox} capitalize`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="capitalize bg-gray-700"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
