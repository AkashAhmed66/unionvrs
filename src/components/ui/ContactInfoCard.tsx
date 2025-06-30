import React from 'react';

import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactInfoCard = () => (
    <div className="bg-blue-600 text-white p-8 rounded-lg h-full">
        <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            <span className="text-2xl font-bold">mueen</span>
        </div>
        <h3 className="text-2xl font-semibold mt-6">Backing Your Growth</h3>
        <div className="mt-8">
            <h4 className="font-bold">Riyadh (Head Office)</h4>
            <p className="mt-2">Makkah Al Mukarramah Br Rd, AR Rabwah, Riyadh 12821</p>
        </div>
        <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
                <Phone />
                <span>+966 920005708</span>
            </div>
            <div className="flex items-center space-x-3">
                <Mail />
                <span>info@mueen.com.sa</span>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-500 flex space-x-4">
            <Linkedin className="cursor-pointer hover:text-blue-300" />
            <Facebook className="cursor-pointer hover:text-blue-300" />
            <Twitter className="cursor-pointer hover:text-blue-300" />
            <Instagram className="cursor-pointer hover:text-blue-300" />
        </div>
    </div>
);


export default ContactInfoCard; 