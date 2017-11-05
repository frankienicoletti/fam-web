import React from 'react';
import { Hero, RewardsCard } from "../components";
import reward1 from '../images/reward-1.png'
import reward2 from '../images/reward-2.png'
import reward3 from '../images/reward-3.png'
import reward4 from '../images/reward-4.png'


const rewards = () => {
  return [
    <RewardsCard
      key={1}
      title="Streak Freeze"
      content="Streak Freeze allows you to stay in place for one full day of inactivity"
      amount={200}
      image={reward1}
    />,
    <RewardsCard
      key={2}
      title="Streak Freeze"
      content="Streak Freeze allows you to stay in place for one full day of inactivity"
      amount={300}
      image={reward2}
    />,
    <RewardsCard
      key={3}
      title="Streak Freeze"
      content="Streak Freeze allows you to stay in place for one full day of inactivity"
      amount={400}
      image={reward3}
    />,
    <RewardsCard
      key={4}
      title="Streak Freeze"
      content="Streak Freeze allows you to stay in place for one full day of inactivity"
      amount={500}
      image={reward4}
    />,
  ]
};

const Rewards = props => {
  return (
    <div>
      <Hero points={870}/>
      <div className="rewards-wrapper">
        {rewards()}
      </div>
    </div>
  );
};

export default Rewards;
