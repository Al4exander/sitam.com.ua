import React, {useEffect} from 'react';
import {WorkWithComponent} from "./WorkWIth";

export function HomePage() {

    useEffect(() => {
        document.title = 'Ситам - Поставщики услуг для промышленных предприятий';
    }, []);

    return (
      <div>
          <WorkWithComponent/>
      </div>
  );
}

