import useLogs from "@/hooks/useLogs";

const LogListFilter = () => {
  const { fetch, selectedScheduleId } = useLogs();
  return (
    <div className="flex justify-between gap-2 my-4">
      <p className="inline-block">Filter by:</p>
      <select
        className="bg-transparent"
        defaultValue="all"
        onChange={(event) =>
          fetch(selectedScheduleId as number, event.target.value)
        }
      >
        <option className="text-slate-800" value="all">
          All 📚
        </option>
        <option className="text-slate-800" value="pending">
          Pending 🕜
        </option>
        <option className="text-slate-800" value="running">
          Running 🏃
        </option>
        <option className="text-slate-800" value="terminated">
          Terminated ❌
        </option>
        <option className="text-slate-800" value="completed">
          Completed ✅
        </option>
        <option className="text-slate-800" value="exception">
          Exception 😵
        </option>
      </select>
    </div>
  );
};
export default LogListFilter;
