const listen = require('test-listen');
const micro = require('micro');
const request = require('request-promise');
const swotApi = require('./index.js');
const test = require('ava');

const app = micro(swotApi);
let url;

test.before(async t => {
  url = await listen(app);
  // const foo = await thenSleep(5000);
});

test('endpoint works with edu email', async t => {
  const body = await request(url, { qs: { email: 'foo@mit.edu' }, json: true });

  t.deepEqual(
    body,
    {
      email: 'foo@mit.edu',
      institution: 'Massachusetts Institute of Technology',
      is_academic: true
    }
  );
});

test('endpoint works with non-edu email', async t => {
  const body = await request(url, { qs: { email: 'foo@bar.com' }, json: true });

  t.deepEqual(
    body,
    {
      email: 'foo@bar.com',
      institution: null,
      is_academic: false
    }
  );
});

function thenSleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}