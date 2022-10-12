import React, { PureComponent } from "react";
import { useContext } from "react";
import { QuizContext } from "../Root/Root";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";

const Statistics = () => {
  const statisticsData = useContext(QuizContext);
  const datas = statisticsData.data;
  return (
    <div>
      <h1 className="text-2xl font-semibold italic text-center mt-6">
        Statistics All Topics
      </h1>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          className="mx-auto  mt-10"
          width={500}
          height={400}
          data={datas}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="total" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
