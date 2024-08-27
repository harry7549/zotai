'use client'
import React from "react";
import cx from "classnames";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import "./style.css";

const darkModeAtom = atomWithStorage("darkMode", false);
const colorAtom = atomWithStorage("color", "gray");

const App = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [color, setColor] = useAtom(colorAtom);

  console.log("darkMode: ", darkMode, "color: ", color);

  const buttonClasses = cx(
    darkMode ? "bg-black text-white" : "bg-white text-black",
    "inline-flex flex-shrink-0 justify-center items-center w-12 sm:w-16 h-12 sm:h-16 rounded-full opacity-75 text-xs sm:text-sm transition duration-300 ease-in-out"
  );

  const codeBlockClasses = cx(
    darkMode ? "bg-black text-white" : "bg-white text-black",
    "block mt-4 p-4 rounded opacity-75 transition duration-300 ease-in-out"
  );

  return (
    <div
      className={cx(
        `bg-${color}-${darkMode ? "800" : "200"}`,
        `text-gray-${darkMode ? "200" : "800"}`,
        "flex w-full min-h-screen transition duration-300 ease-in-out"
      )}
    >
      <div className="w-full max-w-screen p-8 sm:p-16 text-sm">
        <div className="flex items-center space-x-4">
          <button onClick={() => setColor("gray")} className={buttonClasses}>
            gray
          </button>
          <button onClick={() => setColor("blue")} className={buttonClasses}>
            blue
          </button>
          <button onClick={() => setColor("purple")} className={buttonClasses}>
            purple
          </button>
          <button onClick={() => setColor(" ")} className={buttonClasses}>
            red
          </button>
          <span className="flex-grow" />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={buttonClasses}
          >
            {darkMode ? "light 🔥" : "dark 🌘"}
          </button>
        </div>
        <h1 className="mt-12 font-bold text-7xl tracking-tight">Jōtai</h1>
        <h2 className="flex justify-between items-center mt-2 opacity-50">
          <span className="text-base sm:text-lg">
            Primitive and flexible state management for React
          </span>
          <span className="hidden sm:inline text-xl whitespace-nowrap">
            状態
          </span>
        </h2>
        <p className="block mt-12 mb-1 leading-relaxed opacity-75">
          Jotai can preserve state between user sessions via{" "}
          <code>localStorage</code> or <code>sessionStorage</code> for React and{" "}
          <code>AsyncStorage</code> for React Native. Both client-side rendering
          and server-side rendering is suported.
        </p>
        <h2 className="mt-8 font-bold text-xl opacity-50">
          atomWithStorage API
        </h2>
        <p className="block my-1 opacity-75">
          Creating a persistent atom requires both a unique key string and an
          initial value.
        </p>
        <code className={codeBlockClasses}>
          const newAtom = atomWithStorage(key, initialValue)
        </code>
        <p className="block mt-4 mb-1 opacity-75">
          It can also take an optional, third parameter to select an alternative
          to the default storage mechanism, which uses localStorage for storage
          and JSON.stringify()/JSON.parse() for serialization/deserialization.
        </p>
        <code className={codeBlockClasses}>
          const newAtom = atomWithStorage(key, initialValue, storage)
        </code>
        <p className="block mt-4 mb-1 opacity-75">
          Either way you consume an <code>atomWithStorage</code> like any other
          atom.
        </p>
        <code className={codeBlockClasses}>
          const [state, setState] = useAtom(newAtom)
        </code>
        <p className="mt-4 opacity-75">
          Note: Referencing stored values within JSX markup will result in
          hydration errors that can be eliminated by using a custom{" "}
          <code>ClientOnly</code> wrapper.
        </p>
        <a
          href="https://jotai.pmnd.rs/"
          target="_blank" // eslint-disable-line
          className="block mt-4 mb-1 text-gray underline"
        >
          jotai.pmnd.rs
        </a>
      </div>
    </div>
  );
};

export default App;
