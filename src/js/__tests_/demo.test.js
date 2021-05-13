import demo from '../app';

it('Функция должна показывать правильные значения', () => {
  expect(demo()).toBe(console.log('app.js included'));
});
