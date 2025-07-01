import React from 'react';

import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactInfoCard = () => (
    <div className="bg-blue-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg h-full">
        <div className="flex items-center space-x-2 flex-wrap">
            <img src="/logo.png" alt="Union Logo" width="250" height="250" className="object-contain flex-shrink-0 logo-large" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mt-6">Backing Your Growth</h3>
        <div className="mt-6 sm:mt-8">
            <h4 className="font-bold">Dhaka (Head Office)</h4>
            <p className="mt-2 text-sm sm:text-base break-words">78 Nayapaltan, Ground Floor, Shanjari Tower, Dhaka -1000, Bangladesh</p>
        </div>
        <div className="mt-6 sm:mt-8 space-y-4">
            <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" />
                <span className="text-sm sm:text-base">+8801717002442</span>
            </div>
            <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" />
                <span className="text-sm sm:text-base">+8801716894670</span>
            </div>
            <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" />
                <span className="text-sm sm:text-base">+8802222227072</span>
            </div>
            <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">unionRL.bd@gmail.com</span>
            </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-blue-500 flex space-x-4">
            <Linkedin className="cursor-pointer hover:text-blue-300 flex-shrink-0" />
            <Facebook className="cursor-pointer hover:text-blue-300 flex-shrink-0" />
            <Twitter className="cursor-pointer hover:text-blue-300 flex-shrink-0" />
            <Instagram className="cursor-pointer hover:text-blue-300 flex-shrink-0" />
        </div>
    </div>
);


export default ContactInfoCard; 