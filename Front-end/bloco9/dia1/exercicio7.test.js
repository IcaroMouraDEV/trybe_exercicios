const uppercase = require('./exercicio7');

describe('test a uppercase function', () => {
  it('uppercase is a function', () => {
    expect(typeof uppercase).toBe('function');
  });

  it('uppercase work', (done) => {
    uppercase('work', (string) => {
      try {
        expect(string).toBe('WORK');
        done();
      } catch (error) {
        done(error);
      }
    });
  
  });
});