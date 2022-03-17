# import failure demonstration

latest CRA (5.0.0) with --template typescript and self.id  

Upon starting with

```console
yarn start
```
We get this

```console
ERROR in ./src/index.tsx 9:12-20
Can't import the named export 'Provider' (imported as 'Provider') from default-exporting module (only default export is available)
```
