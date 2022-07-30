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
import { useLocalStorage } from "./hooks";

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
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
          <IonLabel position='fixed'>Birth Date:</IonLabel>
          <IonDatetime
            displayFormat='MMM DD YYYY'
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position='fixed'>Target Date:</IonLabel>
          <IonDatetime
            displayFormat='MMM DD YYYY'
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
