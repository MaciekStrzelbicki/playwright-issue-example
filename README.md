# playwright-issue-example
Sample repository for explaining a bug in [playwright]( https://github.com/microsoft/playwright/issues/27991)

switch lines
```js
    const browser = await chromium.launch();
    // const browser = await firefox.launch();
```
```js
    // const browser = await chromium.launch();
    const browser = await firefox.launch();
```

## run
```bash
npx playwright test --debug
```
Result:
- chromium: recognize logged user in system browser (incognito mode doesn't work)
- firefox: works properly


Expectations:
both browser works properly in incognito mode

## run
---

```bash
npx playwright test
```

Result:
- both browsers recognize logged user in system browser (incognito mode doesn't work)

Expectations:
both browser works properly in incognito mode

## video examples
videos:
- [Chromium](./video/Chromium-broken-incognito.mp4)
- [Firefox](./video/Firefox-incognito.mp4)