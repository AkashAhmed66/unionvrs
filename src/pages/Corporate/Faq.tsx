import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccordionItem from '../../components/ui/AccordionItem';
import usePageTitle from '../../hooks/usePageTitle';

const faqData = [
    {
      question: 'What is the estimated wait time for the arrival of the worker?',
      answer: 'Visas are promptly available upon request, ensuring a swift recruitment and deployment process for the required employees. The timeline for receiving the worker varies based on the job and nationality.',
    },
    {
      question: 'Should I pay the wages of the hired employees?',
      answer: 'Yes, as the employer, you are responsible for paying the wages of the employees you hire. Union facilitates the recruitment process, but the employment contract and its obligations are between you and the employee.',
    },
    {
      question: "Do I get charged for the employees' non-working days?",
      answer: 'This depends on the terms of the employment contract. Typically, payment for non-working days (like weekends or public holidays) is governed by local labor laws and the specific agreement you have with the employee.',
    },
    {
        question: 'Is there any legal liability I am responsible for when I hire any workers?',
        answer: 'Yes, employers have legal responsibilities covering aspects like workplace safety, wage payment, and adherence to labor laws. Union ensures that all our placements are compliant with local regulations to minimize your legal risks.',
    },
    {
        question: "Will my outsourced employees comply with my company's policies and legal authority?",
        answer: "While outsourced employees are on Union's payroll, they are expected to adhere to your company's policies and procedures as part of their work assignment. We work with you to ensure a clear understanding of workplace expectations.",
    },
    {
        question: 'Are there any costs for replacing employees who do not fit the position?',
        answer: 'Union offers a guarantee period during which we will replace an employee at no additional cost if they are not a good fit for the position, subject to the terms of our service agreement.',
    },
    {
        question: 'What guarantees are offered by Union?',
        answer: 'We guarantee that all candidates are vetted and qualified for the role. We also offer a replacement guarantee and ensure full compliance with all local labor laws and regulations to provide you with a reliable and risk-free hiring process.',
    },
];
  

const CorporateFaq = () => {
  usePageTitle('Corporate FAQ');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1770&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                FAQs
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Corporate Sector</span>
                <ChevronRight size={20} />
                <span>FAQs</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[#001f3f] mb-8">FAQs</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateFaq; 