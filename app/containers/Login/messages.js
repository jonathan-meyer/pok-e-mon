/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';
import { simpleMessages } from 'utils/simpleMessages';

export const scope = 'app.containers.Login';

export default defineMessages(
  simpleMessages(scope, {
    header: 'Login',
    name: 'Name',
    password: 'Password',
    loginButton: 'Login',
  }),
);
