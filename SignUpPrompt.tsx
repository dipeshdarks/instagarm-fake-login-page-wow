import React from 'react';

const SignUpPrompt: React.FC = () => {
  return (
    <div className="bg-white p-5 border border-gray-300 rounded-sm max-w-sm w-full mt-4 text-center">
      <p className="text-sm">
        Don't have an account?{' '}
        <a href="#signup" className="text-blue-500 font-semibold">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignUpPrompt;