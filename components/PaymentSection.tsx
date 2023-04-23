import React from 'react';

interface PaymentSectionProps {
  children: JSX.Element;
  title: string;
  subtitle: string;
}

const PaymentSection = ({ children, title, subtitle }: PaymentSectionProps) => {
  return (
    <div className='rounded-xs flex flex-row bg-white'>
      <div className='flex flex-col gap-1 pl-5 pt-5'>{children}</div>
      <div className='flex flex-col gap-1 pl-5 pt-5'>
        <span className='text-base font-normal text-black'>{title}</span>
        <span className='text-sm font-normal text-section-subtitle'>
          {subtitle}
        </span>
      </div>
    </div>
  );
};
export { PaymentSection };
