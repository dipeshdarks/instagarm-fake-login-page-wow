import React from 'react';
import LoginForm from './LoginForm';
import SignUpPrompt from './SignUpPrompt';
import AppDownload from './AppDownload';
import Footer from './Footer';

const InstagramLogin: React.FC = () => {
  const handleLogin = async (
    username: string,
    password: string,
    rememberLogin: boolean
  ) => {
    // This would be replaced with actual authentication in a real app
    console.log('Login attempt:', { username, password, rememberLogin });
    
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, we'll reject if the password is "wrong"
        if (password === 'wrong') {
          reject(new Error('Invalid credentials'));
        } else {
          resolve(undefined);
        }
      }, 1000);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <LoginForm onSubmit={handleLogin} />
        <SignUpPrompt />
        <AppDownload />
      </div>
      <Footer />
    </div>
  );
};

export default InstagramLogin;