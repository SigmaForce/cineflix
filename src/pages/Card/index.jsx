import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { Link } from "react-router-dom";
import NoImage from "../../svg/No-Image.png";
import { Eye, Trash } from "phosphor-react";
const Card = ({ content, type }) => {
  const {
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeFromWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  let storedMovie = watchlist.find((item) => item.id === content.id);

  let storedMovieWatched = watched.find((item) => item.id === content.id);

  const watchlistDisabled = storedMovie ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb">
          <Link to={"/post/" + content.id}>
            {content.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                alt={`${content.title} Poster`}
              />
            ) : (
              <img src={NoImage} alt="Poster" />
            )}
          </Link>
        </div>
        <div className="mt-2 px-2 min-h-[350px]  relative ">
          <h6 className="color-gray">
            {content.release_date ? content.release_date.substring(0, 4) : "-"}
          </h6>
          <h6 className="uppercase color-primary">{content.original_title} </h6>
          <Link to={"/post/" + content.id}>
            <h5>{content.title}</h5>
          </Link>
          <div className="my-3">
            <Link to={"/post/" + content.id} className="link color-primary">
              Ler Mais
            </Link>
          </div>

          <div className="my-3">
            {type === "watchlist" ? (
              <div className="absolute bottom-4 p-2 flex justify-between">
                <button
                  className=" h-10 min-w-[64px] mx-12 bg-brand-500 rounded-md border-transparent  flex flex-1 justify-between items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                  disabled={watchedDisabled}
                  onClick={() => addMovieToWatched(content)}
                >
                  <Eye className="p-0 m-0" size={24} />
                </button>

                <button
                  className="h-10 min-w-[64px] bg-red-700 rounded-md border-transparent  flex flex-1 justify-between items-center text-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-600 transition-colors"
                  onClick={() => removeMovieFromWatchlist(content.id)}
                >
                  <Trash className="p-0 m-0" size={24} />
                </button>
              </div>
            ) : (
              <>
                {type === "watched" ? (
                  <div className="absolute bottom-4 p-2 min-w-full">
                    <button
                      className="h-10 min-w-[90%] bg-red-700 rounded-md border-transparent text-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-600 transition-colors"
                      onClick={() => removeFromWatched(content.id)}
                    >
                      <Trash className="p-0 m-0" size={24} />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="absolute bottom-4 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                      disabled={watchlistDisabled}
                      onClick={() => addMovieToWatchlist(content)}
                    >
                      <span></span> Add To Watchlist
                    </button>
                    <button
                      className="absolute bottom-4 right-4   p-2 bg-green-600 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-600 transition-colors disabled:opacity-50 disabled:hover:bg-green-600"
                      disabled={watchedDisabled}
                      onClick={() => addMovieToWatched(content)}
                    >
                      <span></span> Add To Watched
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
