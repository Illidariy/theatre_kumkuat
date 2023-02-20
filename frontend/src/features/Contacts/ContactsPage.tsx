import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

function ContactsPage(): JSX.Element {
  return (
    // <YMaps>
    //   <div className="contacts">
    //     {/* <div className="container contacts__container" /> */}
    //     <Map
    //       defaultState={{
    //         center: [59.911597, 30.267431],
    //         zoom: 9,
    //       }}
    //     />
    //     <Placemark geometry={[59.911597, 30.267431]} />
    //   </div>
    // </YMaps>
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
  );
}

export default ContactsPage;
