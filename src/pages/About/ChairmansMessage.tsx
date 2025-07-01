import React from 'react';
import MessagePageLayout from '../../components/ui/MessagePageLayout';
import usePageTitle from '../../hooks/usePageTitle';

const ChairmansMessage = () => {
  usePageTitle("Chairman's Message");

  const chairmanQuote = (
    <>
      Union is fully committed to excellence in every facet of its operations. 
      Our journey is not solely about meeting the needs of today; it is also about 
      anticipating and exceeding the continuously evolving demands and HR trends in the Bangladeshi market.
    </>
  );

  const chairmanParagraphs = [
    `In our pursuit of excellence, we have embarked on several strategic initiatives aligned with Bangladesh's Vision 2041. Firstly, we've expanded our digital capabilities to embrace the latest technological advancements in the HR field.`,
    `This digital transformation is set to enable us to serve you more efficiently and effectively. Additionally, we are placing a strong emphasis on localization, particularly as it relates to sourcing and developing local talents. This is clearly reflected in our localization percentage, as well as our inclusion and female empowerment initiatives.`,
    `Our entire philosophy is driven by a profound belief in the potential for excellence and innovation within our country. As such, we aim to support both local businesses and individuals by sourcing the right assistance and advancing the nation's progress. As we forge ahead in this direction, we are excited about the endless possibilities that await us.`
  ];

  return (
    <MessagePageLayout
      title="Chairman's Message"
      breadcrumb="Chairman's Message"
      quote={chairmanQuote}
      paragraphs={chairmanParagraphs}
      imageUrl="https://images.unsplash.com/photo-1642398372059-ca3c22c0e704?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJtYW58ZW58MHx8MHx8fDA%3D"
    />
  );
};

export default ChairmansMessage; 