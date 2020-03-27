import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Login Page [WIP]',
  decorators: [withKnobs]
};
export const Page = () => (
  <div>
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/diondree/libhost@1.0.0/styles/smtt.css"
    />
    <style
      dangerouslySetInnerHTML={{
        __html: `body {
        --text-color: #3d3d3d;

        font-family: Roboto;
        box-sizing: border-box;
        color: var(--text-color)
      }
      .login-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100vw;
        z-index: -999;
      }

      .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        min-height: 650px;
      }
      .login-form {
        background-color: white;
        padding: 48px 16px;
        border-radius: 8px;
        width: 100%;
      }
      .login-form__header {
        margin-bottom: 24px;
      }
      .login-form__header__small-text {
        margin: 0px;
        margin-bottom: 4px;
      }
      .login-form__header__large-text {
        margin: 0px;
      }
      .login-form__controls smtt-input[label="Username"]{
        margin-bottom: 16px;
      }
      .login-form__controls__label {
        margin-bottom: 8px;
      }
      .form-group {
        margin-bottom: 24px;
      }
      .login-form__login-btn {
        display: block;
        margin-bottom: 16px;
      }
      .smartmatic-logo {
        margin-top: 71px;
        position: relative;
      }
      .smartmatic-logo path {
        fill: #2d2f3a;
      }
      .login-form__forgot-password {
        text-decoration: underline;
        font-size: var(--font-size-sm);
        color: #365a63;
      }
      .login-form__forgot-password:hover {
        background-color: #EEF5F6;
        color: #44727E;
      }
      .login-form__forgot-password:active {
        background-color: #CDDFE4;
        color: #274249;
      }
      @media screen and (min-width: 567px) {
        .login-backdrop {
          background-blend-mode: multiply;
          background-image: radial-gradient(
            circle at 50% 0,
            #265966,
            #002d38 105%
          ), url(./home-bg.jpg);
          background-size: cover;
        }
        .main-content {
          justify-content: center;
        }
        .smartmatic-logo path {
          fill: white;
        }

        .login-form {
          padding: 48px;
          width: 415px;
        }
      }`
      }}
    ></style>
    
    <div class="login-backdrop"></div>
    <main class="main-content">
      <div class="login-form">
        <header class="login-form__header">
          <h6 class="login-form__header__small-text caption-2">welcome to</h6>
          <h1 class="login-form__header__large-text">SmartTally Desktop</h1>
        </header>

        <form class="login-form__controls">
          <div class="login-form__controls__label h4">Sign in to continue</div>
          <smtt-input full-width label="Username" autofocus></smtt-input>
          <smtt-input full-width type="password" label="Password"></smtt-input>
          <smt-main-button class="login-form__login-btn" full-width
            >Login</smt-main-button
          >
          <a class="login-form__forgot-password" href="#">Forgot password?</a>
        </form>
      </div>
      <div class="smartmatic-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="14"
          viewBox="0 0 130 14"
        >
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M19.833 0c.774 0 1.412.114 1.91.337l.048-.006c.024.003 2.373.206 4.69.923 3.108.96 4.75 2.403 4.75 4.176 0 2.082-1.716 3.998-4.967 5.539-2.433 1.156-4.9 1.707-4.924 1.712l-.02.002c-1.131.427-2.583.798-4.456 1.05a28.812 28.812 0 0 1-3.837.267 26.1 26.1 0 0 1-1.611-.05l-.097.048h-.015c-.185-.005-2.867-.077-5.538-.69C2.077 12.461.085 10.968 0 8.989c.061-1.593 1-3.036 2.798-4.293C4.232 3.692 6.213 2.798 8.692 2.04 12.96.733 17.29.258 17.792.205c.312-.057.62-.103.91-.136A9.75 9.75 0 0 1 19.833 0zM15.08.91c-4.576.884-8.04 2.095-10.316 3.61C2.07 6.311 1.72 8.07 1.9 9.23c.148.937.868 1.776 2.14 2.496 1.906.697 3.876 1.035 6.025 1.035 2.607 0 5.263-.508 7.757-1.028 5.967-1.244 6.233-3.46 6.242-3.768-1.831-1.9-6.82-2.298-10.695-2.298-2.192 0-4.125.133-4.84.203a2.479 2.479 0 0 0-.295.054l-.042.028c-.808.328-.827 1.521-.826 1.682l.002.022a.118.118 0 0 1-.119.116h-.002l-.1-.056c-.456-.751-.317-2.172.62-3.092.658-.65 3.804-2.557 7.313-3.714zm7.168-.268a1.838 1.838 0 0 1 .716 1.658.118.118 0 0 1-.09.097.121.121 0 0 1-.127-.052c-.005-.008-.701-.984-4.03-.93-3.317.05-7.866 2.503-9.613 3.558.103-.032.175-.05.184-.051l.015-.004a41.3 41.3 0 0 1 4.52-.26c6.245 0 9.794 1.665 10.905 2.647.403.42.736 1.27.365 2.3-.212.592-.728 1.417-1.96 2.196 2.324-.95 6.024-2.947 6.127-6.05.124-3.546-5.245-4.794-7.012-5.109zm27.125 2.05l3.691 6.158 3.631-6.158h1.997v7.539h-1.107V3.8h-.243l-3.85 6.43h-.846l-.026-.044-3.865-6.385h-.264v6.429h-1.106V2.692h1.988zm15.504 0l4.046 7.539h-1.23l-.828-1.558h-5.55l-.833 1.558H59.23l4.056-7.539h1.59zm9.495 0c1.182.017 1.913.048 2.237.092.595.087 1.013.38 1.242.87.149.323.226.777.226 1.348 0 .427-.023.758-.069.984-.05.243-.132.43-.253.57a1.344 1.344 0 0 1-.58.39c.178.07.329.172.453.305.148.173.236.364.276.59.039.215.06.637.06 1.253v1.137h-1.1V9.22A12.528 12.528 0 0 0 76.83 8.2c-.061-.427-.28-.67-.67-.742-.152-.023-.3-.04-.44-.048a43.258 43.258 0 0 0-.98-.01h-3.644v2.83H70V2.693zm12.859 0v1.05h-3.464v6.489h-1.111V3.74h-3.502V2.692h8.077zm3.062 0l3.691 6.158 3.633-6.158h1.998v7.539h-1.107V3.8h-.246l-3.848 6.43h-.846l-3.89-6.43h-.265v6.43h-1.105V2.692h1.985zm15.509 0l4.044 7.539h-1.229l-.83-1.558h-5.549l-.831 1.558h-1.253l4.056-7.539h1.592zm11.044 0v1.05h-3.462v6.489h-1.114V3.74h-3.5V2.692h8.076zm2.154 0v7.539h-1.077V2.692H119zm6.2 0c1.248 0 2.157.064 2.705.19.282.066.528.192.732.375.211.187.346.409.404.658.05.216.083.641.092 1.297l.002.089h-1.072v-.087c-.003-.073-.003-.13-.004-.175l-.002-.077c0-.341-.03-.582-.09-.717-.061-.128-.175-.226-.349-.3-.348-.142-1.178-.214-2.467-.214-.94 0-1.658.027-2.129.08-.568.061-.799.161-.893.234-.078.066-.193.238-.27.658-.066.349-.097.848-.097 1.483 0 .314.012.705.039 1.164.024.44.045.793.071.976.04.268.116.452.241.563.127.116.331.187.61.214.548.057 1.333.085 2.338.085.344 0 .755-.011 1.218-.03.52-.019.824-.036.954-.055.259-.033.45-.084.568-.151a.493.493 0 0 0 .23-.283c.042-.119.07-.47.089-1.044v-.086h1.11l-.003.092c-.027.696-.065 1.136-.12 1.382-.121.576-.507.936-1.14 1.067-.502.1-1.382.15-2.618.15-1.611 0-2.72-.058-3.293-.173-.57-.118-.958-.424-1.153-.913-.195-.48-.288-1.32-.288-2.568 0-1.165.071-2.03.216-2.568.179-.662.643-1.052 1.379-1.158.69-.105 1.696-.158 2.99-.158zm-83.417 0c.857 0 1.53.042 2.005.127.477.087.858.238 1.131.45.224.176.383.389.473.63.081.236.126.587.136 1.07l.002.088h-1.198v-.2c0-.418-.058-.598-.109-.676-.107-.169-.348-.294-.717-.37-.394-.079-.988-.12-1.766-.12-.978 0-1.714.037-2.194.107-.473.068-.79.178-.95.329-.145.14-.22.383-.22.72 0 .388.062.572.114.659.07.121.217.214.425.273.333.108.994.164 1.969.171.362.003 1.242.007 2.478.012.548.004.979.054 1.284.15.314.11.561.284.758.536.245.314.365.752.365 1.337 0 .543-.101.98-.3 1.301-.237.378-.68.633-1.32.76-.613.123-1.731.185-3.327.185-.84 0-1.471-.026-1.874-.075-.417-.05-.737-.14-.983-.273-.3-.167-.507-.378-.62-.628-.115-.25-.172-.62-.172-1.1 0-.022 0-.13.005-.327l.002-.084h1.161v.087l.006.143.001.015c.006.494.05.707.085.8.045.116.146.207.301.27.272.113 1.19.17 2.73.17 1.151 0 1.943-.05 2.42-.156.444-.094.66-.422.66-1.005 0-.297-.037-.525-.11-.675a.561.561 0 0 0-.35-.29c-.182-.06-.44-.096-.77-.108-.284-.007-1.08-.012-2.24-.013h-1.078c-.632 0-1.15-.06-1.543-.175-.39-.115-.7-.305-.918-.566-.253-.313-.381-.78-.381-1.39 0-.687.204-1.195.608-1.507.19-.151.408-.268.645-.347.234-.079.56-.141.97-.186a21.156 21.156 0 0 1 2.406-.119zm22.46 1.05h-.271l-2.11 3.887h4.463L64.243 3.74zm40.923 0h-.271l-2.109 3.887h4.46l-2.08-3.888zm-30.555 0h-3.515v2.61l3.682-.001c.692-.003 1.097-.016 1.295-.038.243-.027.43-.088.573-.188.203-.143.311-.536.311-1.134 0-.525-.096-.864-.288-1.01-.13-.097-.343-.164-.616-.193-.297-.031-.861-.047-1.68-.047z"
          />
        </svg>
      </div>
    </main>
		</div>
);