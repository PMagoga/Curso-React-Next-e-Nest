export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completDate: number | null;
  interruptedDate: number | null;
  type: "worktime" | "shortBreakTime" | "longBreakTime";
};
