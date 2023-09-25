import React from "react";
import gstLogo from "../../assets/gst.png";
import cinLogo from "../../assets/cin.png";
import panLogo from "../../assets/pan.png";
import patentLogo from "../../assets/patent.png";
import proofLogo from "../../assets/proof.png";
import eventsLogo from "../../assets/events.png";
import styled from "styled-components";

const Eligibility = () => {
  const constantData = [
    {
      id: 1,
      image: gstLogo,
      title: "Gst Number of Company",
      description:
        "Enter your GST number and we will fetch your company details.",
    },
    {
      id: 2,
      image: cinLogo,
      title: "Gst CIN of Company",
      description:
        "If your company isn't registered in GST, you can enter CIN number and we will add your company details within a moment.",
    },
    {
      id: 3,
      image: panLogo,
      title: "Companies Registered Pan number",
      description:
        "A small business? Don't have GST or CIN number, verify your startup with your company's Pan Number.",
    },
    {
      id: 4,
      image: patentLogo,
      title: "Enter your patent number",
      description:
        "Have a unique idea and want to start or grow your business? Don't worry we've got you!",
    },
  ];

  return (
    <Wrapper id="eligibility" style={{marginTop:'-50px'}}>
      <div>
        <div className="px-24 bg-gray-100 py-6">
          <h1 className="text-4xl font-bold pt-16 pb-8">
            Eligibility Criteria for a Startup
          </h1>
          <h1 className="text-2xl font-medium text-gray-500">
            User should provide any one of the following for verification of
            their company :
          </h1>
          <div className="mt-8 flex flex-row ml-8">
            {constantData.map((criteria) => (
              <div
                key={criteria.id}
                className="p-4 mr-4 bg-white flex flex-col items-center justify-center shadow-lg max-w-[23%]"
              >
                <img
                  src={criteria.image}
                  style={{
                    width: "120px",
                  }}
                  alt=""
                />
                <h1 className="mt-8 text-xl font-semibold text-center">
                  {criteria.title}
                </h1>
                <h1 className="mt-4 text-md text-gray-400">
                  {criteria.description}
                </h1>
              </div>
            ))}
          </div>
          <h1 className="mt-8 text-center text-2xl font-semibold ">Or</h1>
          <div className="flex flex-row mt-8 bg-white items-center shadow-lg">
            <img className="w-[200px]" src={proofLogo} alt="" />
            <div>
              <h1 className="text-md font-semibold text-gray-800">
                Submit your proof of work in any form
                <span className="text-md text-gray-400">{`(videos of product, proof of customers, turnover details, any recognition certificate/document)`}</span>{" "}
              </h1>
              <h1 className="text-md font-semibold text-gray-800">
                We will evaluate it in 4-5 days and will get back to you!
              </h1>
            </div>
          </div>
          <h1 className="mt-8 text-center text-2xl font-semibold ">
            Not Eligible? Don't worry!
          </h1>
          <div
            className="bg-white shadow-lg p-4 mt-8 max-w-[600px] flex flex-col items-center"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={eventsLogo} className="w-[300px] self-center" alt="" />
            <h1 className="mt-4 text-xl font-semibold text-center">
              Learn And grow
            </h1>
            <h1 className="mt-4 text-md text-gray-400">
              Attend Events held by some of the Famous Mentors from our Portal
              and gain valuable knowledge on how to start a business/startup.{" "}
            </h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Eligibility;
const Wrapper = styled.section`
  width: 100%;
`;
