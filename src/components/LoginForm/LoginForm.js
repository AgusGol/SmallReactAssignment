import './LoginForm.css'
import { useCallback, useState, useRef } from 'react';


function LoginForm() {
    const [fieldType, setFieldType] = useState('password');
    const [emailError, setEmailError] = useState(undefined);
    const [passwordError, setPasswordError] = useState(undefined);
    const form = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();

    const onToggleSeePassword = useCallback(() => {
        setFieldType(fieldType === 'password' ? 'text' : 'password')
    }, [fieldType])

    const submitForm = (e) => {
        e.preventDefault();
        if (emailInput.current.value === '') {
            setEmailError('You must enter an email');
            setPasswordError('');
        } else if (passwordInput.current.value === '') {
            setPasswordError('You must enter your password')
            setEmailError('')
        }
        else {
            form.current.submit();
        }
    }

    return (
        <section className='formContainer'>
            <h1>Inloggen</h1>
            <form ref={form}>
                <label htmlFor='email'>Email</label>
                <input ref={emailInput} type='text' name='email' id='email' />
                {emailError && <p className='error'>{emailError}</p>}
                <label htmlFor='password'>Wachtwoord</label>
                <div className='passwordFieldContainer'>
                    <input ref={passwordInput} type={fieldType} name='password' id='password' />
                    <i className="fas fa-eye eyeIcon" onClick={onToggleSeePassword} />
                </div>
                {passwordError && <p className='error'>{passwordError}</p>}
                <div className='rememberPasswordContainer'>
                    <label htmlFor='rememberPassword' id='rememberPasswordLabel'>Omthoud wachtwoord</label>
                    <input type='checkbox' name='rememberPassword' id='rememberPassword' />
                </div>
                <div>
                    <a href='#' className='passwordForget'>Wachtwoord vergeten?</a>
                    <button className='loginBtn' onClick={submitForm}>
                        <i class="fas fa-long-arrow-alt-right" />
                        Inloggen
                    </button>
                </div>
                <div className='registerLinkContainer'>
                    <span>Nog geen account?</span>
                    <a href='#' className='registerLink'>
                        Vul het Klup Partner-formulier.nl
                    </a>
                </div>
            </form>
        </section>
    );
}

export default LoginForm;
