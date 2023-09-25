import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/c1.png";
import img2 from "../../assets/c2.png";
import img3 from "../../assets/c3.png";
import styled from "styled-components";

export default function MyCarousel() {
  const onChange = (index) => {
    console.log(`Slide changed to index ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Clicked on item ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumb ${index}`);
  };

  return (
    <Wrapper id="home" style={{ marginTop: "50px" }}>
      <div className="bg-gray-100">
        <div className="flex flex-row mt-8 bg-white items-center shadow-lg">
          <Carousel
            showArrows={false}
            showStatus={false}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            style={{ width: "100%" }}
            autoPlay
            interval={2000}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="control-arrow control-prev"
                  style={{
                    width: "auto",
                    left: "20px",
                  }}
                >
                  {"<"} {/* You can customize the arrow content */}
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="control-arrow control-next"
                  style={{
                    width: "auto",
                    right: "20px",
                  }}
                >
                  {">"}
                </button>
              )
            }
          >
            <div>
              <img src={img2} alt="Slide 1" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={img1} alt="Slide 2" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={img3} alt="Slide 3" style={{ width: "100%" }} />
            </div>
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  .thumbs {
    display: none !important;
  }
  .thumbs-wrapper {
    display: none !important;
  }
`;
