import React from 'react';

const LoadingBar = () => {
    return (
       
              <div className="flex flex-col gap-2 items-center justify-center  bg-white">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-3/4 h-4 rounded-full bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 animate-shimmer bg-[length:200%_100%]"
          style={{
            animationDuration: "1.5s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        ></div>
      ))}

      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 100% 0;
            }
          }

          .animate-shimmer {
            animation-name: shimmer;
          }
        `}
      </style>
    </div>
        
    );
};

export default LoadingBar;