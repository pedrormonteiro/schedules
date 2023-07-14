import useLogs, { LogType } from "@/hooks/useLogs";
import { FC } from "react";
import LogListItem from "./LogListItem";
import LogListFilter from "./LogListFilter";

type LogListProps = {
  items: LogType[];
};

const LogList: FC<LogListProps> = ({ items }) => {
  return (
    <section className="col-span-12 lg:col-span-9 lg:overflow-auto">
      <LogListFilter />
      <ul className="grid md:grid-cols-4 gap-5">
        {items.map((log) => (
          <LogListItem key={log.id} {...log} />
        ))}
      </ul>
    </section>
  );
};

export default LogList;
