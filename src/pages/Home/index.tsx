import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { HomeFirstView, HomeSecondView } from "../../components/molecules";
import { PageDefault } from "../../components/organisms";
import { ExperienceDataType } from "../../models/experienceData";

import { getData } from "../../services/firebase";
import { experienceFormatter } from "./../../utils/dataFormater";

const Home = () => {
  const [experienceData, setExperienceData] = useState<ExperienceDataType[]>(
    []
  );
  const [fadeBlur, setFadeBlur] = useState<boolean>(false);
  const [showBlack, setShowBlack] = useState<boolean>(false);

  useEffect(() => {
    try {
      getData("experience-data", (data: ExperienceDataType[]) => {
        setExperienceData(experienceFormatter(data));
      });
    } catch (error: any) {
      toast("Ops! Ocorreu um erro ;(", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "error",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offSetHeightDistance = window.pageYOffset;
      const containerOne = document.querySelector("#firstContainer");
      const containerTwo = document.querySelector("#secondContainer");

      if (containerOne && containerTwo) {
        const containerOneHeight = containerOne.getBoundingClientRect().height;
        const containerTwoHeight = containerTwo.getBoundingClientRect().height;

        if (offSetHeightDistance > 40) setFadeBlur(true);
        else setFadeBlur(false);

        if (offSetHeightDistance > containerOneHeight - 10) setShowBlack(true);
        else setShowBlack(false);

        if (offSetHeightDistance > containerOneHeight + containerTwoHeight)
          setShowBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBlack]);

  return (
    <PageDefault fadeHeaderBlur={fadeBlur} showHeaderInBlack={showBlack}>
      <HomeFirstView />
      <HomeSecondView data={experienceData} />
    </PageDefault>
  );
};

export default Home;
