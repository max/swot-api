# SWOT API [![Build Status](https://travis-ci.org/max/swot-api.svg?branch=master)](https://travis-ci.org/max/swot-api) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

A simple micro-service that wraps [swot-js](https://www.npmjs.com/package/swot-js) and provides an API to identify email addresses that belong to colleges or universities.

## Usage

```bash
$ curl 'https://swot-api.now.sh/?email=EMAIL'
```

```json
{
  "email": "foo@bar.com",
  "is_academic": false,
  "institution": null
}
```

```json
{
  "email": "foo@mit.edu",
  "is_academic": true,
  "institution": "Massachusetts Institute of Technology"
}
```
