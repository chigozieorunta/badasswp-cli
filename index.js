#!/usr/bin/env node

/**
 * badassWP
 * A powerful command line tool (CLI) for developing WordPress themes and plugin applications with ease.
 *
 * @author Chigozie Orunta <https://github.com/chigozieorunta>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
