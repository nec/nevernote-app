import React from "react";

const Heart = ({ color, breaking, width }) => {
  const style = {
    marginRight: "0.8ch"
  };

  return (
    <svg
      style={style}
      width={width}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {breaking ? (
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 10.8801C29.9781 6.38254 26.3375 2.74199 21.84 2.7201C20.4487 2.71673 19.104 3.06801 17.9188 3.71316L16.2857 8L19 11.5C18.0297 12.4879 16.9026 13.7732 15.8679 15L16.5 18.5L13.9683 15.1882C14.3926 14.0423 14.8511 12.862 15.2381 12L11.5 8L12.4131 3.89117C11.1507 3.12563 9.68272 2.70822 8.16003 2.7201C3.65333 2.7201 0 6.3735 0 10.8801C0 19.0001 15 27.2801 15 27.2801C15 27.2801 30 19.1201 30 10.8801Z"
        />
      ) : (
        <path
          fill={color}
          d="M21.84 2.7201C26.3375 2.74199 29.9781 6.38254 30 10.8801C30 19.1201 15 27.2801 15 27.2801C15 27.2801 0 19.0001 0 10.8801C0 6.3735 3.65333 2.7201 8.16003 2.7201C10.9187 2.69858 13.4978 4.08612 15 6.40007C16.5125 4.09738 19.085 2.71343 21.84 2.7201Z"
        />
      )}
    </svg>
  );
};

export default Heart;
