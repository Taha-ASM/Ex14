import fortnite from "../img/fortnite.jpg";
import F from "../img/F.png";

export default function Selection() {
  return (
    <div className="flex justify-center flex-col shadow-xl shadow-black">
      <img className="relative pt-10" src={fortnite} alt="fortnite" />
      <div className="absolute flex w-full">
        <div className="text w-2/4 flex-3 flex flex-col items-center justify-center">
          <p className="text-xl w-2/3">
            Fortnite is an online video game developed by Epic Games and
            released in 2017. It is available in three distinct game mode
            versions that otherwise share the same general gameplay and game
            engine: Fortnite Battle Royale, a free-to-play battle royale game in
            which up to 100 players fight to be the last person standing;
            Fortnite:Save the World, a cooperative hybrid tower defense-shooter
            and survival game in which up to four players fight off zombie-like
            creatures and defend objects with traps and fortifications they can
            build; and Fortnite Creative, in which players are given complete
            freedom to create worlds and battle arenas.
          </p>
          <div className="mr-96 mt-10 flex gap-5">
            <button className="btn btn-info">Play Now!</button>
            <button className="btn btn-ghost">More Details</button>
          </div>
        </div>
        <div className="img w-2/4 flex-4 flex justify-center">
          <img src={F} alt="fortnite" />
        </div>
      </div>
    </div>
  );
}