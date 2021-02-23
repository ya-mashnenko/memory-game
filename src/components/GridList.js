import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "./tileData";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 600,
  },
}));

const imagesForCards = [
  { img: "https://picsum.photos/200/300?random=1", key: 1 },
  { img: "https://picsum.photos/200/300?random=2", key: 2 },
  { img: "https://picsum.photos/200/300?random=1", key: 3 },
  { img: "https://picsum.photos/200/300?random=2", key: 4 },
];
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 *
 * key={tile.img} cols={tile.cols || 1}
 * alt={tile.title}
 */
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={`imageGridList ${classes.root}`}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {imagesForCards.map((tile) => (
          <GridListTile key={tile.key}>
            <img src={tile.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
