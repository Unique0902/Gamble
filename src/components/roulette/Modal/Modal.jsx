import React from 'react';

export default function Modal({ colors, selected }) {
  return (
    <div>
      <div>
        <button>Start</button>
      </div>
      <div>
        {colors.map((value, index) => (
          <ul key={index}>
            <button
              onClick={() => {
                selected(value);
              }}
            >
              {value}
            </button>
          </ul>
        ))}
      </div>
      <div>win/lose</div>
    </div>
  );
}
