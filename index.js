const fs = require('fs');
const argv = require('yargs').argv;
const ProgressBar = require('progress');
const graph = require('ngraph.graph')();
const createLayout = require('ngraph.offline.layout');
const toBinary = require('ngraph.tobinary');
const file = fs.readFileSync(argv.i, 'utf-8');
const data = file.replace(/ /g, '').split('\r\n');

let current = 0;
var total = data.length;

console.log(`${total} total items in file`);
console.log(`beginning processing:`);

let bar = new ProgressBar(':bar :percent[:current/:total] ETA: :etas (:elapsed)', {
    total,
    width: 60,
    complete: '█',
    incomplete: '░'
});
data.forEach(function (line) {
    const [src, dst] = line.split(',');
    graph.addLink(src, dst);
    bar.tick();
});

console.log('done');

const layout = createLayout(graph, {
    layout: require('ngraph.forcelayout3d')
});

console.log('here');
layout.run();
toBinary(graph);
