import { FC } from "react"
import { useInfoDB } from "../../../hooks"
import { Item, Video } from "../../../types"

type Props = {
    infoCard?: Item,
    videos?: Video[]
}

const CardDetail: FC<Props> = ({ infoCard, videos }) => {
    
    return (
        <div>
            {infoCard?.media_type === "movie" ?
                <div>
                    <h1>{infoCard?.title}</h1>


                </div>
                :
                <h1>{infoCard?.original_name}</h1>

            }
            <h2>{infoCard?.overview}</h2>
            <h3>Fecha de lanzamiento: {infoCard?.release_date}</h3>
            <h3>Lenguaje original: {infoCard?.original_language}</h3>
            <img src={`https://image.tmdb.org/t/p/original/${infoCard?.poster_path}`} alt="imagen"></img>
            <div>
                <h2>Trailers</h2>
                {videos?.map((video) => {
                    return (
                        <iframe
                            key={video.key}
                            id={`${video.id}`}
                            className="video"
                            // width={videos.length === 1 ? '100%' : '45%'}
                            // height={videos.length === 1 ? 330 : 200}
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )
                })}
            </div>
        </div>
    )
}

export { CardDetail }