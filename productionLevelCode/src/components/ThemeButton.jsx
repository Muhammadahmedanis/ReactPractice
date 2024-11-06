import React from 'react';
import { Switch } from 'antd';
import useTheme from '../context/ThemeContext';
function ThemeButton () {
    const { theme, lightThemeMode, darkThemeMode } = useTheme();
    const onChange = (checked) => {
        if(checked){
            darkThemeMode()
        }else {
            lightThemeMode()
        }
    }
    return(
        <Switch onChange={onChange} checked={ theme === 'dark'} />
    )
} 
    
export default ThemeButton;