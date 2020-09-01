import React, { FunctionComponent } from 'react';
import { FormBlockInterface } from './models';
import LoginForm from './login-form';
import SignUpForm from './sign-up-form';

const componentMap = {
  login: LoginForm,
  signup: SignUpForm,
  default: null,
};

const FormBlock: FunctionComponent<FormBlockInterface> = ({
  _rawBody,
  _rawImage,
  headline,
  ctaLabel,
  type,
}) => {
  const getComponentKey = (componentTypeName: string) => {
    if (componentTypeName.indexOf('login') >= 0) return 'login';
    if (componentTypeName.indexOf('sign up') >= 0) return 'signup';

    return 'default';
  };
  const componentTypeName = type ? type.name.toLowerCase() : '';
  const componentKey = getComponentKey(componentTypeName);

  const Component = componentMap[componentKey];

  return Component ? (
    <section>
      <Component
        {...{
          _rawBody,
          _rawImage,
          headline,
          ctaLabel,
          type,
        }}
      />
    </section>
  ) : null;
};

export default FormBlock;
