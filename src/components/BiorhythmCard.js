import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonTitle } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../calculations";
import BiorhythmChart from "./BiorhythmChart";

//Method to format the targetdate using day.js library
function formatDate(isoString) {
  return dayjs(isoString).format("D MMM YYYY");
}

function BiorhythmCard({ birthDate, targetDate }) {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonTitle>{formatDate(targetDate)}</IonTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p>Physical: {physical.toFixed(4)}</p>
        <p>Emotional: {emotional.toFixed(4)}</p>
        <p>Intelectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;
