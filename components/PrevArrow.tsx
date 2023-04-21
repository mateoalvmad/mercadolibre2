import React from 'react';

const PrevArrow = ({ onClick }: any) => {
  return (
      <div >
        <svg
        className='absolute h-[117] w-[117] z-10 top-1/4 -left-16 cursor-pointer' onClick={onClick}
          width='117'
          height='117'
          viewBox='0 0 117 117'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_1417_6)'>
            <circle
              cx='58.5'
              cy='54.5'
              r='54.5'
              transform='rotate(-180 58.5 54.5)'
              fill='white'
            />
          </g>
          <path
            d='M43.8812 56.3674C42.7094 55.2088 42.7094 53.3273 43.8812 52.1688L61.8812 34.3733C63.0531 33.2147 64.9562 33.2147 66.1281 34.3733C67.3 35.5319 67.3 37.4134 66.1281 38.5719L50.2469 54.2727L66.1187 69.9735C67.2906 71.132 67.2906 73.0135 66.1187 74.1721C64.9469 75.3307 63.0437 75.3307 61.8719 74.1721L43.8719 56.3766L43.8812 56.3674Z'
            fill='#3483FA'
          />
          <defs>
            <filter
              id='filter0_d_1417_6'
              x='0'
              y='0'
              width='117'
              height='117'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_1417_6'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_1417_6'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>
  );
};

export default PrevArrow;
