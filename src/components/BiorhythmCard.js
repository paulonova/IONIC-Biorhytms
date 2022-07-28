import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonTitle } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../calculations";
import BiorhythmChart from "./BiorhythmChart";
import "./BiorhythmCard.css";

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
    <IonCard className='biorhythm-card ion-text-center'>
      <IonCardHeader>
        <IonTitle>{formatDate(targetDate)}</IonTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p className='physical'>Physical: {physical.toFixed(4)}</p>
        <p className='emotional'>Emotional: {emotional.toFixed(4)}</p>
        <p className='intellectual'>Intelectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;
