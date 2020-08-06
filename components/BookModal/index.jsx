import { Button, Modal } from "antd";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useMemo, useState } from "react";

import { CategoriesContext } from "../../contexts/categories";

const BookModal = ({ value, onClose }) => {
    const categories = useContext(CategoriesContext);

    // To prevent blinking effect
    const [lastValue, setLastValue] = useState(value);
    useEffect(() => {
        if (value) {
            setLastValue(value);
        }
    }, [value]);

    const category = lastValue?.category;
    const categoryName = useMemo(() => categories.find((item) => item.id === category)?.name, [categories, category]);

    return (
        <Modal
            title={lastValue?.title}
            visible={value}
            onCancel={onClose}
            footer={[
                <Button key="close" onClick={onClose}>
                    Close
                </Button>,
            ]}
        >
            <p>
                <strong>Author</strong>: {lastValue?.author}
                <br />
                <strong>Title</strong>: {lastValue?.title}
                <br />
                <strong>Category</strong>: {categoryName}
                <br />
            </p>
            <div>{lastValue?.description}</div>
        </Modal>
    );
};

BookModal.propTypes = {
    value: PropTypes.shape({
        author: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.number,
        description: PropTypes.string,
    }),
    onClose: PropTypes.func,
};

BookModal.defaultProps = {
    value: null,
    onClose: () => undefined,
};

export default BookModal;
