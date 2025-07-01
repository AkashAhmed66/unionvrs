import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';

const Commitment = () => {
  usePageTitle('Commitment');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1770&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Commitment
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>About Us</span>
                <ChevronRight size={20} />
                <span>Commitment</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1681505526188-b05e68c77582?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBjb21taXRtZW50fGVufDB8fDB8fHww" 
                alt="Business Commitment" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-bold text-blue-600 uppercase">Our Commitment to Excellence</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mt-2 mb-6">
                Union is on a mission to fill the gaps of our dynamic local labor market, addressing societal needs for human capital and skills.
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  We're not merely recruiting; we're curating teams and solutions designed to facilitate sustainable growth, while complying with ethical and legal standards.
                </p>
                <p>
                  By adeptly aligning talents with opportunities, in accordance with the Bangladeshi Labor Law and global best practices, our workforce solutions are designed to stay ahead of market demands, all within a reasonable pricing framework.
                </p>
                <p>
                  What sets us apart? We are dedicated to providing superior services and consistently improving. We believe this commitment is fundamental to creating added value for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commitment; 