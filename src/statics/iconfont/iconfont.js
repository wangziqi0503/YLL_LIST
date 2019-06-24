import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('./iconfont.eot?t=1561094962165'); /* IE9 */
src: url('./iconfont.eot?t=1561094962165#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKUAAsAAAAABlAAAAJJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApYaQE2AiQDCAsGAAQgBYRtBzIbkQXIrrApw71IAItGmdzg+byLDQwCxMN/+/1vn7nzVNM3wdJfRJMorqHwKgk6pRAaoRA9FC/h3v9amzOvF+f183jJNGF1df6Kzw6WebRMKhAiJEskCGN9eg7Lp8zocbpJeRpwTf0EGkge0NyqmoojASc40KigkW0gQ98wdsELPE6gacFA4cixyw3UZfa4QDx95BhQL0RkmeXrQrVhaRbvVdTT2/QZeBd9P/7DVtRJKgV76sn7WxsWv+CXYlbO4GpAiBLg6goK7AIycbYxc1xJME5Jc33ZCpBlwS9liW3iqGbB/jq7uA3mYDb4xZM9anECOclNgA3M5qtTu3Hr2+/5738Xvv6c+/J9vXmurXO2daF887NM+adjQr4iq3jZhw4M6H3Nnwk+Xriv9fZcb2XwcyvRiHJWVsxQ35Et/BDpwLZsyG1rypq00ZdMJo1NaGqihANDX1MNk7MXQt3kHnw18xkKdWtkZnehomU3qur2o2mn/eqWEVYSuYEdXgFC3xuSrk8o9H2Qmf1ExdQ/qvpRoOl8jLZs2YhHzcOvyRCy0XxGz0pi5dqlGZdekXMfGpyXR9w74tyL43Q0Kef3FBMvMSN/cGYiChUnEe7AaRSGCaac+GTJyBVJ5+OxanrTyEoiaDqMEYMgNmR6hjyWREwFvUWz8vkrxHEvZOCOqrroHcJyXv9oamQygNxr4kFVj/JK7oFjRggFKSwRQTswiIRCCZQ2D/IRixhxJ6RSc2OnmxqqGW2vi36gmNVhG1M4FYX6q0dG/Oi6HQAA') format('woff2'),
url('./iconfont.woff?t=1561094962165') format('woff'),
url('./iconfont.ttf?t=1561094962165') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('./iconfont.svg?t=1561094962165#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 88px;
  font-style: normal;
  color:#fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  left: 50%;
  transform: translate(-25%, -25%);
  top: 700px;
  cursor: pointer;
}`;

