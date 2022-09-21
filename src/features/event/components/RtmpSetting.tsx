import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React from 'react';

interface RtmpSettingProps {
  handleCloseRtmp: () => void;
  url: string;
  streamKey: string;
}

const RtmpSetting: React.FunctionComponent<RtmpSettingProps> = ({
  handleCloseRtmp,
  url,
  streamKey,
}) => {
  return (
    <div className="event__create-container">
      <div className="event__create-header-box">
        <p>
          RTMP settings
          <CloseOutlined onClick={handleCloseRtmp} className="event__close-btn" />
        </p>
        <span className="event__create-header-desc">
          Copy & Paste these credentials into your streaming software (OBS, ZOOM) to begin streaming
        </span>
      </div>
      <div className="event__rtmp-info-container">
        <div className="event__rtmp-info">
          <span>RTMP URL</span>
          <Paragraph copyable>{url}</Paragraph>
        </div>
        <div className="event__rtmp-info">
          <span>Stream Key</span>
          <Paragraph copyable>{streamKey}</Paragraph>
        </div>
      </div>
      <div className="event__btn-container">
        <Button onClick={handleCloseRtmp} size="large" type="primary" className="event__btn">
          Done
        </Button>
      </div>
    </div>
  );
};

export default RtmpSetting;
