import initStoryshots from '@storybook/addon-storyshots';

// HACK: https://stackoverflow.com/questions/48809753/testing-mutationobserver-with-jest
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};
initStoryshots();
