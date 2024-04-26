import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "glass", label: "Glass Revived" },
    { value: "plastic", label: "Plastic Renewed" },
    { value: "metal", label: "Metal Reborn" },
   
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
            backgroundColor: "#0f3460",
            color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({ setFilterList }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Initially show all products
        setFilterList(products);
    }, [setFilterList]);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (selectedOption && selectedOption.value !== "") {
            setFilterList(products.filter(item => item.category === selectedOption.value));
        } else {
            // If "All Products" or no category is selected, show all products
            setFilterList(products);
        }
    };

    return (
        <Select
            options={options}
            defaultValue={options[0]}
            styles={customStyles}
            value={selectedOption}
            onChange={handleChange}
            isClearable
        />
    );
};

export default FilterSelect;
