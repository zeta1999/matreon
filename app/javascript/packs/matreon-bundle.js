import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/Matreon/components/HelloWorld';

import 'bootstrap/dist/css/bootstrap.css';

import { } from 'reactstrap';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
