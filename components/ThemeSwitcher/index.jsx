import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PropTypes from "prop-types";
import React from "react";

const ThemeSwitcher = ({ isDark, onClick, ...props }) => {
    return (
        <Button ghost onClick={onClick} {...props}>
            {isDark ? <BulbFilled /> : <BulbOutlined />}
        </Button>
    );
};

ThemeSwitcher.propTypes = {
    isDark: PropTypes.bool,
    onClick: PropTypes.func,
};

ThemeSwitcher.defaultProps = {
    isDark: false,
    onClick: () => undefined,
};

export default ThemeSwitcher;
