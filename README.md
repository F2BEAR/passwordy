<p align="center">
    <a href="https://github.com/F2BEAR/passwordy/blob/master/LICENSE""><img src="https://img.shields.io/badge/License-MIT-green"></a>
</p>
# Passwordy

A simple CLI password generator for Node.js

## Usage

In order to use passwordy you can simply do:
```shell
passwordy <options>
```

> If you don't specify any option Passwordy will generate an 8 character password containing letters, numbers and symbols. 

## Commands

| option | alias | description |
|---|---|---|
| --help | -h | display help for command |
| --length | -l | length of the password |
| --no-numbers | -nn | remove numbers |
| --no-symbols | -ns | remove symbols |
| --hash | -hs | hashes the password with sha512 |
| --bcrypt | -b | hashes the password using bcrypt.hash() |

## License

MIT License.

Copyright (c) 2021 Facundo Carbonel / Passwordy

