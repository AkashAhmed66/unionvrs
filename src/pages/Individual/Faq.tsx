import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccordionItem from '../../components/ui/AccordionItem';

const faqData = [
    {
      question: `How do you ensure the workers' good health and role suitability?`,
      answer: `Workers are selected taking extreme care in assessing their physical and mental condition. They are not brought in until a medical examination has been conducted and reviewed.`,
    },
    {
      question: `When was Mueen Human Resources Company established?`,
      answer: `Mueen Human Resources Company was established to provide top-tier recruitment services. Our founding was driven by the goal of bridging the gap between qualified candidates and employers in need of reliable talent.`,
    },
    {
      question: `Are the workers trained?`,
      answer: `Yes, all our workers undergo comprehensive training programs to ensure they possess the necessary skills and are well-acquainted with the standards of their assigned roles before deployment.`,
    },
    {
        question: `Do you offer a trial period for long-term contracts?`,
        answer: `Yes, we offer a probationary period for long-term contracts. This allows you to assess the worker's performance and ensure they are a good fit for your household or company.`,
    },
    {
        question: `Do you provide a replacement if the worker is unable to work?`,
        answer: `Yes, we provide a replacement if a worker is unable to continue their duties due to health reasons or other unforeseen circumstances, as stipulated in our service agreement.`,
    },
    {
        question: `What are the rates and fees of your services?`,
        answer: `Our rates and fees are competitive and transparent. They vary depending on the service requested and the contract duration. Please contact us for a detailed quotation.`,
    },
    {
        question: `Is your company licensed and insured?`,
        answer: `Yes, Mueen Human Resources Company is fully licensed by the relevant authorities and carries comprehensive insurance to protect both our clients and our workers.`,
    },
    {
        question: `Can I request a housemaid for a one-time service?`,
        answer: `We specialize in long-term and short-term contracts. While we primarily focus on these, please contact our support team to discuss the availability of one-time services in your area.`,
    },
    {
        question: `How do I get started with your housemaid services?`,
        answer: `Getting started is simple. You can contact us through our website or visit one of our branches. Our team will guide you through the process of selecting and hiring a housemaid that meets your needs.`,
    }
];
  

const IndividualFaq = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop')" }}
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
                <span>Individual Sector</span>
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

export default IndividualFaq; 