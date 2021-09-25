import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { HomeFirstView, HomeSecondView } from "../../components/molecules";
import { PageDefault } from "../../components/organisms";
import { ExperienceData } from "../../models/experienceData";

import { getData } from "../../services/firebase";

const Home = () => {
  const [secondViewData, setSecondViewData] = useState<ExperienceData[]>([]);

  useEffect(() => {
    try {
      getData("experience-data", (data: ExperienceData[]) => {
        const response: ExperienceData[] = [];

        for (let value in data) {
          response.push(data[value]);
        }

        const compare = (a: ExperienceData, b: ExperienceData) => {
          if (a.count > b.count) return 1;
          if (b.count > a.count) return -1;
          return 0;
        };

        setSecondViewData(response.sort(compare));
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

  return (
    <PageDefault>
      <HomeFirstView />
      <HomeSecondView data={secondViewData} />
    </PageDefault>
  );
};

export default Home;
