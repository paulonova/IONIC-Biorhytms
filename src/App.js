import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const targetDate = new Date().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {birthDate && (
          <BiorhythmCard targetDate={targetDate} birthDate={birthDate} />
        )}
        <IonItem>
          <IonLabel position='stacked'>Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat='MMM DD YYYY'
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
