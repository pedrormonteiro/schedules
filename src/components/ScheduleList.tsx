import { ScheduleType } from "@/hooks/useSchedules";
import { FC } from "react";
import ScheduleListItem from "./ScheduleListItem";
import useLogs from "@/hooks/useLogs";

type ScheduleListProps = {
  items: ScheduleType[];
  extended: boolean;
};

const ScheduleList: FC<ScheduleListProps> = ({ items, extended }) => {
  const { selectedScheduleId } = useLogs();

  return (
    <section
      className={`grid ${
        extended
          ? "gap-5 col-span-12 md:grid-cols-3 lg:grid-cols-4"
          : "gap-4 col-span-12 grid-cols-1 lg:col-span-3 lg:overflow-auto"
      }`}
    >
      {items
        .sort((a) => {
          if (selectedScheduleId === a.id) {
            return -1;
          }
          return 1;
        })
        .map((schedule) => (
          <ScheduleListItem
            key={schedule.id}
            selected={selectedScheduleId === schedule.id}
            {...schedule}
          />
        ))}
    </section>
  );
};

export default ScheduleList;
