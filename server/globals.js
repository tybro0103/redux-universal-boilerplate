/*
 *  This being in its own file as opposed to just setting them at the top of
 *  server/index.js is necessary. A module's imports are imported before the
 *  module is instantiated.
 */

global.__IS_CLIENT__ = false;
global.__IS_SERVER__ = true;
