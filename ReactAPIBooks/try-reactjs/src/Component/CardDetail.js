import React from "react";
import CardView from "react-bootstrap/Card";
import "./card.scss";
import blankProfile from "./blankProfilePic.png";
import Row from "react-bootstrap/Row";
import Comments from "./comment/Comments";
import Gagets from "./comment/Gagets";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//testing delete
import { Trash } from "react-bootstrap-icons";
import DialogAlert from "../components/share/dialog";

function CardDetail(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    console.log("clicked ok");
  };

  return (
    <CardView className="card card-light">
      <p onClick={() => handleClickOpen()}>
        <Trash />
        Delete
      </p>
      <DialogAlert
        open={open}
        handleClose={handleClose}
        handleOk={handleOk}
        title="Delete Testing..."
        contents="this is contents loreal dgfhie contents will be deleted"
        ok="Delete"
        cancel="Cancel"
      />
      <div className="circular">
        <CircularProgressbarWithChildren
          value={90}
          styles={buildStyles({
            pathColor: "#f31a49",
            trailColor: "white"
          })}
        >
          <div className="circleimgWrap">
            <img
              src="https://www.motherjones.com/wp-content/uploads/2019/12/Getty121719.jpg?w=200"
              alt="ele"
              className="imginCircle"
            />
          </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={30}
          styles={buildStyles({
            pathColor: "gold",
            trailColor: "white"
          })}
        >
          <div className="circleimgWrap">
            <img
              src="https://www.motherjones.com/wp-content/uploads/2019/12/Getty121719.jpg?w=200"
              alt="ele"
              className="imginCircle"
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <CardView.Body>
        <Row className="profile-field">
          <div id="profile">
            <div id="profile_pic">
              <img src={blankProfile} alt="avatar" />
            </div>
            <span id="profile_name">Duky</span>
            <Gagets myVotes={true} votes={22} bookmark={true} chatDotNum={3} />
          </div>
        </Row>
        <Row className="card-content-container" style={{ display: "block" }}>
          <div id="content-field">
            <div id="scoreinfo">
              Telemann-2nd mvt-allegro1
              <br />
            </div>

            <div id="date">3/14/2020, 19:43:17</div>

            <div id="contents">
              olfgang Amadeus Mozart, baptised as Johannes Chrysostomus
              Wolfgangus Theophilus Mozart, was a prolific and influential
              composer of the Classical era. Born in Salzburg.. ...
            </div>

            <div id="images">
              <img
                src="https://assets.forwardcdn.com/images/cropped/gettyimages-3246544-1576070575.jpg"
                style={{ width: "100%" }}
                alt="img"
              />
            </div>

            <div id="hashtags">#hashtags</div>
            <div>
              <Comments />
            </div>
          </div>
        </Row>
      </CardView.Body>
    </CardView>
  );
}

export default CardDetail;
