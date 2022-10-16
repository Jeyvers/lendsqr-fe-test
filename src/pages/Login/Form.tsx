import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import styles from '../../css/login.module.css';
import { FormInputs } from '../../assets/strings/model';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormInputs>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const forgotPassword = () => {
    const affirm = confirm('Do you want to reset your details?');

    if (affirm) {
      localStorage.setItem('lendsqrLogin', '');
      alert('Your login details have been reset, login to register again');
    }
  };

  const setLogin = ({ email, password }: FormInputs) => {
    const prevLogin: FormInputs = JSON.parse(
      localStorage.getItem('lendsqrLogin') || '{}'
    );

    if (prevLogin.email && prevLogin.password) {
      if (prevLogin.email === email && prevLogin.password === password) {
        navigate('/dashboard');
      } else {
        alert('LOGIN CREDENTIALS ARE INCORRECT');
      }
    } else {
      localStorage.setItem('lendsqrLogin', JSON.stringify(formData));
      navigate('/dashboard');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='email'
        pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
        placeholder='Email'
        value={formData.email}
        required
        onChange={(e) =>
          setFormData((prevState) => ({ ...prevState, email: e.target.value }))
        }
      />
      <label htmlFor='password'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={formData.password}
          required
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </label>
      <button
        type='button'
        className={styles.forgotPassword}
        onClick={forgotPassword}
      >
        FORGOT PASSWORD?
      </button>
      <input type='submit' value='LOG IN' />
    </form>
  );
};

export default Form;
