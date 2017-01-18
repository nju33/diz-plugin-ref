import isURL from 'is-url';

export default class Ref {
  process(root) {
    root.directories.forEach(dir => {
      dir.posts.forEach(post => {
        if (typeof post.data.ref !== 'string') {
          return;
        }

        if (isURL(post.data.ref)) {
          post.url = post.data.ref;
        } else {
          const sibling = post.root.getSibling(post.data.ref);
          post.url = sibling.config.url;
        }
      });
    });
  }
}
