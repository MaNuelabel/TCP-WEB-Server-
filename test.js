const c = require('child_process');

const p = c.exec('cmd')
p.stdin.write('start cmd\n')
p.stdin.write('start cmd\n')