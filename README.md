# linkr

An [npm](https://www.npmjs.com/) package to make managing [npm links](https://docs.npmjs.com/cli/link) easier.

Are you working on a sufficiently large NodeJS project with dependent projects that rely on each other? If so, then you
are probably using **npm link** to make working with multiple local packages easier.

## Installation

Install **linkr** globally using npm.

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
      "../my-project-caching",
      "../my-project-models"
    ]
  }
}
```

In your development environment, you will want to use symbolic links.

```
$ cd path/to/foo/foo-api
$ linkr
```

## Commands

### link (default)

Run all prescribed `npm link`s. This is the default command.

### help

Show help text.

### version

Show **linkr** version

### remove

Remove symbolic links.
