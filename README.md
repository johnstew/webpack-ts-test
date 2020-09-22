# Webpack TS Test Repo

## Notes

- [No Namespaces](https://github.com/microsoft/TypeScript/issues/30994)
- [React TS Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Extending createAsyncThunk in TS](https://github.com/reduxjs/redux-toolkit/issues/486)
- https://tsdx.io/
- Type checking with ts-loader is slower for builds
- Anything in lib that is going to be creating it's own types that are to be used by apps or core should create a .d.ts file
    - To do this we will have to leverage multiple ts configs
- 