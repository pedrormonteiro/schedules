"use client";

import useLogs from "@/hooks/useLogs";
import useSchedules from "@/hooks/useSchedules";
import { useEffect } from "react";
import ScheduleList from "./ScheduleList";
import LogList from "./LogList";
import LogListFilter from "./LogListFilter";

const Schedules = () => {
  const { schedules, fetch } = useSchedules();
  const { logs, selectedScheduleId } = useLogs();

  useEffect(() => {
    fetch();
  }, []);

  if (schedules.length === 0 && !selectedScheduleId) {
    return (
      <main className="flex items-center h-screen justify-center">
        <section className="col-span-12">Oops, this is embarassing 😔</section>
      </main>
    );
  }

  return (
    <main
      className={`flex flex-col md:grid lg:grid-cols-12 gap-3 md:gap-4 lg:gap-5 ${
        selectedScheduleId && "md:max-h-screen lg:overflow-hidden"
      }`}
    >
      {schedules.length > 0 && (
        <ScheduleList items={schedules} extended={!selectedScheduleId} />
      )}
      {logs.length > 0 ? (
        <LogList items={logs} />
      ) : selectedScheduleId ? (
        <section className="col-span-12 lg:col-span-9 lg:overflow-auto">
          <LogListFilter />
          There are no logs with your current selected filter 😕
        </section>
      ) : null}
    </main>
  );
};

export default Schedules;
