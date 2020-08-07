import { Layout } from "antd";
import cn from "classnames";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import ThemeSwitcher from "../../components/ThemeSwitcher";
import Menu from "../../containers/Menu";
import { ThemeContext } from "../../contexts/theme";
import styles from "./styles.module.sass";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    const { isDark, toggle } = useContext(ThemeContext);

    const headerElement = useRef(null);
    const [usedHeight, setUsedHeight] = useState(0);
    const layoutStyles = useMemo(
        () => ({
            "--used-height": `${usedHeight}px`,
        }),
        [usedHeight],
    );

    useEffect(() => {
        const height = parseInt(getComputedStyle(headerElement.current).height);
        setUsedHeight(height);
    }, [headerElement]);

    const onThemeSwitcherClick = useCallback(() => toggle(), [toggle]);

    return (
        <div className={cn({ "dark-theme": isDark })}>
            <Layout.Header>
                <div className={styles.Header} ref={headerElement}>
                    <Menu />
                    <div className={styles.ThemeSwitcher}>
                        <ThemeSwitcher isDark={isDark} onClick={onThemeSwitcherClick} />
                    </div>
                </div>
            </Layout.Header>
            <Layout className={styles.Layout} style={layoutStyles}>
                <div>
                    <Layout.Content className={cn(styles.Container, { [styles.Dark]: isDark })}>
                        {children}
                    </Layout.Content>
                </div>
            </Layout>
        </div>
    );
};

export default DefaultLayout;
