import React from 'react';

import { Wheel } from 'react-custom-roulette';

const data = [
  { option: '0', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '2', style: { backgroundColor: 'blue', textColor: 'black' } },
];

export default function Disk() {
  return (
    <>
      <Wheel
        mustStartSpinning={0}
        prizeNumber={3}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => {}}
      />
    </>
  );
}
