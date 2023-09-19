import React from "react";
import pptxgen from "pptxgenjs";
import { fields, format } from "./app/pitchdeckFields";
import { useSelector } from "react-redux";

const getStyle = (field) => {
  switch (field) {
    case "problems":
      return [
        {
          constant: 1,
          row: false,
          style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 26,
            align: "left",
            // fill: { color: "D3E3F3" },
            color: "black",
            // path:"",
            
          }
        },
        {
          constant: 1,
          row: false,
          style: {
            x: 1,
            y: 2,
            w: "80%",
            h: 1,
            fontSize: 18,
            align: "left",
            // fill: { color: "D3E3F3" },
            color: "black",
          }
        }
      ];
    case "solution":
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 2,
            fontSize: 25,
            align: "center",
            fill: { color: "#3c3c3c" },
            color: "#b4b4b4",
          }
        },
      ]
    case "marketValidation":
      return [
        {
          constant: 5,
          row: true,
          style: {
            x: 2.5,
            y: 2.5,
            w: "20%", 
            fontSize: 36,
            align: "center",
            color: "black",
          }
        },
        {
          constant: 5,
          row: true,
          style: {
            x: 2.5,
            y: 3.5,
            w: "20%",  
            fontSize: 18,
            align: "center",     
            color: "black",
          }
        }
      ]
    case "marketSize":
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2,
            w: 2,
            h: 2,
            fontSize: 25,
            align: "center",
            fill: { color: "#3c3c3c" },
            color: "#b4b4b4",
          }
        },
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 4,
            w: "20%",
            h: 2,
            fontSize: 17,
            align: "center",
            color: "#FFFFFF",
          }
        },
      ]
    case 'product':
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "30%",
            h: 1.5,
            fontSize: 25,
            align: "center",
            fill: { color: "#3c3c3c" },
            color: "black",
            // border:"blue",
            // shadow:"000000"
          }
        },
      ]
    case 'businessModel':
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 1,
            fontSize: 25,
            align: "center",
            fill: { color: "#FFFFFF" },
            color: "black",
            // border:"blue",
            // shadow:"000000"
          }
        },
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 3.5,
            w: "20%",
            h: 1,
            fontSize: 20,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "000000",
            
            // shadow:"000000"
          }
        },
      ]
    case 'competition':
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 1,
            fontSize: 25,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "black",
            // border:"blue",
            // shadow:"000000"
          }
        },
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 3.5,
            w: "20%",
            h: 1,
            fontSize: 20,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "000000",
            // border:"blue",
            // shadow:"000000"
          }
        },
      ]
    case 'competitiveAdvantage':
      return [
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 1,
            fontSize: 25,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "black",
            // border:"blue",
            // shadow:"000000"
          }
        },
        {
          constant: 3,
          row: true,
          style: {
            x: 1,
            y: 3.5,
            w: "20%",
            h: 1,
            fontSize: 20,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "000000",
            // border:"blue",
            // shadow:"000000"
          }
        },
      ]
    default:
      break;
  }
}

export const PitchDeck = () => {
  let pptx = new pptxgen();
  const formData = useSelector(state => state.pitchdeck);
  const downloadPPT = () => {
    let slides = []
    Object.keys(format).forEach((i) => {
      let object = {}
      object[i] = pptx.addSlide();
      slides.push(object)
    })
    slides.forEach(x => {
      let slide = (Object.values(x)[0])

      if(Object.keys(x)[0]!=="Info") {
        // slide.addImage({ path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg", x: 0.27, y: 2.8, w: 2.97, h: 2.9 });
        console.log(Object.keys(x));
        if(Object.keys(x)[0]==="Problems"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.NO-_Db3m4SCn2ZZKXf9XawHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        } else if(Object.keys(x)[0]==="Solution"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.NO-_Db3m4SCn2ZZKXf9XawHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        // }
        // else if(Object.keys(x)[0]==="Market Validation"){
        //   slide.addImage({ path: "https://cdn0.iconfinder.com/data/icons/vector-huge-black-icons/60/3d_bar_chart-512.png",  x: 0, y: 2, w: 2, h: 2 });
        }else if(Object.keys(x)[0]==="Market Validation"){
          slide.addImage({ path: "https://static.vecteezy.com/system/resources/previews/000/399/204/original/abstract-background-design-in-light-gray-vector.jpg",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Market Size"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.AvCM8d6s-F07YbPxpP-9pQHaEM?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Product"){
          slide.addImage({ path: "https://th.bing.com/th/id/R.a453f8c7759d67e06359349825853753?rik=10LjBhJuw%2bk4%2bg&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-10%2fGrey-Abstract-Widescreen-Wallpapers-28669.jpg&ehk=ig6I%2brX3%2bH9sRCfOgtPXfvN7QVq%2fIaNG1wHVbn2h6zE%3d&risl=&pid=ImgRaw&r=0",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Business Model"){
          slide.addImage({ path: "https://th.bing.com/th/id/R.c7d384cc668f6a070e5f5e0c33f388d3?rik=76ozJMcfXug8uQ&riu=http%3a%2f%2ffreedesignfile.com%2fupload%2f2017%2f06%2fBlack-with-whtie-and-gray-background-vector.jpg&ehk=e6dboONk%2f80GrL2a8NwbE4vUNP1zKa%2bbsT%2fF77sv%2bnE%3d&risl=&pid=ImgRaw&r=0",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Competition"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.-rO7NC0JPex5e_5f2AWJ8QHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        }else if(Object.keys(x)[0]==="Competitive Advantages"){
          slide.addImage({ path: "https://th.bing.com/th/id/OIP.-rO7NC0JPex5e_5f2AWJ8QHaEK?pid=ImgDet&rs=1",  x: 0, y: 0, w: 10, h: 6 });
        }
        slide.addText(Object.keys(x)[0], {
          x: 1,
          y: 0.5,
          w: "80%",
          h: 1,
          fontSize: 36,
          align: "center",
          fill: { color: "black" },
          color: "#FFFFFF",
        })
      } else{ slide.addImage({ path: "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/flickr/12606903574_6c726bd69d_o.jpg?resize=717&ssl=1", x: 0, y: 0, w: 10, h: 6 });
      }
      format[Object.keys(x)[0]].forEach(y => {
        Object.values(fields).filter(z => z.id === y).forEach(z => {
          // console.log(z, formData[z.id], Array.isArray(formData[z.id]))
          if(Array.isArray(formData[z.id])) {
            // console.log(formData[z.id])
            formData[z.id].forEach((a, i) => {
              // console.log(z.id)
              const style = getStyle(z.id)
              // console.log(Object.values(a))
              if(Object.values(a).length > 1) {
                Object.values(a).forEach((b, j) => {
                  // console.log(style)
                  let z = {
                    ...style[j].style,
                    y: !style[j].row ? style[j].style.y + style[j].constant * i : style[j].style.y,
                    x: style[j].row ? style[j].style.x + style[j].constant * i : style[j].style.x,
                  }
                  // console.log(z)
                  slide.addText(b, z)
                })
              } else {  
                let z = {
                  ...style[0].style,
                  y: !style[0].row ? style[0].style.y + style[0].constant * i : style[0].style.y,
                  x: style[0].row ? style[0].style.x + style[0].constant * i : style[0].style.x,
                }
                console.log(z)
                slide.addText(Object.values(a)[0], z)
              }
            })
          } else slide.addText(formData[z.id], z['style'])
        })
      })
    })
    
    pptx.writeFile({ fileName: "pitchdeck.pptx" });
  };
  return (
    <>
      <button className="w-full bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => downloadPPT()}>Download PPT</button>
    </>
  );
};
