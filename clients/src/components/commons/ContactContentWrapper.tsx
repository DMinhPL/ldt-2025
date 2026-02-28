import React from 'react';
import useHeaderHeight from '../../hooks/useHeaderHeight';

interface Props {
  children: React.ReactNode
}

const ContactContentWrapper: React.FC<Props> = ({ children }) => {
  const headerHeight = useHeaderHeight();

  return (
    <div className="flex flex-wrap lg:flex-row flex-col-reverse pt-7.5 pb-10 lg:py-20 max-w-300 mx-auto" style={{ marginTop: headerHeight }}>
      {children}
    </div>
  );
};

export default ContactContentWrapper;
