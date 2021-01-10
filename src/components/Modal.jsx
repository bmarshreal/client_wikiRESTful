import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import ExpandButton from "./ExpandButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "50%",
    maxHeight: "75%",
    overflow: "scroll",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  //   const [clicked, setClick] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{
          margin: 1,
          backgroundColor: "#4424D6",
          color: "#D4EDF7",
          borderRadius: 5,
          height: "2.5rem",
          width: "6.5rem",
        }}
        type="button"
        onClick={handleOpen}
      >
        ...Read More
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Transition modal</h2> */}
            {open ? (
              <p id="transition-modal-description">
                {"... " + props.postContent.substring(99)}
              </p>
            ) : (
              <p>{props.postContent.substring(0, 99) + "..."}</p>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
