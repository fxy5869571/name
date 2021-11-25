// ref: https://umijs.org/config/
import px2rem from 'postcss-plugin-px2rem';
export default {
  treeShaking: true,

  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/test', component: '../pages/index' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        headScripts: [
          `https://res.wx.qq.com/open/js/jweixin-1.6.0.js`,
          `https://web-9gikcbug35bad3a8-1304825656.tcloudbaseapp.com/sdk/1.3.0/cloud.js`,
        ],
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'message',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100,
      propBlackList: [],
      selectorBlackList: ['t_npx'],
    }),
  ],
};
