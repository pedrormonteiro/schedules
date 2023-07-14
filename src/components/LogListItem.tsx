import { LogType } from "@/hooks/useLogs";

const LogListItem = (props: LogType) => {
  return (
    <li className="flex flex-col gap-2 border-2 border-slate-700 px-4 py-3 shadow-xl">
      <span className="text-sm">Status: {props.status}</span>
      <span className="text-sm">Log id: {props.id}</span>
      <span className="text-sm">Server name: {props.serverName}</span>
      <span className="text-sm">
        Start time: {new Date(props.startTime).toDateString()}
      </span>
      <span className="text-sm">
        End time: {new Date(props.endTime).toDateString()}
      </span>
    </li>
  );
};
export default LogListItem;
