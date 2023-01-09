import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import cls from './ThemeSwitcher.module.scss'
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
       <Button
           className={classNames(cls.ThemeSwitcher, {}, [className])}
           onClick={toggleTheme}
           theme={ThemeButton.CLEAR}
       >
           {theme === Theme.DARK ? <DarkTheme/> : <LightTheme/>}
       </Button>
    );
};
