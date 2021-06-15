import React, {useEffect} from 'react';
import './styles/Tender.css';

export function Tender() {

    useEffect(() => {
        document.title = 'У вас тендер? - Sitam';
    }, []);

    return (
      <div>
          <div className='align-center-full page-title-text'>У Вас тендер?</div>
          <div className='container page-under-title-text mb-4 mt-3'>
              ООО «СИТАМ» Ремонт, обслуживание и монтаж промышленного и технологического оборудования предприятий на профессиональном уровне. На все виды работ организация имеет необходимые разрешения и свидетельства.
          </div>

      </div>
  );
}

