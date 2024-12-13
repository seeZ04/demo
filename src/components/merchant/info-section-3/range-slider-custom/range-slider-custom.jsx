import React, { useState, useEffect } from "react";
import "./range-slider-custom.css";

const MoneyRangeSlider = ({ min = 10000000, max = 100000000, step = 1000000, value, onChange }) => {
    const [range, setRange] = useState({
        minValue: min,
        maxValue: value || max,
    });

    useEffect(() => {
        if (value) {
            setRange((prev) => ({ ...prev, maxValue: value }));
        }
    }, [value]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newRange = {
            ...range,
            [name]: Number(value),
        };
        setRange(newRange);

        // Notify the parent with the updated range
        if (onChange) {
            onChange(newRange.maxValue);
        }
    };

    return (
        <div className="money-range-slider">
            <div className="slider-header">
                <label>Số tiền vay</label>
                <div className="range-values">
                    <span>{`${range.maxValue.toLocaleString()}`}đ</span>
                </div>
            </div>

            {/* Slider Track and Input */}
            <div className="slider-container">
                {/* Track with dynamic gradient */}
                <div
                    className="slider-track"
                    style={{
                        background: `linear-gradient(to right, 
                            #CCEDF9 ${((range.minValue - min) / (max - min)) * 100}%, 
                            #00A3E0 ${((range.minValue - min) / (max - min)) * 100}%, 
                            #00A3E0 ${((range.maxValue - min) / (max - min)) * 100}%, 
                            #CCEDF9 ${((range.maxValue - min) / (max - min)) * 100}%)`,
                    }}
                ></div>

                {/* Maximum Range Slider */}
                <input
                    type="range"
                    name="maxValue"
                    min={min}
                    max={max}
                    step={step}
                    value={range.maxValue}
                    onChange={handleChange}
                    className="slider slider-max"
                />
            </div>

            <div className="slider-footer">
                <span>{`${min.toLocaleString()}`}đ</span>
                <span>{`${max.toLocaleString()}`}đ</span>
            </div>
        </div>
    );
};

export default MoneyRangeSlider;