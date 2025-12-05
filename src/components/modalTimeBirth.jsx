import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RemainingTime from "../logic/timeRemaining";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleTimer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid black",
  padding: "20px 10px",
  fontFamily: "Rubik",
  borderRadius: "5px",
  background: "black",
  color: "white",
};
export default function LessTimeBirth({
  openTime,
  setOpenTime,
  myData,
  itemId,
  setItemId,
}) {
  const [myinter, setMyinter] = React.useState("");
  const [timeRemaining, setTimeRemaining] = React.useState("");

  const [person, setPerson] = React.useState(null);
  const per = myData.find((item) => item.id === itemId);

  React.useEffect(() => {
    if (openTime) {
      console.log(person);
      setPerson(per);
      if (person) {
        const dates = person.year + "-" + person.month + "-" + person.day;
        setTimeRemaining(RemainingTime(dates));
        const myInter = setInterval(() => {
          setTimeRemaining(RemainingTime(dates));
        }, 1000);
        setMyinter(myInter);
        return () => clearInterval(myInter);
      } else {
        clearInterval(myinter);
      }
    }
  }, [openTime, per, person]);
  const handleCloseTime = () => {
    setOpenTime(false);
    setItemId(null);
  };

  return (
    <div>
      <Modal
        open={openTime}
        onClose={handleCloseTime}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1
              style={{
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Countdown to <span style={{color:"gray"}}>{person ? person.name : ""}</span>'s Birthday
              Celebration!
            </h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p style={styleTimer}>
                <span>Days:</span> <span>{timeRemaining.days}</span>
              </p>
              <p style={styleTimer}>
                <span>Hours</span> <span>{timeRemaining.hours}</span>
              </p>
              <p style={styleTimer}>
                <span>Minutes:</span> <span>{timeRemaining.minutes}</span>{" "}
              </p>
              <p style={styleTimer}>
                <span>Seconds:</span> <span>{timeRemaining.seconds}</span>{" "}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
