"use client";

import { FC, ReactNode, useState } from "react";
import LightModeIcon from "@/components/LightModeIcon";
import DarkModeIcon from "@/components/DarkModeIcon";
import SystemModeIcon from "@/components/SystemModeIcon";
import { ThemeOptionName } from "@/app/types";
import {
  getThemeOptionName,
  setThemeOptionName as setLsThemeOptionName,
} from "@/app/themeLs";
import Dropdown from "react-bootstrap/Dropdown";

const menuOptions: [ReactNode, string, ThemeOptionName][] = [
  [<LightModeIcon key="light" />, "Light", "light"],
  [<DarkModeIcon key="dark" />, "Dark", "dark"],
  [<SystemModeIcon key="system" />, "System", "system"],
];

const getThemeIcon: (theme: string) => ReactNode = (theme) => {
  switch (theme) {
    case "light": {
      return <LightModeIcon />;
    }
    case "dark": {
      return <DarkModeIcon />;
    }
    default:
      return <SystemModeIcon />;
  }
};

const DarkModeDropdown: FC = () => {
  const [theme, setTheme] = useState<ThemeOptionName>(getThemeOptionName());

  const getItemClickHandler: (theme: ThemeOptionName) => () => void = (theme) => () => {
    setTheme(theme);
    setLsThemeOptionName(theme);
    (
      window as Window & typeof globalThis & { syncTheme: () => void }
    ).syncTheme();
  };

  return (
    <Dropdown
      title="Choose color theme"
      className="nav-link"
      align="end"
    >
      <Dropdown.Toggle
        variant="link"
        className="nav-link"
        aria-label={`Toggle Theme (${theme})`}
      >
        {getThemeIcon(theme)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          menuOptions.map(([icon, label, value]) => (
            <Dropdown.Item key={value} active={theme === value} onClick={getItemClickHandler(value)}>
              {icon} {label}
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DarkModeDropdown;
