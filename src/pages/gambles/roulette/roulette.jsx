import { useState } from 'react';
import Disk from '../../../components/roulette/Disk/Disk';
import Modal from '../../../components/roulette/Modal/Modal';

const colors = ['red', 'green', 'blue'];

export default function Roulette() {
  const [color, setColor] = useState('');

  return (
    <>
      <Disk color={color} />
      <Modal
        colors={colors}
        color={color}
        selected={setColor}
      />
    </>
  );
}
