import {
    Box,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { FC } from "react";
import { Item, Video } from "../../../types";
import { CardLogin } from "../CardLogin";
import StarIcon from "@mui/icons-material/Star";

type Props = {
    infoCard?: Item;
    videos?: Video[];
};

const CardDetail: FC<Props> = ({ infoCard, videos }) => {
    return (
        <Container sx={{ paddingTop: "9em" }}>
            <CardLogin>
                <CardContent>
                    <Grid container sx={{ gap: "20px" }}>
                        <Grid item>
                            <CardMedia
                                component="img"
                                sx={{ maxWidth: 500 }}
                                image={`https://image.tmdb.org/t/p/original/${infoCard?.poster_path}`}
                                alt="Image of item"
                            />
                        </Grid>
                        <Grid xs={12} sm container >
                            <Grid item xs container direction="column" spacing={2} >
                                <Grid item xs>
                                    {infoCard?.media_type === "movie" ? (
                                        <Box sx={{ display: "flex", flexDirection: "column", marginBottom:"15px" }} component="div">
                                            <Typography variant="h4" component="div" gutterBottom>{infoCard?.title}</Typography>
                                            <Box sx={{ display: "flex", gap: "8px" }}>
                                                <StarIcon color="primary"></StarIcon>
                                                <Typography variant="body1" sx={{ fontWeight: "600" }}>{infoCard.vote_average}</Typography>
                                            </Box>
                                        </Box>
                                    ) : (
                                        <Typography variant="h4" component="div">
                                            {infoCard?.original_name}
                                        </Typography>
                                    )}
                                    <Typography variant="h6" fontWeight="300">
                                        {infoCard?.overview}
                                    </Typography>

                                </Grid>
                                <Grid item xs>
                                    <Box
                                        sx={{ display: "flex", gap: "5px", flexDirection: "column" }}
                                    >
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <Typography variant="h6" fontWeight="600">
                                                Fecha de lanzamiento:
                                            </Typography>
                                            <Typography variant="h6" fontWeight="200">
                                                {infoCard?.release_date}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <Typography variant="h6" fontWeight="600">
                                                Lenguaje original:{" "}
                                            </Typography>
                                            <Typography variant="h6" fontWeight="200">
                                                {infoCard?.original_language}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box >
                        <Typography sx={{ margin: "1.5em 0em 1em 0em" }} variant="h5" fontWeight="700">Trailers</Typography>
                        <Grid container spacing={2}>
                            {videos?.map((video) => {
                                return (
                                    <Grid item>
                                        <iframe
                                            key={video.key}
                                            id={`${video.id}`}
                                            className="video"
                                            src={`https://www.youtube.com/embed/${video.key}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </CardContent>
            </CardLogin>
        </Container>
    );
};

export { CardDetail };
