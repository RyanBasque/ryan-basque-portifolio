import React, { useEffect, useState } from "react";

import { HomeFirstView, HomeSecondView } from "../../components/molecules";
import { PageDefault } from "../../components/organisms";
import { ExperienceData } from "../../models/experienceData";

import { getData } from "../../services/firebase";

const Home = () => {
  const [secondViewData, setSecondViewData] = useState<ExperienceData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        await getData("experience-data", (data: ExperienceData[]) => {
          const response = [];
          for (let value in data) {
            response.push(data[value]);
          }

          setSecondViewData(response);
        });
      } catch (error: any) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <PageDefault>
      <HomeFirstView />
      <HomeSecondView data={secondViewData} />
    </PageDefault>
  );
};

export default Home;
