import { array, array2 } from "../data/names"
export default function Map() {
  return (
    <>
      {array.map((name, i)=>(
        <h1 key={i}>{name}</h1>
      ))}

        {array2.map((person, i)=>(
        <h1 key={i}>{person.name}</h1>
      ))}
    </>
  );
}