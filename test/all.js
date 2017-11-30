exports['test simple warmup'] = function(assert, done) {
  const lambdawrap = require('lambswool')
  const comforter = require('comforter')
  var testmodule={
    exports:{
      foo : (event,context,cb) =>{
        cb(null,"foo")
      }
    }
  }
  var event = {
    source : 'serverless-plugin-warmup'
  }
  var cb = (err,res) =>{
    if (err) {
      console.log("ERROR",err)
    } else {
      console.log("OK",res)
    }
    assert.equal(err,null,"Expected no error")
    assert.equal(res,'So warm!','Warmup Method')
    done()
  }
  lambdawrap.wrapModuleExportsWithFunction(testmodule,comforter.snuggle)
  testmodule.exports.foo(event,null,cb)
}

exports['test regular method'] = function(assert, done) {
  const lambdawrap = require('lambswool')
  const comforter = require('comforter')
  var testmodule={
    exports:{
      foo : (event,context,cb) =>{
        cb(null,"foo")
      }
    }
  }
  var event = {
    source : 'seomthing else'
  }
  var cb = (err,res) =>{
    if (err) {
      console.log("ERROR",err)
    } else {
      console.log("OK",res)
    }
    assert.equal(err,null,"Expected no error")
    assert.equal(res,'foo','Regular Method')
    done()
  }
  lambdawrap.wrapModuleExportsWithFunction(testmodule,comforter.snuggle)
  testmodule.exports.foo(event,null,cb)
}



if (module == require.main) require('test').run(exports)
