# diz-plugin-ref

A [Diz](https://github.com/nju33/diz) plugin that rewrite to url of ref

[![Build Status](https://travis-ci.org/nju33/diz-plugin-ref.svg?branch=master)](https://travis-ci.org/nju33/diz-plugin-ref) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Dependencies Status](https://david-dm.org/nju33/diz-plugin-ref.svg)

## Install

```bash
$ yarn add -D diz-plugin-ref
$ npm i -D diz-plugin-ref
```

## Usage

Add to plugins `of config.js`.

```js
  ...,
  plugins: [
    new Ref()
  ],
  ...
```

Add `ref` key to frontmatter. For example (example.md)

```md
---
title: example
ref: <url|other blog name>
---
```

For the ref key, write a direct URL or a sibling directory name (with config.js).

## License

The MIT License (MIT)

Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
