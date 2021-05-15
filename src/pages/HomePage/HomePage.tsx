import React, {useEffect} from 'react';
import {WorkWithComponent} from "./WorkWIth";

export function HomePage() {

    useEffect(() => {
        document.title = 'Sitam';
    }, []);

    return (
      <div>
          <WorkWithComponent/>
      </div>
  );
}

