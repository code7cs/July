/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-30 11:21:19
 * @LastEditTime: 2020-07-30 11:50:49
 */
console.log(`Process Architecture: ${process.arch}`);
console.log(`Process PID: ${process.pid}`);
console.log(`Process Platform: ${process.platform}`);
console.log(`Process Version: ${process.version}`);

var spawnProc = require("child_process").spawn;
spawnProc("");
