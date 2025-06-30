import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { value: '28,000+', label: 'Long-Term Contracts' },
    { value: '11,000+', label: 'Sourced Personnel' },
    { value: '98%', label: 'Employment Rate' },
];

const IndividualOverview = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560264418-c4447361158a?q=80&w=1770&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Overview
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Individual Sector</span>
                <ChevronRight size={20} />
                <span>Overview</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1582719182343-a9176d654260?q=80&w=1770&auto=format&fit=crop" alt="Housekeeping service" className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-teal-500 font-semibold">OVERVIEW</p>
              <h2 className="text-4xl font-bold text-[#001f3f] mt-4 leading-snug">
                At Mueen, we're not simply redefining human resources; we're bringing a touch of reassurance to your doorstep.
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Our individual solutions comprise of extensively trained personnel adept at delivering a variety of services. Imagine having our dedicated team handle all your daily tasks, saving you time and allowing you to enjoy your day worry-free.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Your comfort is our top priority. Our highly trained and qualified workers provide exceptional services that meet your diverse needs and expectations. Our goal is not only to offer high standards of service; we're also here to help you unwind and be more productive with your time. It's a win-win; we support you so that you can continue to support our communities more effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-teal-400 text-white">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {stats.map((stat, index) => (
                      <div key={index}>
                          <p className="text-5xl font-bold">{stat.value}</p>
                          <p className="mt-2 text-lg">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <p className="text-teal-500 font-semibold">HOW TO APPLY</p>
                    <h2 className="text-4xl font-bold text-[#001f3f] mt-4 leading-snug">
                        Our Mueen app allows quick and easy bookings, from the comfort of your home.
                    </h2>
                    <ol className="mt-6 space-y-4 text-gray-600">
                        <li>01. Download the "Mueen" application <a href="#" className="text-blue-500 font-bold">IOS App</a> | <a href="#" className="text-blue-500 font-bold">Android App</a></li>
                        <li>02. Register with your phone number</li>
                        <li>03. Choose the corresponding service from the list below</li>
                        <li>04. Select the correct package and contract period</li>
                        <li>05. Complete the payment using the payment method you prefer.</li>
                    </ol>
                    <p className="mt-6 text-gray-600">As soon as payment is received, the contract will be activated, and you will receive a confirmation SMS.</p>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img src="https://images.unsplash.com/photo-1614926017290-3c737038c4d2?q=80&w=1780&auto=format&fit=crop" alt="Mueen App on phone" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualOverview; 