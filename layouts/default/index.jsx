import { Layout } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";

import Menu from "../../containers/Menu";
import styles from "./styles.module.sass";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
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

    return (
        <React.Fragment>
            <Layout.Header className="header">
                <div ref={headerElement}>
                    <Menu />
                </div>
            </Layout.Header>
            <Layout className={styles.Layout} style={layoutStyles}>
                <div>
                    <Layout.Content className={styles.Container}>{children}</Layout.Content>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default DefaultLayout;
