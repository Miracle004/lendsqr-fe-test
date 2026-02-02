import React, { type InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showPasswordToggle?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  type = 'text',
  showPasswordToggle = false,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const inputType = showPasswordToggle && showPassword ? 'text' : type;
  
  const inputClasses = [
    styles.input,
    error && styles['input--error'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
      
      <div className={styles.inputContainer}>
        <input
          type={inputType}
          className={inputClasses}
          {...props}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        )}
      </div>
      
      {error && <span className={styles.error}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default Input;
