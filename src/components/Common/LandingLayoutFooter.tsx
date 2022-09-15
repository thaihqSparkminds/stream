import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export interface LandingLayoutFooterProps {}

export const LandingLayoutFooter: React.FunctionComponent<LandingLayoutFooterProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="landing-footer">
        <span className="landing-footer__copyright">
          © 2022 Restream, Inc. All Rights Reserved.
        </span>
        <div className="landing-footer__links">
          <Link to={''}>Careers</Link>
          <Link to={''}>Blog</Link>
          <Link to={''}>Help center</Link>
          <Link to={''}>Terms</Link>
          <Link to={''}>Privacy</Link>
          <Link to={''}>Developers</Link>
          <Link to={''}>Referral Program</Link>
          <Link to={''}>Media kit</Link>
        </div>
        <div className="landing-footer__socials">
          <Link to={''}>
            <TwitterCircleFilled />
          </Link>
          <Link to={''}>
            <FacebookFilled />
          </Link>
          <Link to={''}>
            <InstagramFilled />
          </Link>
        </div>
      </div>
    </>
  );
};
