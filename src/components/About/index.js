import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  AboutContainer,
  AboutTag,
  AboutTagTitle,
  TextTag,
  TextTagTitle,
  TextTagP,
  AboutContent,
  Image,
  IconImage,
  IconDiv,
  IconContener,
  IconText,
  Arrow,
  PlusIcon,
  Strenghts,
  StrenghtsList,
} from "./style";
import { iconsFolder } from "./icons";
import myAvatar from "../../assets/myAvatar.png";

const About = () => {
  const [stackUpper, setStackUpper] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [icon, setIcon] = useState(false);
  const [changeSign, setChangeSign] = useState({
    who: true,
    what: true,
    do: true,
    tech: true,
  });

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#cont");
      console.log(el.getBoundingClientRect().bottom);
      if (
        el.getBoundingClientRect().top <= 0 &&
        el.getBoundingClientRect().bottom > 0
      ) {
        setStackUpper(true);
      } else {
        setStackUpper(false);
      }
    };
    window.addEventListener("scroll", aboutFixed);
  }, []);

  useEffect(() => {
    const arrow = document.querySelector("#cont");
    const handleArrow = () => {
      const check = arrow.getBoundingClientRect().top;
      if (check <= 0) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleArrow);
  }, []);

  useEffect(() => {
    let el = document.querySelector("#cont");
    let photoAbout = document.querySelector(".photoAbout");
    let titleAbout = document.querySelector(".titleAbout");

    const bottomSucks = () => {
      let value = el.getBoundingClientRect().bottom;
      if (el.getBoundingClientRect().bottom <= window.innerHeight) {
        photoAbout.style.opacity = titleAbout.style.opacity = value * 0.002;
      } else {
        photoAbout.style.opacity = titleAbout.style.opacity = "1";
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  useEffect(() => {
    if (icon === true) {
      gsap.to(".textTag", {
        duration: 1,
        delay: 1,
        stagger: 0.2,
        y: 0,
        opacity: 1,
      });
    }
  }, [icon]);

  useEffect(() => {
    AOS.init({});
  }, []);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleInfo = (e) => {
    if (e.target.textContent.startsWith("Who")) {
      setChangeSign((prev) => ({ ...prev, who: !changeSign["who"] }));
    }

    if (e.target.textContent.startsWith("What")) {
      setChangeSign((prev) => ({ ...prev, what: !changeSign["what"] }));
    }

    if (e.target.textContent.startsWith("Facts")) {
      setChangeSign((prev) => ({ ...prev, do: !changeSign["do"] }));
    }
  };

  const handleTech = (e) => {
    if (e.target.textContent.includes("Technology")) {
      setChangeSign((prev) => ({ ...prev, tech: !changeSign["tech"] }));
    }
    setIcon(true);
  };

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTag fix={stackUpper} id="contImg">
          <Image src={myAvatar} className="photoAbout" />
          <AboutTagTitle className="titleAbout">
            <span style={{ display: "block" }}>About</span> Me
          </AboutTagTitle>
        </AboutTag>
        <TextTag id="cont">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.who}>
              Who I am ?
              <PlusIcon icon={changeSign.who ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <TextTagP open={!changeSign.who}>
            Hi, my name is Kamil and I'm live in Wroclaw. For many years I had
            been working as a sale specialist, but when I achieved everything I
            wanted in this profession I decided to take a step forward. My
            adventure with programming I started above one year ago. When I was
            creating a simple website of the company I worked for, at the
            beginning of 2020. I totally focused on studying HTML, CSS and
            Javscript. Further more I was attendning Coderslab School where I
            ordered and expanded my knowledge of frontend and I was developing
            skills. When I had graduated this school I haven't rested on my
            laurels and I have been boosting my skills and learning a new
            technology like React, NextJs or Expo. I also have some basic
            knowledge and experience in backend technology like Nodejs and
            Express.
          </TextTagP>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.what}>
              What is my strenghts?
              <PlusIcon icon={changeSign.what ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <Strenghts open={!changeSign.what}>
            <StrenghtsList>
              I'm well organized person, who has plan for myself,
            </StrenghtsList>
            <StrenghtsList>
              I'm very inquired and diligent person, who always follow an aim
              and look for the solutions,
            </StrenghtsList>
            <StrenghtsList>
              I like studying new things, which give the opportunities to new
              challenges
            </StrenghtsList>
          </Strenghts>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.do}>
              Facts
              <PlusIcon icon={changeSign.do ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <Strenghts open={!changeSign.do}>
            <StrenghtsList>
              Every day I work very hard to be a professional frontend developer
            </StrenghtsList>
            <StrenghtsList>
              I had been training taekwondo for about 12 years. In the
              intervening years I had achieved 1st students kup and won couple
              of tournaments
            </StrenghtsList>
            <StrenghtsList>
              I like British sense of humour, point-and-click adventure games,
              sudoku and NBA
            </StrenghtsList>
            <StrenghtsList>Favourite TV series: Big Bang Theory</StrenghtsList>
            <StrenghtsList>
              Favourite football team: Manchester United F.C.
            </StrenghtsList>
          </Strenghts>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleTech} open={!changeSign.tech}>
              Technology
              <PlusIcon icon={changeSign.tech ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <IconContener open={!changeSign.tech}>
            {iconsFolder.map((icon) => (
              <IconDiv key={icon.id} className="textTag">
                <IconImage src={icon.img} className={"iconImg"} />
                <IconText className={"iconText"}>{icon.name}</IconText>
              </IconDiv>
            ))}
          </IconContener>
        </TextTag>
      </AboutContent>
      <CSSTransition in={showArrow} timeout={1000} classNames="fade">
        <Arrow icon={faArrowAltCircleUp} onClick={handleUp} />
      </CSSTransition>
    </AboutContainer>
  );
};

export default About;
