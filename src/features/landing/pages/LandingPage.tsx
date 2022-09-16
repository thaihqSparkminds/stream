import { Button, Form, Input } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import landingLogo from 'assets/images/landing_logo.png';
import { Link } from 'react-router-dom';
import googleIcon from 'assets/images/google_icon.png';
import facebookIcon from 'assets/images/facebook_icon.png';

interface LandingPageProps {}

const LandingPage: React.FunctionComponent<LandingPageProps> = (props) => {
  const { t } = useTranslation();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <div className="landing">
        <div className="landing_left-side">
          <h1 className="landing__title">One live stream. 30+ destinations.</h1>
          <p className="landing__desc">Multistream & reach your audience, wherever they are.</p>
          <div className="landing__login-option-container">
            <div className="landing__login-option">
              <img className="landing__option-icon" src={googleIcon} alt="" />
              <span>Continue with Google</span>
            </div>
            <div className="landing__login-option">
              <img className="landing__option-icon" src={facebookIcon} alt="" />
              <span>Continue with Facebook</span>
            </div>
          </div>

          <span>Or sign up with email:</span>

          <div className="landing__form-container">
            <Form
              name="signup"
              layout="vertical"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" visibilityToggle={false} />
              </Form.Item>

              <Form.Item>
                <Button className="signup__submit" type="primary" htmlType="submit">
                  Sign Up for Free
                </Button>
              </Form.Item>
            </Form>
          </div>

          <span className="landing__confirm-text">
            By signing up, you agree to theTerms of Service. You agree to receive our emails.
          </span>

          <p className="landing__login-link">
            Already have an account? <Link to={'login'}>Log In</Link>
          </p>
        </div>
        <div className="landing_right-side">
          <div className="landing__image-container">
            <img src={landingLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
