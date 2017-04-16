# SWOT API [![Build Status](https://travis-ci.org/max/swot-api.svg?branch=master)](https://travis-ci.org/max/swot-api.svg?branch=master)

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