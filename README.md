# linkr

[![Build Status](https://travis-ci.org/jarrettmeyer/linkr.svg?branch=master)](https://travis-ci.org/jarrettmeyer/linkr)

An [npm](https://www.npmjs.com/) package to make managing [npm links](https://docs.npmjs.com/cli/link) easier.

Are you working on a sufficiently large NodeJS project with dependent projects that rely on each other? If so, then you
are probably using **npm link** to make working with multiple local packages easier.

## Installation

Install **linkr** globally using npm. This may require `sudo` access, depending on your OS.

```
$ npm install -g linkr
```

## Usage

Let's assume that you have a directory setup similar to the following example. Your `foo-api` project is your primary
application, and it depends on both `foo-caching` and `foo-models`. While you might have been able to write this as one
very large Node package, it was decided that there would be value if the `foo-caching` and `foo-models` projects could
shared in multiple projects.

```
path/to/foo/
    foo-api/
        package.json
    foo-caching/
        package.json
    foo-models/
        package.json
```

In your `foo-api/package.json`, add a `links` section under `config`.

```
{
  "name": "foo-api",
  "version": "0.0.0",
  "dependencies": {
    "foo-caching": "~2.1.0",
    "foo-models": "~3.17.0"
  },
  "config": {
    "links": [
      "../foo-caching",
      "../foo-models"
    ]
  }
}
```

In your development environment, you will want to use symbolic links. You can now run **linkr** from the project
root (i.e. the same folder that contains the `package.json` file).

```
$ cd path/to/foo/foo-api
$ linkr
```

## Commands

### link (default)

Run all prescribed `npm link`s. This is the default command.

#### sudo may be required

Because `npm link` makes use of the global `node_modules` directory, you may need to run **linkr** as `sudo`. If
you want to avoid running as sudo, then you need to set up your linked projects independently. Example:

**Running as `sudo`**

```
/foo/foo-api $ sudo linkr
```

**Without running as `sudo`**

For this to work, you will need to set up your links configuration with project names, not relative paths.

```
$ cd path/to/foo-caching
$ sudo npm link
$ cd ../foo-models
$ sudo npm link
$ cd ../foo-api
$ linkr
```

### help

Show help text.

### version

Show **linkr** version

### remove

Remove symbolic links.

## Contributors

[![Fusion Alliance Logo](https://avatars0.githubusercontent.com/u/1154219?v=3&u=e1451e6a65343331369d53a2b6e0c7046c2cc810&s=60)](https://github.com/FusionAlliance)
**linkr** is a product of Fusion Alliance &copy; 2015.

+ [Jarrett Meyer](https://github.com/jarrettmeyer) (Author)

## License

The MIT License (MIT)

Copyright (c) 2015 Fusion Alliance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
