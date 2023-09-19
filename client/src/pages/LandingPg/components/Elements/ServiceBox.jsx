import React from "react";
import styled from "styled-components";
// Assets
import { FcCollaboration } from "react-icons/fc";
import { GiPayMoney, GiIncubator } from "react-icons/gi";
import {AiOutlineUser} from "react-icons/ai";
import {RiGovernmentFill} from "react-icons/ri";
import {GrWorkshop} from "react-icons/gr";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;
  switch (icon) {
    case "collab":
      getIcon = <FcCollaboration size={40} />;
      break;
    case "invest":
      getIcon = <GiPayMoney size={40} />;
      break;
    case "incubator":
      getIcon = <GiIncubator size={40} />;
      break;
    case "accelerate":
      getIcon = <GrWorkshop size={40} />;
      break;
    case "govt":
      getIcon = <RiGovernmentFill size={40} />;
      break;
    case "user":
      getIcon = <AiOutlineUser size={40} />;
      break;
    default:
      getIcon = <FcCollaboration size={40} />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold" style={{ textAlign: "center" }}>
        {title}
      </TitleStyle>
      <SubtitleStyle className="font14">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 0;
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: auto;
  padding-bottom: 5px;
  text-align:center @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: auto;
  text-align: justify;
  text-align-last: left;
`;
