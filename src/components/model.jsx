import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
// import uuid from 'react-uuid';
import CalculateAge from "../logic/CalculateAge";
// date picker import
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: '2px solid #eee',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function TransitionsModal({ open, setOpen, myData,setNewperson }) {
  const id = uuidv4();

  const [field1Error, setField1Error] = React.useState(false);
  const [field2Error, setField2Error] = React.useState(false);
  const [field3Error, setField3Error] = React.useState(false);

  const [newPeaple, setNewPeople] = React.useState({
    name: "",
    age: "",
    image: "",
    id: id,
    month: "",
    day: "",
    year: "",
  });
  const checkError = () => {
    if (newPeaple.name === "") {
      setField1Error(true);
    }if(newPeaple.name !== ""){
      setField1Error(false)

    }
    if (newPeaple.age === "") {
      setField2Error(true);
    }
    if (newPeaple.age !== "") {
      setField2Error(false);
    }
    if (newPeaple.image === "") {
      setField3Error(true);
    }
    if (newPeaple.image !== "") {
      setField3Error(false);
    }
  };
  const handleClose = () => setOpen(false);

  const addItem = () => {
    checkError();
    if (
      newPeaple.name !== "" &&
      newPeaple.age !== "" &&
      newPeaple.image !== ""
    ) {
      setNewperson(newPeaple);
      setOpen(!open);
      setNewPeople({
        name: "",
        age: "",
        image: "",
        id: id,
        month: "",
        day: "",
        year: "",
      });
    }
  };

  const handleDateChange = (date) => {
    const age = CalculateAge(date);
    const years = age.year;
    setNewPeople((prevState) => ({
      ...prevState,
      age: years,
      month: date.$M + 1,
      day: date.$D,
      year: date.$y,
    }));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h1 id="transition-modal-title" className="addItem-title">
              Add New Item
            </h1>
            <br />
            <form className="formAddBirth" style={{ width: "100%" }}>
              <TextField
                error={field1Error}
                value={newPeaple.name}
                onChange={(e) => {
                  setNewPeople((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <div
                    className={
                      field2Error ? "date-picker error " : "date-picker"
                    }
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      onChange={handleDateChange}
                      label="Enter the Birthday"
                      dateFormat="MM-DD-YYYY"
                    />
                  </div>
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                error={field3Error}
                value={newPeaple.image}
                onChange={(e) => {
                  setNewPeople((prevState) => ({
                    ...prevState,
                    image: e.target.value,
                  }));
                }}
                id="outlined-basic"
                label="Image"
                variant="outlined"
              />
              <Button
                style={{ backgroundColor: "rebeccapurple" }}
                variant="contained"
                onClick={addItem}
              >
                Add To Reminder
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
