jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: jest.fn(),
      refresh: jest.fn(),
      push: jest.fn(),
      back: jest.fn(),
    };
  },
  redirect: jest.fn(),
  usePathname: jest.fn(),
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));



jest.mock('@idb-dab/ui-utils', () => {
  return {
    apiConnector: jest.fn(),
  };
});

window.KeyframeEffect = jest.fn();
window.Animation = class {
  constructor() {
    return {
      play: jest.fn(),
      reverse: jest.fn(),
    };
  }
};
