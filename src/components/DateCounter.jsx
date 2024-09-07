import React, { useState } from "react";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const decCount = () => {
    setCount((c) => c - step);
  };

  const incCount = () => {
    setCount((c) => c + step);
  };
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-lg p-8 text-center transition-transform duration-300 transform bg-white shadow-2xl rounded-2xl hover:scale-105">
        <h1 className="mb-6 text-3xl font-bold text-purple-700">
          Date Counter
        </h1>

        <div className="flex items-center justify-between mb-6">
          {/* Step Controller */}
          <div className="flex items-center space-x-4">
            <button
              //   onClick={decrementStep}
              className="flex items-center justify-center w-10 h-10 p-2 text-lg font-bold text-white transition duration-300 bg-red-400 rounded-full hover:bg-red-500"
              onClick={() => setStep((s) => s - 1)}
            >
              -
            </button>
            <span className="text-xl font-semibold text-gray-700">
              Step:{step}{" "}
            </span>
            <button
              //   onClick={incrementStep}
              className="flex items-center justify-center w-10 h-10 p-2 text-lg font-bold text-white transition duration-300 bg-green-400 rounded-full hover:bg-green-500"
              onClick={() => setStep((s) => s + 1)}
            >
              +
            </button>
          </div>

          {/* Count Controller */}
          <div className="flex items-center space-x-4">
            <button
              //   onClick={decrementCount}
              className="flex items-center justify-center w-10 h-10 p-2 text-lg font-bold text-white transition duration-300 bg-blue-400 rounded-full hover:bg-blue-500"
              onClick={decCount}
            >
              -
            </button>
            <span className="text-xl font-semibold text-gray-700">
              Count:{count}
            </span>
            <button
              //   onClick={incrementCount}
              className="flex items-center justify-center w-10 h-10 p-2 text-lg font-bold text-white transition duration-300 bg-blue-400 rounded-full hover:bg-blue-500"
              onClick={incCount}
            >
              +
            </button>
          </div>
        </div>

        <p className="mb-4 text-lg text-gray-600">
          {/* {count} days from today is{' '} */}
          <span className="font-semibold text-gray-800">
            {count === 0
              ? "Today is "
              : count > 0
              ? `${Math.abs(count)} days form today is `
              : `${count} days ago was`}
            <span className="font-semibold">{date.toDateString()}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default DateCounter;

