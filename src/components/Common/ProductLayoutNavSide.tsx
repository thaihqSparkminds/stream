import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import EventSiderIcon from 'components/Icons/EventSiderIcon';
import HomeSiderIcon from 'components/Icons/HomeSiderIcon';
import MoreSiderIcon from 'components/Icons/MoreSiderIcon';
import { SidebarLogo } from 'components/Icons/SidebarLogo';
import StorageSiderIcon from 'components/Icons/StorageSiderIcon';
import TeamSiderIcon from 'components/Icons/TeamSiderIcon';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

interface ProductLayoutNavSideProps {}

export const ProductLayoutNavSide: React.FunctionComponent<ProductLayoutNavSideProps> = (props) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = () => {
    return location.pathname.split('/').slice(2);
  };
  const toggleSiderCollapse = () => {
    setCollapsed(!collapsed);
  };
  const checkActive = (value: string) => {
    return location.pathname.split('/').includes(value);
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={240}
        collapsedWidth={64}
        className="product__sider"
      >
        <div className="wrapper">
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: `0 12px`,
              width: `${collapsed ? '64px' : '240px'}`,
            }}
          >
            <div className="product-sider__main-side">
              {collapsed ? (
                <SidebarLogo />
              ) : (
                <div className="sidebar_origin-logo">
                  <SidebarLogo />
                  <span>Restream</span>
                </div>
              )}

              <Menu
                className="product-sider__menu-container"
                theme="light"
                mode="inline"
                defaultSelectedKeys={currentPath()}
              >
                <Menu.Item onClick={() => navigate('home')} key="home" icon={<HomeSiderIcon />}>
                  <span>Home</span>
                </Menu.Item>

                <Menu.Item key="event" icon={<EventSiderIcon />} onClick={() => navigate('event')}>
                  <span>Events</span>
                </Menu.Item>

                <Menu.Item
                  key="storage"
                  onClick={() => navigate('storage')}
                  icon={<StorageSiderIcon />}
                >
                  <span>Video Storage</span>
                </Menu.Item>

                <Menu.Item key="team" onClick={() => navigate('team')} icon={<TeamSiderIcon />}>
                  <span>Team</span>
                </Menu.Item>

                <Menu.Item key="more" onClick={toggleSiderCollapse} icon={<MoreSiderIcon />}>
                  <span>More</span>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
      </Sider>
    </>
  );
};
