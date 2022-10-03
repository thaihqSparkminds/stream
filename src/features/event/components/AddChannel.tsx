import { CloseOutlined, LeftOutlined } from '@ant-design/icons';
import userApi from 'api/userApi';
import youtubeApi from 'api/youtubeApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import TwitchLogo from 'components/Icons/TwitchLogo';
import YoutubeLogo from 'components/Icons/YoutubeLogo';
import { selectStates } from 'features/auth/authSlice';
import React, { useCallback, useRef } from 'react';
import { eventActions } from '../eventSlice';
import ChannelItem from './ChannelItem';

interface AddChannelProps {
  handleBack: () => void;
  handleClose: () => void;
  handleSelect: (value: string) => void;
}

const AddChannel: React.FunctionComponent<AddChannelProps> = ({
  handleBack,
  handleClose,
  handleSelect,
}) => {
  const token = useRef(localStorage.getItem('token'));
  const userDetail = useAppSelector(selectStates).userDetail;
  const dispatch = useAppDispatch();

  const getPlatfomUser = useCallback(async (userId: number) => {
    const body = await userApi.getPlatfomUser(userId);
    if (body) {
      dispatch(eventActions.setUserPlatform(body));
    }
  }, []);

  const handleClick = (value: string) => {
    if (value === 'youtube') {
      handleSelect('youtube');
      if (userDetail && token.current) {
        getLinkOAuth(userDetail.userId);
      }
    }
    if (value === 'twitch') {
      window.open(
        `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=rk0qllr0498x2byb2twcy3u1mnubb3&redirect_uri=http://localhost:8000/oauth_twitch&force_verify=true&scope=channel:read:stream_key&user:edit:broadcast&state=${userDetail.userId}`,
        '__blank',
        'toolbar=0,status=0,width=548,height=900'
      );
    }
    getPlatfomUser(userDetail.userId);
  };

  const getLinkOAuth = useCallback(async (userId: number) => {
    if (token.current) {
      const body = await youtubeApi.getLinkOAuth(userId, token.current);
      if (body) {
        console.log(body);
        var win = window.open(body, '__blank', 'toolbar=0,status=0,width=548,height=900');
        var checkConnect = setInterval(function () {
          console.log(win?.TrustedScriptURL);
          if (!win || !win.closed) return;
          clearInterval(checkConnect);
          youtubeApi.getChannelInfo(token.current ?? '', userId);
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <div className="event__create-container event__add-channel">
        <div className="event__create-header-box">
          <p>
            <LeftOutlined onClick={handleBack} className="event__back-btn" />
            Platforms
            <CloseOutlined onClick={handleClose} className="event__close-btn" />
          </p>
        </div>

        <div className="event__list-channel">
          <ChannelItem
            onClick={() => handleClick('youtube')}
            logo={<YoutubeLogo />}
            name={'YouTube'}
          />

          <ChannelItem
            onClick={() => handleClick('twitch')}
            logo={<TwitchLogo />}
            name={'Twitch'}
          />
        </div>
      </div>
    </>
  );
};

export default AddChannel;
