import { test } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';

import app from '../app.js';

test('GET / 回傳 Hello World', async () => {
  const res = await request(app).get('/');

  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(res.body, { message: 'Hello World' });
});
