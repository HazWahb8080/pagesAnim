import React, { createContext, useState } from "react";

type State = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export type SharedLayoutDataType = {
  contextValue: State;

  setValue: (values: State) => void;
  setCurrent: (value: string) => void;
  current: string;
};

export const SharedLayoutDataContext = createContext<SharedLayoutDataType>({
  contextValue: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
  setValue: () => {},
  setCurrent: () => {},
  current: "",
});

let initialState: State = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

type Props = {
  children: JSX.Element;
};
export default function SharedLayoutData({ children }: Props) {
  const [contextValue, setState] = useState(initialState);
  const [current, setCurrent] = useState("");
  return (
    <SharedLayoutDataContext.Provider
      value={{
        contextValue,
        setValue: setState,
        setCurrent,
        current,
      }}
    >
      {children}
    </SharedLayoutDataContext.Provider>
  );
}
