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
      title="Gamestop Gift Card"
      content="Redeem your reward points today. Get your Gamestop card worth $20.00"
      amount={2000}
      image={reward1}
    />,
    <RewardsCard
      key={2}
      title="Amazon Gift Card"
      content="Redeem your reward points today. Get your Amazon card worth $30.00"
      amount={3000}
      image={reward2}
    />,
    <RewardsCard
      key={3}
      title="Starbucks Gift Card"
      content="Redeem your reward points today. Get your Starbucks amazon card worth $50.00"
      amount={3500}
      image={reward3}
    />,
    <RewardsCard
      key={3}
      title="PSN Gift Card"
      content="Redeem your reward points today. Get your Starbucks amazon card worth $50.00"
      amount={4000}
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
