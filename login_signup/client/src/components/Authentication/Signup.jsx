import {
  Stack,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovtAgency from "./UserBasedSignUp/GovtAgency";
import Investor from "./UserBasedSignUp/Investor";
import Incubator from "./UserBasedSignUp/Incubator";
import Mentor from "./UserBasedSignUp/Mentor";
import PublicUser from "./UserBasedSignUp/PublicUser";
import StartUp from "./UserBasedSignUp/StartUp";


const Signup = () => {
  const navigate = useNavigate();
  const [userType, setuserType] = useState("");

  
  return (
    <Stack spacing="6">
      <Select placeholder='Select role'
      onChange={(event) => {
        setuserType(event?.target?.value);
      }} >
          <option value='GovtAgency'>Government Agency</option>
          <option value='Incubator'>Incubator</option>
          <option value='Investor'>Investor</option>
          <option value='Mentor'>Mentor</option>
          <option value='PublicUser'>Public User</option>
          <option value='StartUp'>StartUp</option>
      </Select>
      {userType==="GovtAgency"?(<GovtAgency/>):(userType==="Incubator")?(<Incubator/>):(userType==="Investor")?(<Investor/>):(userType==="Mentor")?(<Mentor/>):(userType==="PublicUser")?(<PublicUser/>):(userType==="StartUp")?(<StartUp/>):""}

    </Stack>
  );
};

export default Signup;
