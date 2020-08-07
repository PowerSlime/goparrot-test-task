import React, { useCallback, useState } from "react";

export const ThemeContext = React.createContext({ isDark: false, toggle: () => undefined });

// eslint-disable-next-line
const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggle = useCallback(() => setIsDark(!isDark), [isDark]);

    return (
        <ThemeContext.Provider
            value={{
                isDark,
                toggle,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
