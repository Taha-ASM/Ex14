import { games } from "../data/names";
import Card from "./Card";

export default function Header() {
  return (
    <header className="container flex items-center flex-col">
      <h1 className="text-6xl text-center py-10">Famous Games</h1>
      <div className="flex flex-wrap gap-28">
        {games.map((_) => (
          <Card description={_.description} img={_.img} title={_.title} />
        ))}
        {games.map((item) => (
          <Card {...item} desc={item.description} />
        ))}
      </div>
      <a className="mt-20 text-2xl" href="#">
        Lear More
      </a>
    </header>
  );
}