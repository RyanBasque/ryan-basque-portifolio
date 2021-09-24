import React, { useEffect, useState } from "react";

import { HomeFirstView, HomeSecondView } from "../../components/molecules";
import { PageDefault } from "../../components/organisms";

import { getData, postData } from "../../services/firebase";

const Home = () => {
  const [secondViewData, setSecondViewData] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getData("experience-data");
        setSecondViewData(response.length ? response : []);
        console.log("response", await getData("experience-data"));
      } catch (error) {
        throw Error("Ops! Parece que algo deu errado :(");
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
