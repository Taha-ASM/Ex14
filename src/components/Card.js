export default function Card({ desc, img, title }) {
  return (
    <article className="card w-96 bg-base-100 shadow-xl shadow-black">
      <figure className="px-10 pt-10">
        <img src={img} alt="gta5" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Play Now</button>
        </div>
      </div>
    </article>
  );
}
