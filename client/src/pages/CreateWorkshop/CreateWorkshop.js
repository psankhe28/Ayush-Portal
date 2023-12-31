import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CreateComponent2 from "../../components/CreateWorkshop/CreateWorkshop.js";

const CreateWorkshop = () => {
  useEffect(() => {
    document.title = "Bharatpreneur - Create post";
  }, []);
  return (
    <div>
      <Grid
        gridTemplateColumns="22vw auto 24vw"
        columnGap="2rem"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <CreateComponent2 />

        {/* <LeftSidebar /> */}
      </Grid>
    </div>
  );
};

export default CreateWorkshop;
