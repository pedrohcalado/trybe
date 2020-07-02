const { TestScheduler } = require("jest");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('to upper case', (done) => {
  uppercase('ola', (result) => {
    expect(result).toEqual('OLA');
    done();
  })
});
