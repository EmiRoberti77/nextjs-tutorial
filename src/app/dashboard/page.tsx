'use client';
import LineChart from '../../components/charts/linechart';

const metadata = {
  title: 'dash page',
  description: 'emi dash page description',
};

export default function HomeDashboard() {
  const random = (count: number): number => {
    return Math.floor(Math.random() * count);
  };
  const generated = random(2);

  if (generated === 1)
    throw new Error(`could not load home dashboard ${generated}`);

  return <LineChart />;
}
