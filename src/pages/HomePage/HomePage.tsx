import React, {useEffect} from 'react';
import {WorkWithComponent} from "./WorkWIth";
import {HomePageMainWays} from "./HomePageMainWays";

export function HomePage() {

    useEffect(() => {
        document.title = 'Ситам - Поставщики услуг для промышленных предприятий';
    }, []);

    return (
      <>
          <WorkWithComponent/>
          <HomePageMainWays/>
      </>
  );
}

