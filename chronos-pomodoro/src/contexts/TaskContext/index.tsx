import * as React from "react";
import {createContext} from "react";
import type {TaskStateModel} from "../../models/TaskStateModel.ts";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
  state: initialState,
  setState: () => {
  },
}

export const TaskContext = createContext<TaskContextProps>({
  state: initialState,
  setState: () => {
  }
})

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProps) {
  return (
    <TaskContext.Provider value={{outraCoisa: 321}}>
      {children}
    </TaskContext.Provider>
  )
}