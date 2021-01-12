import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ExpandButton(props) {
  const [clicked, setClick] = useState(false);
  const classes = useStyles();

  function trueClick() {
    setClick(!clicked);
  }

  return (
    <div>
      <div className={classes.root}>
        <p>
          {clicked
            ? props.postContent
            : props.postContent.substring(0, 100) + "..."}
        </p>
        <Button
          style={{ margin: 1, backgroundColor: "#4424D6", color: "#D4EDF7" }}
          size="small"
          onClick={trueClick}
          variant="text"
        >
          {clicked ? "Read Less" : "... Read More"}
        </Button>
      </div>
    </div>
  );
}

export default ExpandButton;
