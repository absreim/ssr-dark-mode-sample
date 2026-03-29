"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

const ThemeSelector = dynamic(() => import("./ThemeSelector"), { ssr: false });

const ThemeSelectorContainer: FC = () => <ThemeSelector />;

export default ThemeSelectorContainer;
