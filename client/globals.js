/*
 *  This being in its own file as opposed to just setting them at the top of
 *  client/index.js is necessary. A module's imports are imported before the
 *  module is instantiated.
 */

global.__IS_CLIENT__ = true;
global.__IS_SERVER__ = false;
