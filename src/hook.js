import { useState } from "react";

const defaultOptions = {
  name: "fade",
  duration: 1000,
  delay: 0,
  enter: true,
  fillMode: "forwards",
  timingFunction: "linear",
  playState: "running	",
  direction: "normal",
  count: "initial"
};

const useAnimate = (options = {}) => {
  const [animation, setAnimation] = useState({
    name: options.name || defaultOptions.name,
    duration: options.duration || defaultOptions.duration,
    delay: options.delay || defaultOptions.delay,
    fillMode: options.fillMode || defaultOptions.fillMode,
    timingFunction: options.timingFunction || defaultOptions.timingFunction,
    playState: options.playState || defaultOptions.playState,
    direction: options.direction || defaultOptions.direction,
    count: options.count || defaultOptions.count
  });
  const [enter, setEnter] = useState(options.enter || defaultOptions.enter);
  return {
    style: {
      animationName: `${animation.name}${enter ? "In" : "Out"}`,
      animationDuration: `${animation.duration}ms`,
      animationDelay: `${animation.delay}ms`,
      animationFillMode: animation.fillMode,
      animationTimingFunction: animation.timingFunction,
      animationPlayState: animation.playState,
      animationDirection: animation.direction,
      animationIterationCount: animation.count
    },
    setEnter: enter => setEnter(() => enter),
    enter,
    setOptions: newOptions => setAnimation(prev => ({ ...prev, ...newOptions }))
  };
};

export default useAnimate;
