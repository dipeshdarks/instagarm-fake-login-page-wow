import React from 'react';

const FOOTER_LINKS = [
  'Meta',
  'About',
  'Blog',
  'Jobs',
  'Help',
  'API',
  'Privacy',
  'Terms',
  'Top Accounts',
  'Locations',
  'Instagram Lite',
  'Threads',
  'Contact Uploading & Non-Users',
  'Meta Verified',
];

const LANGUAGES = [
  'English',
  'Español',
  'Português (Brasil)',
  'Français (France)',
  'Deutsch',
  'Italiano',
  'Русский',
  '한국어',
  '日本語',
  '中文(简体)',
  'العربية',
  'हिन्दी',
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 mb-12 max-w-4xl mx-auto text-xs text-gray-500">
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
        {FOOTER_LINKS.map((link) => (
          <a key={link} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </nav>
      
      <div className="flex justify-center items-center gap-4">
        <select
          className="bg-transparent text-xs text-gray-500 border-none focus:outline-none"
          defaultValue="English"
        >
          {LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        
        <span>© 2025 Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default Footer;