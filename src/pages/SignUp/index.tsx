import { Card, CardContent, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp as SignUpForm } from "../../components/forms";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import friends from "../../assets/images/friends.webp"
import yourName from "../../assets/images/yourName.jpg"
import parasite from "../../assets/images/parasite.jpg"
import lifeIsBeaty from "../../assets/images/lifeIsBeautiful.jpg"
import thedarkKnight from "../../assets/images/theDarkKnight.jpg"
import hope from "../../assets/images/hope.jpg"
import monstersInk from "../../assets/images/monstersInk.webp"

const SignUp: FC = () => {

    const history = useNavigate()

    const itemData = [{
        title: "friends",
        img: friends,
        rows: 3,
        cols: 2,
    },
    {
        title: "life is beautiful",
        img: lifeIsBeaty,
        rows: 2,
        cols: 2,
    },
    {
        title: "hope",
        img: hope
    },
    {
        title: "parasite",
        img: parasite

    },
    {
        title: "the dark knight",
        img: monstersInk,
        rows: 2,
        cols: 2,
    }, {
        title: "your name",
        img: yourName,
        rows: 2,
        cols: 2,
        }]
    
        const srcset = (image: string, size: number, rows = 1, cols = 1) => {
            return {
                src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
                srcSet: `${image}?w=${size * cols}&h=${size * rows
                    }&fit=crop&auto=format&dpr=2 2x`,
            };
        }
    
    return (
        <Layout hideHeader>
            <Grid container>
                <Box style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ padding: "1em", height: "max-content", width: "100%" }}>
                        <ImageList
                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                        >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                    </Box>
                    <Card style={{ position: "absolute" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto', backgroundColor: "primary.dark" }}>
                            <SignUpForm />
                            </CardContent>
                            <Typography>¿Aun no tienes cuenta? <Typography component="span" onClick={() => history("/sign-up")}>Crear cuenta</Typography> </Typography>
                        </Box>

                    </Card>
                </Box>

            </Grid>

        </Layout>
    )
}

export const SignUpPage = WithAuth(SignUp);