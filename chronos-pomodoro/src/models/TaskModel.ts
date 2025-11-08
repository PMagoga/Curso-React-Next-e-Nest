export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: "workTime" | "shortBreakTime" | "longBreakTime";
};
