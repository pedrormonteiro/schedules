import { create } from "zustand";

export type LogType = {
  id: number;
  startTime: string;
  endTime: string;
  status: string;
  serverName: string;
  scheduleId: number;
};

interface LogState {
  logs: LogType[];
  selectedScheduleId?: number;
  fetch: (scheduleId: number, filterOption?: string) => Promise<void>;
}

const useLogs = create<LogState>()((set, get) => ({
  logs: [],
  fetch: async (scheduleId, filterOption) => {
    try {
      if (filterOption && filterOption.length > 0 && filterOption !== "all") {
        const response = await fetch(
          `http://localhost:3000/scheduleLogs?scheduleId=${
            get().selectedScheduleId
          }&status_like=${filterOption}`
        );
        set({ selectedScheduleId: scheduleId });
        set({ logs: await response.json() });
      } else {
        const response = await fetch(
          `http://localhost:3000/scheduleLogs?scheduleId=${scheduleId}`
        );
        set({ selectedScheduleId: scheduleId });
        set({ logs: await response.json() });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));

export default useLogs;
