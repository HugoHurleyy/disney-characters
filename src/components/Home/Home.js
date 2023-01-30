import {
  Pagination,
  PaginationItem,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Home = (props) => {
  const { data } = props.data;

  const router = useRouter();
  const { pageNum } = router.query;

  const changePageHandler = function (_, pageValue) {
    router.push(`/${pageValue}`);
  };

  return (
    <>
      <Grid
        width={{ xs: "80%", md: "100%" }}
        marginTop={5}
        marginX="auto"
        gap={2}
        justifyContent={"center"}
        container
      >
        {data.map((data) => {
          return (
            <Grid key={data._id} xs={12} sm={6} md={4} xl={2} item>
              <Card>
                <img
                  style={{
                    width: "100%",
                    height: "20rem",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={data.imageUrl}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/character/${data._id}`}>
                    <Button size="small">Daha fazla öğren</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* */}
      <Stack
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        marginBottom={5}
      >
        <Pagination
          count={149}
          color="primary"
          shape="circular"
          page={+pageNum}
          onChange={changePageHandler}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </Stack>
    </>
  );
};

export default Home;
