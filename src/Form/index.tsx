import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import MaleIcon from "@mui/icons-material/Male";
import Display from "../DisplayDetails";
import FemaleIcon from "@mui/icons-material/Female";

interface ChildProps {
    user?: string,
    age: number,
    gender: string
}
const Form = () => {
  const [gender, setGender] = useState<string>("");
  const [childprops, setProps] = useState<ChildProps>({user: undefined, age: 0, gender: ""})
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value)
    setGender(event.target.value as string);
  };

  const handleClick = () => {
    let user = (document.getElementById("username") as HTMLInputElement).value;
    let age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    if(isNaN(+age)) {
        window.alert("Please Enter a valid age");
    }
    if(user.length==0) {
        let updatedObj = {name: undefined,age: age,gender: gender};
        setProps(updatedObj);
        return;
    }
    setProps({user: user, age: age,gender: gender});
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField placeholder="Enter username" id="username"></TextField>
      <TextField placeholder="Enter age" id="age"></TextField>
      <Select onChange={handleChange} value={gender} id="gender">
        <MenuItem value="Male">
          <ListItemIcon>
            <MaleIcon></MaleIcon>
          </ListItemIcon>
          <ListItemText>Male</ListItemText>
        </MenuItem>
        <MenuItem value="Female">
          <ListItemIcon>
            <FemaleIcon></FemaleIcon>
          </ListItemIcon>
          <ListItemText>Female</ListItemText>
        </MenuItem>
      </Select>
      <Button type="submit" onClick={() => {handleClick()}} id="submitbtn">Submit</Button>
      <Display name={childprops.user} age={childprops.age} gender={childprops.gender}></Display>
    </Box>
  );
};

export default Form;
