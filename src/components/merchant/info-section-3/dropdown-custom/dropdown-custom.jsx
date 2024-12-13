import React, { useState, useRef, useEffect } from "react";
import "./dropdown-custom.css";

const CustomDropdown = ({ label, options = [], placeholder = "Select an option", onSelect, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered row index

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close the dropdown
        if (onSelect) {
            onSelect(option); // Pass the selected option to the parent component
        }
    };

    const dropdownRef = useRef(null);
    const dropdownListRef = useRef(null); // Ref for dropdown list
    const [dropdownStyles, setDropdownStyles] = useState({}); // Dynamic styles for dropdown

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false); // Close the dropdown if clicking outside
        }
    };

    const adjustDropdownPosition = () => {
        if (!dropdownListRef.current || !dropdownRef.current) return;
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const dropdownListRect = dropdownListRef.current.getBoundingClientRect();

        let styles = {};

        // Check if dropdown overflows the bottom of the viewport
        if (dropdownRect.bottom + dropdownListRect.height > window.innerHeight) {
            styles.top = `${-dropdownListRect.height}px`; // Position above the input
        } else {
            styles.top = `${dropdownRect.height}px`; // Position below the input
        }

        // Ensure the dropdown stays within the viewport horizontally
        if (dropdownRect.left + dropdownListRect.width > window.innerWidth) {
            styles.left = `${window.innerWidth - dropdownListRect.width - dropdownRect.left}px`;
        }

        setDropdownStyles(styles);
    };

    // Effect to handle dropdown open state and adjust position
    useEffect(() => {
        if (isOpen) {
            console.log("Dropdown is open. Adjusting position.");
            adjustDropdownPosition();
        }
    }, [isOpen]); // Run whenever `isOpen` changes

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        
        // Add event listener for window resize
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        window.addEventListener("resize", handleResize);

        // Prevent body scroll when popup is open
        if (isOpen && isMobile) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            // Cleanup event listener on unmount
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
            // Remove scroll lock
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            {/* Selected Option */}
            <div
                className={`dropdown-header ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="dropdown-text">
                    <label htmlFor="custom-dropdown" className="dropdown-label">
                        {label}
                    </label>
                    <span className={`selected-option ${selectedOption !== placeholder ? 'selected' : 'not-selected'}`}>
                        {selectedOption}
                    </span>
                </div>
                <div className="dropdown-arrow-container">
                    <span className="dropdown-arrow">&#9660;</span> {/* Down arrow */}
                </div>
                {/* Error Message */}
                {error && <p className="dropdown-error">{error}</p>}
            </div>

            {/* Dropdown Options */}
            {isOpen &&
                (isMobile ? (
                    <>
                        <div className="popup-overlay" onClick={() => setIsOpen(!isOpen)}></div>
                        <div className="dropdown-popup">
                            <div className="popup-header">
                                <label htmlFor="popup-label" className="popup-label">{label}</label>
                            </div>
                            <ul className="popup-list">
                                {options.map((option, index) => (
                                    <li
                                        key={index}
                                        className={`popup-option ${hoveredIndex === index ? "highlight" : ""}`}
                                        onClick={() => handleSelect(option)}
                                        onMouseEnter={() => setHoveredIndex(index)} // Highlight on hover
                                        onMouseLeave={() => setHoveredIndex(null)} // Remove highlight
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <ul className="dropdown-list"
                        ref={dropdownListRef}
                        style={{ position: "absolute", ...dropdownStyles }}
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`dropdown-option ${hoveredIndex === index ? "highlight" : ""
                                    }`}
                                onClick={() => handleSelect(option)}
                                onMouseEnter={() => setHoveredIndex(index)} // Highlight on hover
                                onMouseLeave={() => setHoveredIndex(null)} // Remove highlight
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                ))}
        </div>
    );

};

export default CustomDropdown;