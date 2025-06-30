import React from 'react';
import { Home, ChevronRight, Share2, Phone, Mail, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactInfoCard from '../components/ui/ContactInfoCard';
import FormInput from '../components/ui/FormInput';

const branches = [
    { city: 'Riyadh', address: 'Eastern Ring Rd, Ar Rayyan, Riyadh 11564' },
    { city: 'Riyadh', address: 'Abi Bakr As Siddiq Rd, An Nafal, Riyadh 12571' },
    { city: 'Jeddah', address: 'Prince Sultan Rd, Al Muhammadiyah, Jeddah 23623' },
    { city: 'Dammam', address: 'Prince Mohammed Bin Fahd Road, Al Tubayshi, Dammam 32233' },
    { city: 'Abha', address: 'King Fahad Rd, Al Manhal, Abha 62521' },
];

const Branch = ({ city, address }: { city: string, address: string }) => (
    <div>
        <h4 className="font-bold text-blue-400">{city}</h4>
        <p className="mt-2 text-gray-400">{address}</p>
    </div>
);

const Contact = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[400px] text-white"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1770&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                Contact Us
                            </h1>
                            <div className="flex items-center space-x-2 mt-4 text-lg">
                                <Link to="/"><Home size={20} /></Link>
                                <ChevronRight size={20} />
                                <span>Contact Us</span>
                            </div>
                        </div>
                        <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
                            <Share2 size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact & Branches Section */}
            <section className="bg-[#001f3f] py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                            <ContactInfoCard />
                        </div>
                        <div className="lg:w-2/3 text-white">
                            <h2 className="text-3xl font-bold mb-8">Our Branches</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {branches.map((branch, index) => (
                                    <Branch key={index} {...branch} />
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-gray-700">
                                <p className="text-gray-400">
                                    You may reach any of our branches through the following contact information:
                                </p>
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4 text-white">
                                    <div className="flex items-center space-x-3">
                                        <Phone />
                                        <span className='text-lg'>+966 920005708</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail />
                                        <span className='text-lg'>info@mueen.com.sa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-semibold text-blue-600">GET IN TOUCH WITH US</p>
                        <h2 className="text-3xl font-bold mt-2 text-[#001f3f]">
                            We are always happy to receive your enquiries and feedback. Please fill in the form below and we will get back to you shortly. We appreciate your interest.
                        </h2>

                        <form className="mt-8">
                            <div className="flex items-center space-x-8 mb-8">
                                <label className="flex items-center">
                                    <input type="radio" name="enquiryType" value="corporate" className="form-radio h-5 w-5 text-blue-600" defaultChecked />
                                    <span className="ml-2 text-gray-700">Corporate</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="enquiryType" value="individual" className="form-radio h-5 w-5 text-blue-600" />
                                    <span className="ml-2 text-gray-700">Individual</span>
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <select className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <option>SELECT AN INDUSTRY</option>
                                    <option>IT & Consulting</option>
                                    <option>Healthcare</option>
                                    <option>Construction</option>
                                </select>
                                <div></div>
                                <FormInput label="First Name" id="firstName" name="firstName" placeholder="FIRST NAME*" required />
                                <FormInput label="Last Name" id="lastName" name="lastName" placeholder="LAST NAME*" required />
                                <FormInput label="Email" id="email" name="email" type="email" placeholder="EMAIL*" required />
                                <FormInput label="Phone Number" id="phone" name="phone" type="tel" placeholder="PHONE NUMBER*" required />
                                <FormInput label="Subject" id="subject" name="subject" placeholder="SUBJECT*" required />
                                <FormInput label="Company Name" id="company" name="company" placeholder="COMPANY NAME*" />
                            </div>
                            <div className="mt-6">
                                <textarea
                                    id="comments"
                                    name="comments"
                                    rows={5}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="COMMENTS"
                                ></textarea>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 