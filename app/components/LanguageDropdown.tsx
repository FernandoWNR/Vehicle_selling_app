"use client";

import Select from "react-select";
import { FiGlobe } from "react-icons/fi";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "sin", label: "Sinhala" },
];

const LanguageDropdown: React.FC = () => {
  return (
    <div className="language-dropdown">
      <Select
        options={languageOptions}
        defaultValue={languageOptions[0]}
        className="language-select"
      />
      <FiGlobe className="language-icon" />
    </div>
  );
};

export default LanguageDropdown;
