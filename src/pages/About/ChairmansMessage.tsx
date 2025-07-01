import React from 'react';
import MessagePageLayout from '../../components/ui/MessagePageLayout';
import usePageTitle from '../../hooks/usePageTitle';

const ChairmansMessage = () => {
  usePageTitle("Chairman's Message");

  const chairmanQuote = (
    <>
      Union is fully committed to excellence in every facet of its operations. 
      Our journey is not solely about meeting the needs of today; it is also about 
      anticipating and exceeding the continuously evolving demands and HR trends in the Saudi market.
    </>
  );

  const chairmanParagraphs = [
    `In our pursuit of excellence, we have embarked on several strategic initiatives aligned with the Kingdom's Vision 2030. Firstly, we've expanded our digital capabilities to embrace the latest technological advancements in the HR field.`,
    `This digital transformation is set to enable us to serve you more efficiently and effectively. Additionally, we are placing a strong emphasis on localization, particularly as it relates to sourcing and developing local talents. This is clearly reflected in our Saudization percentage, as well as our inclusion and female empowerment initiatives.`,
    `Our entire philosophy is driven by a profound belief in the potential for excellence and innovation within our Kingdom. As such, we aim to support both local businesses and individuals by sourcing the right assistance and advancing the nation's progress. As we forge ahead in this direction, we are excited about the endless possibilities that await us.`
  ];

  return (
    <MessagePageLayout
      title="Chairman's Message"
      breadcrumb="Chairman's Message"
      quote={chairmanQuote}
      paragraphs={chairmanParagraphs}
      imageUrl="https://images.unsplash.com/photo-1573496398321-b38e07a38a8e?q=80&w=1888&auto=format&fit=crop"
    />
  );
};

export default ChairmansMessage; 