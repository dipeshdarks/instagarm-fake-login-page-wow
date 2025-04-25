import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (username: string, password: string, rememberLogin: boolean) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberLogin, setRememberLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!username.trim() || !password.trim()) {
      setError('Please fill out all fields');
      return;
    }
    
    setIsLoading(true);
    try {
      await onSubmit(username, password, rememberLogin);
    } catch (err) {
      setError('Sorry, your password was incorrect. Please double-check your password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 border border-gray-300 rounded-sm max-w-sm w-full">
      <div className="flex justify-center mb-8">
        <Instagram className="w-12 h-12" />
      </div>
      
      {error && (
        <div className="text-red-500 text-sm text-center mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="relative">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-200 bg-gray-50 px-2 py-3 text-xs rounded-sm focus:outline-none"
            placeholder="Phone number, username, or email"
          />
        </div>
        
        <div className="relative">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 bg-gray-50 px-2 py-3 text-xs rounded-sm focus:outline-none"
            placeholder="Password"
          />
        </div>
        
        <button
          type="submit"
          className={`mt-2 rounded-sm py-1.5 text-sm font-semibold text-white ${
            username && password
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-blue-300 cursor-default'
          } transition-colors`}
          disabled={isLoading || !username || !password}
        >
          {isLoading ? 'Loading...' : 'Log In'}
        </button>
        
        <div className="flex items-center justify-between mt-2">
          <label className="flex items-center text-xs text-gray-500">
            <input
              type="checkbox"
              checked={rememberLogin}
              onChange={() => setRememberLogin(!rememberLogin)}
              className="mr-1 h-3 w-3"
            />
            Save login info
          </label>
          <a href="#forgot-password" className="text-xs text-blue-900">
            Forgot password?
          </a>
        </div>
      </form>
      
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-px bg-gray-300 flex-1"></div>
        <span className="text-sm font-medium text-gray-500">OR</span>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      
      <div className="mt-4 text-center">
        <a href="#facebook-login" className="text-sm text-blue-900 font-semibold flex items-center justify-center gap-2">
          <span className="text-blue-900">
            <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.75,3.984l-2.312,0.005c-2.602,0-4.273,1.727-4.273,4.396v2.025h-2.316c-0.2,0-0.354,0.163-0.354,0.367v2.969c0,0.2,0.153,0.367,0.354,0.367h2.316v7.478c0,0.2,0.164,0.367,0.354,0.367h3.169c0.2,0,0.354-0.163,0.354-0.367v-7.478h2.84c0.2,0,0.354-0.153,0.354-0.354V10.77c0-0.094-0.037-0.188-0.104-0.252c-0.066-0.067-0.158-0.104-0.252-0.104h-2.84V8.675c0-0.857,0.207-1.295,1.339-1.295l1.642-0.005c0.197,0,0.354-0.153,0.354-0.354V4.351C18.104,4.149,17.95,3.984,17.75,3.984z"></path>
            </svg>
          </span>
          Log in with Facebook
        </a>
      </div>
    </div>
  );
};

export default LoginForm;