import { create } from "zustand";

export type ScheduleType = {
  id: number;
  name: string;
  description: string;
  isRetired: boolean;
  tasksCount: number;
  startPoint: string;
  endPoint: string;
  dayOfWeek: number;
  dayOfMonth: number;
  startDate: string;
  endDate: string;
  intervalType: string;
  timePeriod: number;
};

interface LogState {
  schedules: ScheduleType[];
  fetch: () => Promise<void>;
  retire: (scheduleId: number) => Promise<void>;
  unretire: (scheduleId: number) => Promise<void>;
}

const useSchedules = create<LogState>()((set, get) => ({
  schedules: [],
  fetch: async () => {
    try {
      const response = await fetch(`http://localhost:3000/schedules`);
      set({ schedules: await response.json() });
    } catch (error) {
      console.error("Error:", error);
    }
  },
  retire: async (scheduleId) => {
    try {
      await fetch(`http://localhost:3000/schedules/${scheduleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...get().schedules.find((schedule) => schedule.id === scheduleId),
          isRetired: true,
        }),
      });
      await get().fetch();
    } catch (error) {
      console.error("Error:", error);
    }
  },
  unretire: async (scheduleId) => {
    try {
      await fetch(`http://localhost:3000/schedules/${scheduleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...get().schedules.find((schedule) => schedule.id === scheduleId),
          isRetired: false,
        }),
      });
      await get().fetch();
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));

export default useSchedules;
