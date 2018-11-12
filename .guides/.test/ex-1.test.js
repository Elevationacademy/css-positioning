import assert from 'assert';
import jsdom, { JSDOM } from 'jsdom';

var dom = null;
var window = null;

beforeAll(done => {
    JSDOM.fromFile('index.html', { resources: "usable" })
        .then((dom) => {
            dom = dom;
            window = dom.window;
            window.addEventListener('load', () => {
                done();
            })
        });
});

it('.test div should have a margin of 50px to the left', () => {
  let testDiv = window.document.querySelector('.test');
  expect(window.getComputedStyle(testDiv)._values['margin-left']).toEqual('50px');
});