import { Link } from "react-router-dom";
const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb">
          <Link to={"/post/" + content.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
              alt=""
            />
          </Link>
        </div>
        <div className="mt-2 px-2 min-h-[350px] ">
          <h6 className="color-gray">{content.release_date} </h6>
          <h6 className="uppercase color-primary">{content.original_title} </h6>
          <Link to={"/post/" + content.id}>
            <h5>{content.title}</h5>
          </Link>
          <div className="my-3">
            <Link to={"/post/" + content.id} className="link color-primary">
              Ler Mais
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
