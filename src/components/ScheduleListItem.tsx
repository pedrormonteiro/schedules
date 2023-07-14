import useLogs from "@/hooks/useLogs";
import useSchedules, { ScheduleType } from "@/hooks/useSchedules";
import { MouseEvent } from "react";

interface ScheduleListProps extends ScheduleType {
  selected: boolean;
}
const ScheduleListItem = (props: ScheduleListProps) => {
  const { fetch, selectedScheduleId } = useLogs();
  const { retire, unretire } = useSchedules();

  const handleClick = async (event: MouseEvent) => {
    try {
      if ((event.target as HTMLElement).id === "control-retirement") {
        (event.target as HTMLElement).textContent === "Retire"
          ? await retire(props.id)
          : await unretire(props.id);
      }
      await fetch(props.id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      type="button"
      className={`flex flex-col bg-transparent border-2 rounded-md p-3 gap-2 shadow-lg ${
        props.selected
          ? "border-green-600 cursor-not-allowed hover:opacity-90"
          : "border-slate-700"
      } ${selectedScheduleId && "lg:mx-2"}`}
      onClick={(event) => handleClick(event)}
    >
      {props.selected && <span>Selected</span>}
      <span className="text-base text-left">
        {props.isRetired ? "❌" : "✅"} {props.name}
      </span>
      <span className="text-sm text-left">
        Description: {props.description}
      </span>
      <span className="text-sm text-left">Task count: {props.tasksCount}</span>
      <span className="text-sm text-left">
        Start date: {new Date(props.startDate).toDateString()}
      </span>
      <span className="text-sm text-left">
        End date: {new Date(props.endDate).toDateString()}
      </span>
      <span
        id="control-retirement"
        className="text-sm self-end border-slate-500 border-2 px-2 py-1 cursor-pointer"
        hidden={!selectedScheduleId}
      >
        {props.isRetired ? "Unretire" : "Retire"}
      </span>
    </button>
  );
};
export default ScheduleListItem;
