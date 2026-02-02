import React, { useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: '', password: '' });
    
    // Validation
    let hasError = false;
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
      hasError = true;
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      hasError = true;
    }
    
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate API call
    setIsLoading(true);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any valid email/password
      // In production, this would call an actual API
      console.log('Login attempt:', { email, password });
      
      // Store auth state (simplified)
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      setErrors({
        email: '',
        password: 'Login failed. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        autoComplete="email"
        disabled={isLoading}
      />
      
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        showPasswordToggle
        autoComplete="current-password"
        disabled={isLoading}
      />
      
      <a href="/forgot-password" className={styles.forgotPassword}>
        Forgot Password?
      </a>
      
      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={isLoading}
        disabled={!email || !password}
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
