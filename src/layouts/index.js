import { useEffect } from 'react';
import styles from './index.css';
import {
  WX_AUTH_TYPE,
  WX_RESOURCE_ENVID,
  WX_RESOURCE_APPID,
  WX_OFFICIAL_ACCOUNT_APPID,
  WX_REDIRECT_URI,
} from '../constant';

function BasicLayout(props) {
  const login = async () => {
    cloud.startLogin({
      provider: 'OfficialAccount',
      appid: WX_OFFICIAL_ACCOUNT_APPID,
      scope: WX_AUTH_TYPE,
      redirectUri: WX_REDIRECT_URI,
    });
  };
  useEffect(() => {
    login();
    init();
  }, []);
  const init = async () => {
    // 声明新的 cloud 实例
    const c1 = new cloud.Cloud({
      // 必填，表示是未登录模式
      identityless: true,
      // 资源方 AppID
      resourceAppid: WX_RESOURCE_APPID,
      // 资源方环境 ID
      resourceEnv: WX_RESOURCE_ENVID,
    });
    await c1.init();

    c1.callFunction({
      name: 'login',
      success: re => {
        console.log(re);
      },
    });
  };

  useEffect(() => {
    const designSize = 750;
    // 获取 html 元素
    const html = document.documentElement;
    // 定义窗口的宽度
    const clientW = html.clientWidth;
    // html 的fontsize 大小
    const htmlRem = (clientW * 100) / designSize;
    html.style.fontSize = htmlRem + 'px';
  }, []);
  return <div className={styles.normal}>{props.children}</div>;
}

export default BasicLayout;
