import { Card } from "./Card";
export function CardList({ isFirst, handleFirstREnder, data }) {
  if (isFirst) handleFirstREnder();
  return (
    <div className="grid grid-cols-2 gap-7 bg-[#E1F6DC] p-7">
      {isFirst ? <></> : data.map((v) => <Card user={v} />)}
    </div>
  );
}
