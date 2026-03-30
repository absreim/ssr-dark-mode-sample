import { FC, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { themeOptionLabels } from "@/app/models";
import {
  getThemeOptionName,
  setThemeOptionName as setLsThemeOptionName,
} from "@/app/themeLs";
import { ThemeOptionName } from "@/app/types";

const ThemeSelector: FC = () => {
  const [themeOptionName, setThemeOptionName] = useState(getThemeOptionName());

  return (
    <ButtonGroup>
      {Object.keys(themeOptionLabels).map((name) => (
        <ToggleButton
          key={name}
          id={`radio-${name}`}
          type="radio"
          value={name}
          name="theme-selector"
          checked={themeOptionName === name}
          onChange={() => {
            setThemeOptionName(name as ThemeOptionName);
            setLsThemeOptionName(name as ThemeOptionName);
            document.cookie = `theme=${name as ThemeOptionName}; path=/; max-age=31536000`;
            (
              window as Window & typeof globalThis & { syncTheme: () => void }
            ).syncTheme();
          }}
          variant="outline-primary"
        >
          {themeOptionLabels[name as ThemeOptionName]}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ThemeSelector;
