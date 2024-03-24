import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useContext, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function CarouselSolucoes() {
  const solucoes = [
    {
      img: "/images/camera.png",
    },
    {
      img: "/images/fone.jpg",
    },
    {
      img: "/images/monitor.jpg",
    },
    {
      img: "/images/note.jpg",
    },
    {
      img: "/images/pc.jpg",
    },
    {
      img: "/images/tablet.jpg",
    },
  ];

  const [selected, setSelected] = useState(0);
  const { isMobile, isTablet } = useContext(ResponsiveContext);

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const gruposDeImagens = chunkArray(solucoes, 2);

  return (
    <>
      <Stack width={"100%"}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          onChange={setSelected}
          selectedItem={selected}
          showArrows={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <IconButton
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ position: "absolute", left: 0, top: "50%", zIndex: 2, transform: "translateY(-50%)" }}
              >
                <ArrowLeftIcon sx={{ fontSize: 48 }} />
              </IconButton>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <IconButton
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ position: "absolute", right: 0, top: "50%", zIndex: 2, transform: "translateY(-50%)" }}
              >
                <ArrowRightIcon sx={{ fontSize: 48 }} />
              </IconButton>
            )
          }
        >
          {gruposDeImagens.map((grupo, index) => (
            <Stack
              key={index}
              direction={isMobile ? "column" : "row"}
              height={isMobile ? 500 : 400}
              justifyContent="center"
              marginBottom={isMobile ? 2 : 0}
            >
              {grupo.map((imagem, subIndex) => (
                <Box
                  key={subIndex}
                  marginBottom={isMobile ? 2 : 0}
                  marginTop={isMobile ? 2 : 0}
                  sx={{
                    background: `url(${imagem.img}) no-repeat center center`,
                    backgroundSize: "cover",
                    flex: isTablet || isMobile ? 1 : 0.5,
                    marginLeft: subIndex === 1 && !isMobile && !isTablet ? 2 : 0,
                  }}
                />
              ))}
            </Stack>
          ))}
        </Carousel>
      </Stack>
    </>
  );
}
