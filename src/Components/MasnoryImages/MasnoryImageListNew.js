import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import img1 from "../../Assets/MasonaryImages/masnory1.png";
import img2 from "../../Assets/MasonaryImages/masnory2.png";
import img3 from "../../Assets/MasonaryImages/masnory3.png";
import img4 from "../../Assets/MasonaryImages/masnory4.png";
import img5 from "../../Assets/MasonaryImages/masnory5.png";
import img6 from "../../Assets/MasonaryImages/masnory6.png";
import img7 from "../../Assets/MasonaryImages/masnory7.png";
import img8 from "../../Assets/MasonaryImages/masnory8.png";
import img9 from "../../Assets/MasonaryImages/masnory9.png";
import img10 from "../../Assets/MasonaryImages/masnory10.png";
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  images: {
    [theme.breakpoints.down("lg")]: {
      width: "190px",
      height: "330px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "275px",
      height: "430px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "294px",
      height: "450px",
    },
  },
}));

export default function MasonryImageListNew() {
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Stack
        direction="row"
        // justifyContent="center"
        // alignItems="center"
        spacing={2}
      >
        {itemData.map((items, index) => (
          <ImageColumn items={items} index={index} />
        ))}
      </Stack>
    </Box>
  );
}

function ImageColumn({ items, index }) {
  const classes = useStyles();
  console.log(items);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ paddingTop: index % 2 == 0 ? "100px" : 0 }}
    >
      {items.map((item) => (
        <img className={classes.images} src={item.img} />
      ))}
    </Stack>
  );
}

const itemData = [
  [
    {
      img: img1,
      title: "Bed",
    },
    {
      img: img2,
      title: "Books",
    },
  ],
  [
    {
      img: img3,
      title: "Sink",
    },
    {
      img: img4,
      title: "Kitchen",
    },
  ],
  [
    {
      img: img5,
      title: "Blinds",
    },
    {
      img: img6,
      title: "Chairs",
    },
  ],
  [
    {
      img: img7,
      title: "Laptop",
    },
    {
      img: img8,
      title: "Doors",
    },
  ],
  [
    {
      img: img9,
      title: "Coffee",
    },
    {
      img: img10,
      title: "Storage",
    },
  ],
];
