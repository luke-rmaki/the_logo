import {Logo} from './src/Logo';

if (!customElements.get('the-logo')) {
  customElements.define('the-logo', Logo);
}
