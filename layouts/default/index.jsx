import { Layout } from "antd";
import cn from "classnames";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import ThemeSwitcher from "../../components/ThemeSwitcher";
import Menu from "../../containers/Menu";
import { toggleTheme } from "../../redux/actions";
import { getTheme } from "../../redux/selectors";
import styles from "./styles.module.sass";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    const { isDark } = useSelector(getTheme, shallowEqual);
    const dispatch = useDispatch();

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

    const onThemeSwitcherClick = useCallback(() => dispatch(toggleTheme()), [dispatch]);

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
