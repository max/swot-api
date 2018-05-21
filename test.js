const listen = require('test-listen');
const micro = require('micro');
const request = require('request-promise');
const test = require('ava');
const swotApi = require('.');

const app = micro(swotApi);
let url;

test.before(async () => {
  url = await listen(app);
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
