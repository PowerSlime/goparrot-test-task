import { Select } from "antd";
import PropTypes from "prop-types";
import React from "react";

const ShelveCategory = ({ value, items, onChange }) => {
    return (
        <Select value={value} placeholder="Shelve category" allowClear onChange={onChange}>
            {items.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                    {item.name}
                </Select.Option>
            ))}
        </Select>
    );
};

ShelveCategory.propTypes = {
    value: PropTypes.number,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
    ),
    onChange: PropTypes.func,
};

ShelveCategory.defaultProps = {
    value: undefined,
    items: [],
    onChange: () => undefined,
};

export default ShelveCategory;
