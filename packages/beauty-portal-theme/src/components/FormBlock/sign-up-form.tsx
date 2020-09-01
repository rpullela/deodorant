import React, { FunctionComponent, useState, useContext } from 'react';
import { Link, navigate } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { urlFor } from '../../helpers/imageUrl';
import { FormBlockInterface } from './models';
import Form from '../../components/Form';
import {
  Fieldset,
  InputText,
  InputCheckbox,
} from '../../components/FormElements';
import './styles.scss';
import AuthContext from 'src/contexts/AuthContext';

const SignUpForm: FunctionComponent<FormBlockInterface> = ({
  _rawBody,
  _rawImage,
  headline,
  ctaLabel,
}) => {
  const authContext = useContext(AuthContext);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLegalAgeConfirmed, setLegalAgeConfirmed] = useState(false);
  const [isBrandOptinChecked, setBrandOptinChecked] = useState(false);
  const [isCorporateOptinChecked, setCorporateOptinChecked] = useState(false);
  const [isValidEmail, setvalidEmail] = useState(false);
  const [isValidFirstName, setvalidFirstName] = useState(false);
  const [isValidLastName, setvalidLastName] = useState(false);
  const [isValidPassword, setvalidPassword] = useState(false);
  const [isValidConfirmPassword, setvalidConfirmPassword] = useState(false);
  const [hasSubmitted, setSubmission] = useState(false);

  const isValidData = () => {
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      isLegalAgeConfirmed
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      legalAgeConfirmation: isLegalAgeConfirmed,
      optIn: {
        corporate: isBrandOptinChecked,
        brand: isCorporateOptinChecked,
      },
    };
    if (isValidData()) {
      setIsFormSubmitted(true);
      authContext.setAuth(true);
    } else {
      setSubmission(true);
    }
  };

  const handleEmailChange = event => {
    setvalidEmail(event.target.value.length > 0);
    setEmail(event.target.value);
  };

  const handleFirstNameChange = event => {
    setvalidFirstName(event.target.value.length > 0);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setvalidLastName(event.target.value.length > 0);
    setLastName(event.target.value);
  };

  const handlePasswordChange = event => {
    setvalidPassword(event.target.value.length > 0);
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setvalidConfirmPassword(
      event.target.value.length > 0 && event.target.value === password
    );
    setConfirmPassword(event.target.value);
  };

  const handleLegalAgeConfirmation = () => {
    setLegalAgeConfirmed(!isLegalAgeConfirmed);
  };

  const handleBrandOptin = () => {
    setBrandOptinChecked(!isBrandOptinChecked);
  };

  const handleCorporateOptin = () => {
    setCorporateOptinChecked(!isCorporateOptinChecked);
  };

  return (
    <div className="bp-form">
      {isFormSubmitted ? (
        <div className="bp-form_thanks">
          <h2>Thank you for signing up!</h2>
          <p>
            BENEFITS OF HAVING A PROFILE - Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ea possimus aut beatae eligendi
            adipisci doloribus quidem praesentium non, quam deserunt minus
            debitis consequatur repellendus, maxime ab dolorem doloremque modi
            perferendis.
          </p>
          <div className="bp-form_thanks_cta">
            <button
              onClick={() => navigate('/profile')}
              className="bp-form_cta"
            >
              Create Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="bp-form_content">
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
          <Form onsubmit={handleFormSubmit}>
            <Fieldset legend="Personal Information">
              <InputText
                label="First Name"
                type="text"
                id="givenName"
                required={true}
                value={firstName}
                onChange={handleFirstNameChange}
                valid={isValidFirstName}
                validate={hasSubmitted}
              />
              <InputText
                label="Last Name"
                type="text"
                id="familyName"
                required={true}
                value={lastName}
                onChange={handleLastNameChange}
                valid={isValidLastName}
                validate={hasSubmitted}
              />
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
              <InputText
                label="Confirm Password"
                type="password"
                id="confirm-password"
                required={true}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                valid={isValidConfirmPassword}
                validate={hasSubmitted}
              />
            </Fieldset>
            <Fieldset legend="Select Optins">
              <InputCheckbox
                label="Yes - I confirm that I am over 16 years old."
                id="legalAgeConfirmation"
                name="legalAgeConfirmation"
                required={true}
                checked={isLegalAgeConfirmed}
                onChange={handleLegalAgeConfirmation}
              />
              <InputCheckbox
                label="Yes - I want to receive information from SimpleArticle on
                    new products and services via email."
                id="optInBrand"
                name="optIn.brand"
                required={true}
                checked={isBrandOptinChecked}
                onChange={handleBrandOptin}
              />
              <InputCheckbox
                label="Yes - Share my data with other Unilever brands to receive
                    the latest news on other Unilever products and services via
                    email."
                id="optInCorporate"
                name="optIn.corporate"
                required={true}
                checked={isCorporateOptinChecked}
                onChange={handleCorporateOptin}
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
              Already a member?
              <Link to="/login" className="bp-form_link">
                Login here
              </Link>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
