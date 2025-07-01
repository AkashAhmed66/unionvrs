import React from 'react';
import MessagePageLayout from '../../components/ui/MessagePageLayout';
import usePageTitle from '../../hooks/usePageTitle';

const CEOsMessage = () => {
  usePageTitle("CEO's Message");

  const ceoQuote = (
    <>
      At Union, our vision extends beyond recruitment; we are dedicated to fostering growth 
      and empowering talent to build a prosperous future for Bangladesh.
    </>
  );

  const ceoParagraphs = [
    `Innovation is the cornerstone of our strategy. We are continuously investing in technology and our people to redefine the standards of human resources. Our goal is to create a seamless and efficient experience for both our clients and the candidates we place.`,
    `We believe that the heart of any successful enterprise is its people. That is why we are committed to not just filling positions, but to building careers. Through targeted training and development programs, we ensure our workforce is equipped for the challenges of tomorrow.`,
    `As we look to the future, we are excited to continue playing a pivotal role in Bangladesh's development. We are expanding our services, forging new partnerships, and remain steadfast in our commitment to delivering excellence and driving progress across all sectors.`
  ];

  return (
    <MessagePageLayout
      title="CEO's Message"
      breadcrumb="CEO's Message"
      quote={ceoQuote}
      paragraphs={ceoParagraphs}
      imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop"
    />
  );
};

export default CEOsMessage; 