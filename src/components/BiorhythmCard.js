import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonTitle } from "@ionic/react";
import dayjs from "dayjs";

//Method to format the targetdate using day.js library
const formatDate = (targetdate) => {
  return dayjs(targetdate).format("D MMM YYYY");
};

const BiorhythmCard = ({ targetDate }) => {
  return (
    <div>
      <IonCard className='ion-text-center'>
        <IonCardHeader>
          <IonTitle>{formatDate(targetDate)}</IonTitle>
          <IonCardContent>
            <p>Physical: 83%</p>
            <p>Emotional: 34%</p>
            <p>Intelectual: 52%</p>
          </IonCardContent>
        </IonCardHeader>
      </IonCard>
    </div>
  );
};

export default BiorhythmCard;
