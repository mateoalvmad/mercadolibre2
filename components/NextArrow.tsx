import React from 'react';

const NextArrow = ({ onClick }: any) => {
  return (
      <div className='absolute h-[117] w-[117] top-1/4 -right-16 cursor-pointer' onClick={onClick}>
        <svg
          width='117'
          height='117'
          viewBox='0 0 117 117'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_1417_10)'>
            <circle cx='58.5' cy='54.5' r='54.5' fill='white' />
          </g>
          <path
            d='M73.1188 52.6326C74.2906 53.7912 74.2906 55.6727 73.1188 56.8312L55.1188 74.6267C53.9469 75.7853 52.0438 75.7853 50.8719 74.6267C49.7 73.4681 49.7 71.5866 50.8719 70.4281L66.7531 54.7273L50.8813 39.0265C49.7094 37.868 49.7094 35.9865 50.8813 34.8279C52.0531 33.6693 53.9563 33.6693 55.1281 34.8279L73.1281 52.6234L73.1188 52.6326Z'
            fill='#3483FA'
          />
          <defs>
            <filter
              id='filter0_d_1417_10'
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
                result='effect1_dropShadow_1417_10'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_1417_10'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>
  );
};

export default NextArrow;
