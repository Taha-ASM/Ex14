export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 bg-black py-44 mt-20">
      <h1 className="w-full text-center text-6xl mb-44">More Information</h1>
      <div className="w-full flex items-center justify-center gap-40">
        <div>
          <h1 className="text-5xl mb-7">Top#1</h1>
          <p className="cursor-pointer text-xl">GTA 5</p>
          <p className="cursor-pointer text-xl">Fortnite</p>
          <p className="cursor-pointer text-xl">Call of Duty</p>
          <p className="cursor-pointer text-xl">Cs:go</p>
        </div>
        <div>
          <h1 className="text-5xl mb-7">Top#2</h1>
          <p className="cursor-pointer text-xl">Roleplay</p>
          <p className="cursor-pointer text-xl">Free Fire</p>
          <p className="cursor-pointer text-xl">Rocket Leage</p>
          <p className="cursor-pointer text-xl">Valorant</p>
        </div>
        <div>
          <h1 className="text-5xl mb-7">Top#3</h1>
          <p className="cursor-pointer text-xl">Among Us</p>
          <p className="cursor-pointer text-xl">Pubg</p>
          <p className="cursor-pointer text-xl">Crab Game</p>
          <p className="cursor-pointer text-xl">Auro Truck</p>
        </div>
      </div>
    </footer>
  );
}
