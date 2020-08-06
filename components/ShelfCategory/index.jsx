import { Select } from "antd";
import PropTypes from "prop-types";
import React from "react";

const ShelfCategory = ({ value, items, onChange }) => {
    return (
        <Select value={value} placeholder="Shelf category" allowClear onChange={onChange}>
            {items.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                    {item.name}
                </Select.Option>
            ))}
        </Select>
    );
};

ShelfCategory.propTypes = {
    value: PropTypes.number,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
    ),
    onChange: PropTypes.func,
};

ShelfCategory.defaultProps = {
    value: undefined,
    items: [],
    onChange: () => undefined,
};

export default ShelfCategory;
