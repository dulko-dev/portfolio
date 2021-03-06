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
    strenghts: true,
    facts: true,
    tech: true,
  });

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#cont");
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
    if (e.target.textContent.startsWith("About")) {
      setChangeSign((prev) => ({ ...prev, who: !changeSign["who"] }));
    }

    if (e.target.textContent.startsWith("Strenghts")) {
      setChangeSign((prev) => ({
        ...prev,
        strenghts: !changeSign["strenghts"],
      }));
    }

    if (e.target.textContent.startsWith("Facts")) {
      setChangeSign((prev) => ({ ...prev, facts: !changeSign["facts"] }));
    }
  };

  const handleTech = (e) => {
    if (e.target.textContent.includes("Stack")) {
      setChangeSign((prev) => ({ ...prev, tech: !changeSign["tech"] }));
    }
    setIcon(true);
  };

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTag fix={stackUpper} id="contImg">
          <Image src={myAvatar} className="photoAbout" alt='animated avatar' />
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
              About Me
              <PlusIcon icon={changeSign.who ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <TextTagP open={!changeSign.who}>
            Hi, my name is Kamil and I live in Wroclaw. I have started my
            adventure with programming since February 2020. When I received a
            books written by Jon Duckett and I started learning some basics of
            html, css and javascript. Two years ago I gratuated from Coderslab
            School where I ordered and expanded my knowledge of frontend. After
            it I have been improving my skills and learning the new technology.
            This is definitely my passion where I don't count how much time I
            have been spending with code.
          </TextTagP>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.strenghts}>
              Strenghts
              <PlusIcon icon={changeSign.strenghts ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <Strenghts open={!changeSign.strenghts}>
            <StrenghtsList>
              I'm well organized person, who has plan for myself,
            </StrenghtsList>
            <StrenghtsList>
              I'm very inquired and diligent person, who always follow an aim
              and look for the solution.
            </StrenghtsList>
            <StrenghtsList>
              I like studying new things, which give the opportunities to new
              challenges and I try to use it in following project.
            </StrenghtsList>
            <StrenghtsList>
              I always try be a helpful and with pleasure to share my knowledge
            </StrenghtsList>
          </Strenghts>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.facts}>
              Facts
              <PlusIcon icon={changeSign.facts ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <Strenghts open={!changeSign.facts}>
            <StrenghtsList>
              Every day I work hard to be a professional frontend developer,
            </StrenghtsList>
            <StrenghtsList>
              I used to train Taekwondo for about 12 years. At this time I had
              achieved 1st students kup and won couple of tournaments,
            </StrenghtsList>
            <StrenghtsList>
              I like British sense of humour, point-and-click adventure games,
              sudoku and NBA,
            </StrenghtsList>
            <StrenghtsList>
              Favourite TV series: Big Bang Theory and How I Met Your Mother,
            </StrenghtsList>
            <StrenghtsList>
              Favourite football team: Manchester United.
            </StrenghtsList>
          </Strenghts>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleTech} open={!changeSign.tech}>
              Stack
              <PlusIcon icon={changeSign.tech ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <IconContener open={!changeSign.tech}>
            {iconsFolder.map((icon) => (
              <IconDiv key={icon.id} className="textTag">
                <IconImage
                  src={icon.img}
                  className={"iconImg"}
                  alt={icon.name}
                />
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
