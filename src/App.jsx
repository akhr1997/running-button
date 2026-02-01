import React from "react";
import Slider from "react-slick";
import { ThemeProvider, createTheme, useMediaQuery, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const romanticTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ff4d6d" },
  },
});

const App = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: false, // Turned off to keep the container size stable
    centerMode: false,
  };

  const gallery = [
    // ... (Your gallery data)
    {
      url: "https://lh3.googleusercontent.com/d/1ORWBbTBtGkoWMxYEER9Pcxr45QOqkDXC",
      caption:
        "A little preview of how pretty the sunset was the day I met you — beach sunset, just for you. Also, I had literally spent 1.5 days with this Rajasthani dude who followed me from Alleppey. We came to the party in Go-Paddle together and I royally ditched him after meeting you😭. Funny how a Rajasthani replaced a Rajasthani hehe",
    },
    {
      url: "/images/IMG_3170.jpeg",
      caption:
        "100 points if you remember this guy xD. Really needed this drink before I ran into you since you had your big ass 10 marks answer to 'Where are you from?' 😛😛",
    },
    {
      url: "/images/IMG_3177.jpeg",
      caption:
        "Soon after your first street side dose, and a big OH ME TOOO moment wink wink, Abi snapped this beauty",
    },
    {
      url: "/images/IMG_3925.jpeg",
      caption:
        "I saw this story of yours like 50 times and laughed equally hard every time hehe. Can't forget the number of people we traumatised that night sleeping in the balcony, especially the F1 dude, he RAN AWAY lol",
    },
    {
      url: "/images/IMG_3179.jpeg",
      caption:
        "Right when we thought Abi would be up and surfing, we caught her knocked out in her room with an eye mask on lol. Somehow we rounded up a whole group — including a French professor we met a minute ago — kidnapped him to breakfast, just to see our table was taken ugh",
    },
    {
      url: "/images/IMG_3182.jpeg",
      caption:
        "Ah what can I say about thisssssssssss, PERFECT DAYYY. Was so funny when you mistook that Abi clicked the photo of a fucking crow lmaooo (Also remember the snails? Ewwwwww, but we made up for it when we were in the water 😛. Ending the day with Cheese Maggi (did we even add cheese though??) while completely confusing that poor British lady — we really had her questioning everything 😂 ))",
    },
    {
      url: "/images/IMG_3184.jpeg",
      caption:
        "Guess what I got for breakfast from here and remember why I had to resort to this cafe?",
    },
    {
      url: "/images/IMG_3201.jpeg",
      caption:
        "Our official first dateeeeeeeee, this is where I got to know the real Nushkuuu and remember thinking 'this cutie ain't bad after-all' hehe",
    },
    {
      url: "/images/IMG_3206.jpeg",
      caption:
        "Double date but more into how Abi was so cute with the surfer dude lol, went in search of hookah and found ourselves a good headache lol",
    },
    { url: "/images/IMG_3212.jpeg", caption: "Awwwwwwwwwwwwww" },
    {
      url: "/images/IMG_3222.jpeg",
      caption:
        "Decided to get eachother rings?? hehe. That was fun. Went back to our amazing hotel coz we had a brain fart and had booked 4 AM train to Alleppey lol",
    },
    {
      url: "/images/IMG_3915.jpeg",
      caption:
        "Somehow made it out of Varkala. Your first general class train experience!!! You were so proud of yourself hehe. Oh oh oh oh oh remember we had Mac And Cheese in the railway station, you were so cute. Also, sorry I was stuffing it so fast fast😭",
    },
    {
      url: "/images/IMG_3914.jpeg",
      caption: "Aham, only we both should know what happened here 🙈🙈🙈🙈🙈",
    },
    {
      url: "/images/IMG_3231.jpeg",
      caption:
        "Okay, I need you to tell everything that we had ordered here that day, go!!",
    },
    {
      url: "/images/IMG_3233.jpeg",
      caption:
        "Strong independent women here, my bitches✌🏻. Also you came back to say bye to me, that was so cute🥺. Stupid guard wouldn't let us hug/kiss lol",
    },
    {
      url: "/images/IMG_3916.jpeg",
      caption:
        "Literally spent the two days in Alappey debating whether I should ask you if I could come to Mumbai for New Year’s, because I really wanted to spend it with youuu.",
    },
    {
      url: "/images/7A93FFDF-A5A9-4FAF-8C5C-8149B9E778B1.jpeg",
      caption: "Supporting me thru all my madness lol",
    },
    { url: "/images/IMG_3305.jpeg", caption: "My first Burfi selfie hehe" },
    { url: "/images/IMG_3917.jpeg", caption: "Happy New year 2026!!!!!!" },
    {
      url: "/images/IMG_3311.jpeg",
      caption: "Casually getting late to the movies by 1 hour lol",
    },
    {
      url: "/images/IMG_3328.jpeg",
      caption:
        "Lady luck hit me hard and I got a free upgrade to an entirely different direct flight with a emergency window seat hehe",
    },
    {
      url: "/images/ADBA1A19-6337-4B55-ADE5-F8070403A1D9.jpeg",
      caption: "My gifts for hbdhbdhbd from my pookieeeee",
    },
    {
      url: "/images/IMG_3918.jpeg",
      caption: "Subjected you to my fashion show lol",
    },
    {
      url: "/images/C5A4A802-3098-43FF-933B-E7F826F36A14.jpeg",
      caption: "Got me flowers for my hbddddd!!!",
    },
    {
      url: "/images/IMG_1252.jpeg",
      caption:
        "This was such a perfectttttttt day, was just wishing you were here tooooo",
    },
    {
      url: "/images/7DF9D938-C050-4674-B23C-E60C1E57959A.jpeg",
      caption:
        "And just like thatttttttttttttttttttttt, boarded another Indigo for my colleague's wedding in Hyderabad hehe",
    },
    {
      url: "/images/IMG_3720.jpeg",
      caption:
        "Got a good side gig idea and look at you with your petrol bottle lol. Also good to know Anju digs me xD",
    },
    {
      url: "/images/IMG_0038.jpeg",
      caption:
        "Lolla day 1 and this was your 'get my ass in the photo' idea😂😂😂",
    },
    {
      url: "/images/IMG_3754.jpeg",
      caption:
        "Day 2 and had nooo idea this day would become one of the most memorable days of my life",
    },
    { url: "/images/IMG_0053.jpeg", caption: "My forever Valentine! ❤️" },
    {
      url: "/images/IMG_0084.jpeg",
      caption: "What a fun bunch of peopleeeee, loved them",
    },
    {
      url: "/images/IMG_0062.jpeg",
      caption:
        "We both know this photo had to come and to quote Keerthana, 'This photo is sooo cuteeee' hehe and not you yelling 'STOPPP PHOTO BOMBINGGGGGG' in the background lol",
    },
    {
      url: "/images/IMG_3768.jpeg",
      caption:
        "Sang In The End with youuuuu. I was high on life and everything in-between, you were sober as fuckk lol",
    },
    {
      url: "/images/IMG_3792.jpeg",
      caption: "Ashhhoooooo cute babyyyyyyyyyyyyy❤️",
    },
    {
      url: "/images/IMG_3860.jpeg",
      caption:
        "Date nightttttttttt. It meant a lot you were okay to open the bottle of wine you had gotten so long ago. And that chocolate was fucking useless lol. Also corn ribs on date night is a big no, altho the dips variety made you so happy happy!",
    },
    {
      url: "/images/IMG_3864.jpeg",
      caption:
        "Pizza on the beach with my pasandida aurat and a cute kitten, need I ask more?",
    },
    { url: "/images/IMG_3874.jpeg", caption: "Vibe coding scenes magaaa" },
  ];

  return (
    <ThemeProvider theme={romanticTheme}>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #fff0f3, #ffccd5, #ffb3c1)",
          height: "100vh", // Locked to full screen height
          width: "100%",
          position: "fixed", // Keeps everything stable
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between", // Spaces out title, content, and padding
          py: 2,
          overflow: "hidden", // Prevents the vertical scrollbar you wanted gone
          boxSizing: "border-box",
        }}
      >
        <div className="hearts-container">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="heart">
              ❤️
            </div>
          ))}
        </div>

        {/* Title */}
        <h1
          style={{
            color: "#ff4d6d",
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "1.6rem" : "3rem",
            margin: "10px 0",
            textAlign: "center",
            fontWeight: "700",
            zIndex: 2,
          }}
        >
          Our Journey so far... ✨
        </h1>

        {/* Slider */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            flexGrow: 1, // Takes up remaining space
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: isMobile ? 1 : 4,
            boxSizing: "border-box",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
            {gallery.map((item, idx) => (
              <Box key={idx} sx={{ outline: "none", width: "100%" }}>
                <Box sx={{ px: isMobile ? 1 : 0 }}>
                  <img
                    src={item.url}
                    alt={`Memory ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: isMobile ? "45vh" : "500px",
                      borderRadius: "15px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />

                  <Box
                    sx={{
                      mt: 2,
                      p: isMobile ? 1.5 : 2.5,
                      background: "rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.6)",
                      maxHeight: isMobile ? "25vh" : "200px", // Prevents caption from eating the whole screen
                      overflowY: "auto", // In case a caption is extra long, she can scroll within the card
                    }}
                  >
                    <p
                      style={{
                        fontSize: isMobile ? "0.85rem" : "1.1rem",
                        lineHeight: "1.4",
                        color: "#800e13",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "500",
                        margin: 0,
                      }}
                    >
                      {item.caption}
                    </p>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap');
            
            body, html { 
              margin: 0; 
              padding: 0;
              height: 100vh;
              width: 100%;
              overflow: hidden; 
            }

            .slick-list {
              overflow: hidden !important;
              margin: 0 !important;
            }

            .hearts-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
            }

            .heart {
              position: absolute;
              bottom: -50px;
              font-size: 20px;
              color: rgba(255, 77, 109, 0.3);
              animation: float 12s linear infinite;
              opacity: 0;
            }

            @keyframes float {
              0% { transform: translateY(0) rotate(0deg); opacity: 0; }
              10% { opacity: 0.5; }
              100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
            }

            ${[...Array(12)]
              .map(
                (_, i) => `
              .heart:nth-child(${i + 1}) {
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 12}s;
              }
            `
              )
              .join("")}

            .slick-slide { opacity: 0; transition: opacity 0.5s ease; }
            .slick-active { opacity: 1; }
          `}
        </style>
      </Box>
    </ThemeProvider>
  );
};

export default App;
