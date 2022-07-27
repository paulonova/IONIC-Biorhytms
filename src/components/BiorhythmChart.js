import React from "react";
import dayjs from "dayjs";
import { ResponsiveContainer, LineChart, Line, XAxis } from "recharts";
import { calculateBiorhythmSeries } from "../calculations";

const BiorhythmChart = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();
  const data = calculateBiorhythmSeries(birthDate, startDate, 31);
  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart data={data}>
        <XAxis />
        <Line type='natural' dot={false} dataKey='physical' stroke='green' />
        <Line type='natural' dot={false} dataKey='emotional' stroke='red' />
        <Line type='natural' dot={false} dataKey='intellectual' stroke='blue' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhythmChart;
