import { Menu as AntMenu } from "antd";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";

const Menu = () => {
    const router = useRouter();
    const route = router.route;
    const menuItems = useMemo(
        () => [
            {
                id: "books",
                name: "Books",
                url: "/",
            },
            {
                id: "shelves",
                name: "Shelves",
                url: "/shelves",
            },
        ],
        [],
    );

    const menuItemsMap = useMemo(() => Object.fromEntries(menuItems.map((item) => [item.id, item])), [menuItems]);
    const currentItem = useMemo(() => {
        return menuItems.find((item) => item.url === route)?.id;
    }, [menuItems, route]);

    const onSelect = useCallback(
        ({ key }) => {
            const item = menuItemsMap[key];
            if (item) {
                // noinspection JSIgnoredPromiseFromCall
                router.push(item.url);
            }
        },
        [menuItemsMap, router],
    );

    return (
        <AntMenu theme="dark" mode="horizontal" defaultSelectedKeys={[currentItem]} onSelect={onSelect}>
            {menuItems.map((item) => (
                <AntMenu.Item key={item.id}>{item.name}</AntMenu.Item>
            ))}
        </AntMenu>
    );
};

export default Menu;
