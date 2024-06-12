import React from "react";

const TimelineComponent = ({ title, content, time }) => {
  return (
    <div className={`mt-2 relative`}>
      <div
        className="bg-red-400 z-10 w-[25px] h-[25px] absolute left-1/2 transform -translate-x-1/2"
        style={{ borderRadius: "50px" }}
      ></div>
      <div className="w-[100%] h-[10px] bg-lime-600 absolute top-2 my-auto z-0npm start
      "></div>
      <p className="mx-auto text-center mt-7 mx-2">{time}</p>
      <div>
        <h4 className="text-center font-bold mt-2">{title}</h4>
        <p className="text-center mt-4">{content}</p>
      </div>
    </div>
  );
};

export default TimelineComponent;
