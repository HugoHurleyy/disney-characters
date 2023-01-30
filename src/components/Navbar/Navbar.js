import {
  Backdrop,
  Autocomplete,
  CircularProgress,
  TextField,
  Box,
  Grid,
  Modal,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Stack } from "@mui/system";
import { handleLoading, handleModel } from "@/Redux-store/ui-slices";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isModelShown, isLoading } = useSelector((state) => state.ui);
  const [names, setNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(
    function () {
      const timeout = setTimeout(async function () {
        if (!searchQuery) return setNames([]);
        try {
          const response = await fetch(
            `https://api.disneyapi.dev/character?name=${searchQuery}`
          );
          const { data } = await response.json();
          const names = data.map((data) => ({
            label: data.name,
            id: data._id,
          }));
          dispatch(handleLoading(false));
          setNames(names);
        } catch (error) {
          alert(error.message);
        }
        dispatch(handleLoading(false));
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    },
    [searchQuery]
  );

  const modelHandler = function () {
    dispatch(handleModel(true));
  };
  const searchQueryHandler = function (e) {
    setSearchQuery(e.target.value);
    if (!e.target.value) return;
    dispatch(handleLoading(true));
  };
  const changeHandler = function (_, value) {
    if (!value) return;
    router.replace(`/character/${value.id}`);
    dispatch(handleModel(false));
  };
  return (
    <>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={isModelShown}
        onClose={() => dispatch(handleModel(!isModelShown))}
      >
        <Stack
          bgcolor="ButtonFace"
          direction="row"
          alignItems="center"
          spacing={5}
          padding={10}
        >
          <Autocomplete
            disablePortal
            options={names}
            sx={{ width: 300 }}
            onChange={changeHandler}
            renderInput={(params) => (
              <TextField
                onChange={searchQueryHandler}
                {...params}
                label="Karakter Ara"
              />
            )}
          />
          {isLoading && <CircularProgress />}
        </Stack>
      </Modal>

      <Grid
        justifyItems="center"
        justifyContent={"space-between"}
        padding={2}
        container
        bgcolor="#0a1929"
      >
        <Link href="/1">
          <Image
            style={{ filter: "brightness(0) invert(1)" }}
            width={100}
            src={require("./../../assets/pics/disney-logo.png")}
          />
        </Link>
        <Grid justifySelf={"center"} alignSelf="center" item>
          <SearchIcon
            onClick={modelHandler}
            fontSize="large"
            sx={{ color: "white" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
