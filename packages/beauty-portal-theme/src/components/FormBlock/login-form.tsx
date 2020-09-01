import React, { FunctionComponent, useState, useContext } from 'react';
import { Link, navigate } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { urlFor } from '../../helpers/imageUrl';
import { FormBlockInterface } from './models';
import Form from '../../components/Form';
import { Fieldset, InputText } from '../../components/FormElements';

import './styles.scss';
import AuthContext from 'src/contexts/AuthContext';

const LoginForm: FunctionComponent<FormBlockInterface> = ({
  _rawBody,
  _rawImage,
  headline,
  ctaLabel,
}) => {
  const authContext = useContext(AuthContext);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setvalidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);
  const [hasSubmitted, setSubmission] = useState(false);

  const isValidData = () => {
    if (isValidEmail && isValidPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    if (isValidData()) {
      setIsFormSubmitted(true);
      authContext.setAuth(true);
      navigate('/profile');
    } else {
      setSubmission(true);
    }
  };

  const handleEmailChange = event => {
    setvalidEmail(event.target.value.length > 0);
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setValidPassword(event.target.value.length > 0);
    setPassword(event.target.value);
  };

  return (
    <div className="bp-form">
      {_rawImage && (
        <div className="bp-form_hero">
          <div className="bp-form_content">
            <figure>
              <link
                rel="preload"
                as="image"
                href={`${urlFor(_rawImage)
                  .width(700)
                  .height(392)
                  .quality(80)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <picture
                className="bp-image__placeholder"
                style={{
                  paddingTop: `56.25%`,
                  background: `url(${_rawImage.asset.metadata.lqip})`,
                  backgroundSize: 'cover',
                }}
              >
                <source
                  media="screen and (min-width: 560px)"
                  srcSet={`${urlFor(_rawImage)
                    .width(700)
                    .height(392)
                    .quality(80)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <source
                  media="screen and (min-width: 320px)"
                  srcSet={`${urlFor(_rawImage)
                    .width(559)
                    .height(314)
                    .quality(80)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <img
                  src={urlFor(_rawImage)
                    .width(700)
                    .height(392)
                    .fit('max')
                    .url()}
                  alt={_rawImage.alt}
                />
              </picture>
            </figure>
          </div>
        </div>
      )}
      <div className="bp-form_content bp-form_header">
        <h1 className="bp-form_title">{headline}</h1>
        {_rawBody && (
          <h2 className="bp-form_desc">
            <BlockContent
              serializers={blockTypeDefaultSerializers}
              blocks={_rawBody}
            />
          </h2>
        )}
      </div>
      <div className="bp-form_content">
        <Form onsubmit={handleFormSubmit}>
          <Fieldset legend="Personal Information">
            <InputText
              label="Email"
              type="email"
              id="email"
              required={true}
              value={email}
              onChange={handleEmailChange}
              valid={isValidEmail}
              validate={hasSubmitted}
            />
            <InputText
              label="Password"
              type="password"
              id="password"
              required={true}
              value={password}
              onChange={handlePasswordChange}
              valid={isValidPassword}
              validate={hasSubmitted}
            />
          </Fieldset>
          <div>
            <p>
              Please read our{' '}
              <a href="" target="_blank" rel="noopener noreferrer">
                PRIVACY
              </a>{' '}
              and{' '}
              <a href="" target="_blank" rel="noopener noreferrer">
                COOKIE
              </a>{' '}
              notices to understand how we use your personal data. By clicking
              the below button you agree to our{' '}
              <a href="" target="_blank" rel="noopener noreferrer">
                TERMS AND CONDITIONS
              </a>
              .
            </p>
          </div>
          <input
            type="submit"
            name="submit"
            disabled={isFormSubmitted}
            value={ctaLabel ? ctaLabel : 'Submit'}
            onClick={handleFormSubmit}
            className="bp-form_cta"
          />
          <div className="bp-form_message">
            <Link to="/forgot-password" className="bp-form_link">
              Forgot your password?
            </Link>
          </div>
          <div className="bg-form_message">
            Not a member?
            <Link to="/sign-up" className="bp-form_link">
              Sign up here
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
