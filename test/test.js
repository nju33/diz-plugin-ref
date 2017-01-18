import Diz from 'diz';
import test from 'ava';

test('set url', async t => {
  const roots = await Diz.load({base: './test/fixtures/url/'});
  const renderer = new Diz({roots});

  const post = renderer.roots[0].mainDirectory.posts[0];
  t.is(post.url, 'http://ref.example.com');
});

test('set sibling name', async t => {
  const roots = await Diz.load({base: './test/fixtures/sibling/'});
  const renderer = new Diz({roots});

  const post = renderer.roots[0].mainDirectory.posts[0];
  t.is(post.url, 'http://blog2.example.com');
});
