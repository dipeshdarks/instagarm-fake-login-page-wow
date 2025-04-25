import React from 'react';

const AppDownload: React.FC = () => {
  return (
    <div className="max-w-sm w-full mt-4 text-center">
      <p className="text-sm mb-4">Get the app.</p>
      <div className="flex justify-center gap-2">
        <a href="#" className="block">
          <img
            alt="Get it on Google Play"
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            className="h-10"
          />
        </a>
        <a href="#" className="block">
          <img
            alt="Get it on App Store"
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            className="h-10"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;