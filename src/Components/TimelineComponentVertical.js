import React from "react";

const TimelineComponentVertical = ({ title, content, time, left }) => {
  return (
    <>
      {left ? (
        <div className={`h-[220px] flex items-center justify-center`}>
          <div
            className="bg-red-400 z-10 w-[25px] h-[25px] absolute left-1/2 transform -translate-x-1/2"
            style={{ borderRadius: "50px" }}
          ></div>
          <div className="w-[10px] h-[220px] bg-lime-600 my-auto z-0 absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-full h-full flex items-center justify-end">
            <div className="w-1/2 p-1">
              <h4 className="text-center font-bold">{title}</h4>
              <p className="text-center">{time}</p>
              <p className="text-center">{content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`h-[220px] flex items-center justify-center`}>
          <div
            className="bg-red-400 z-10 w-[25px] h-[25px] absolute left-1/2 transform -translate-x-1/2"
            style={{ borderRadius: "50px" }}
          ></div>
          <div className="w-[10px] h-[220px] bg-lime-600 my-auto z-0 absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-full h-full flex items-center">
            <div className="w-1/2 p-1">
              <h4 className="text-center font-bold">{title}</h4>
              <p className="text-center">{time}</p>
              <p className="text-center">{content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimelineComponentVertical;
