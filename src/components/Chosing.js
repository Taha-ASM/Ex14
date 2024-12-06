import Online from "../img/online.png";
import Offline from "../img/offline.png";

export default function Chosing() {
  return (
    <div>
      <h1 className="text-center text-6xl my-20">Online & Offline</h1>
      <div className="flex justify-around">
        <div className="cursor-pointer">
          <h1 className="absolute flex items-center justify-center w-1/4 h-2/4 text-6xl">
            Online
          </h1>
          <button>
            <img src={Online} alt="offline" />
          </button>
        </div>
        <div className="cursor-pointer">
          <h1 className="absolute flex items-center justify-center w-1/4 h-2/4 text-6xl">
            Offline
          </h1>
          <button>
            <img src={Offline} alt="offline" />
          </button>
        </div>
      </div>
    </div>
  );
}
