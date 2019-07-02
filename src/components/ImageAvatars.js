import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      margin: 30,
      width: 250,
      height: 250
    }
  })
);

export default function ImageAvatars(props) {
  const classes = useStyles();
  return (
    <>
      <Avatar
        style={{ display: "inline-block" }}
        alt={props.id}
        src={props.images}
        className={classes.bigAvatar}
        onClick={() => props.checkDuplicate(props.id)}
      />
    </>
  );
}
