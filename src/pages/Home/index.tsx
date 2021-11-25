import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { HomeFirstView, HomeSecondView } from "../../components/molecules";
import { PageDefault } from "../../components/organisms";
import { ExperienceData } from "../../models/experienceData";

import { getData } from "../../services/firebase";
import { experienceFormatter } from "./../../utils/dataFormater";

const Home = () => {
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
  const [fadeBlur, setFadeBlur] = useState<boolean>(false);
  const [showBlack, setShowBlack] = useState<boolean>(false);

  window.addEventListener("scroll", (): void => {
    const topHeight = window.pageYOffset;
    const elementHeight =
      document.getElementById("firstContainer")?.offsetHeight;

    elementHeight && setShowBlack(topHeight > elementHeight + 40);
    setFadeBlur(topHeight > 50);
  });

  useEffect(() => {
    try {
      getData("experience-data", (data: ExperienceData[]) =>
        setExperienceData(experienceFormatter(data))
      );
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

  return (
    <PageDefault fadeHeaderBlur={fadeBlur} showHeaderInBlack={showBlack}>
      <HomeFirstView />
      <HomeSecondView data={experienceData} />
    </PageDefault>
  );
};

export default Home;
