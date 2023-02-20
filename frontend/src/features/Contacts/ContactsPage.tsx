import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function ContactsPage(): JSX.Element {
  return (
    <div className="contacts">
      <div className="container contacts__container">
        <div className="contacts__flex">
          <div className="contacts__item"></div>
          <YMaps>
            <Map
              defaultState={{
                center: [59.911597, 30.267431],
                zoom: 12,
              }}
            >
              <Placemark geometry={[59.911597, 30.267431]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
