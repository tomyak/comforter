var snuggle = ( ( handler ) =>{
  return (event,context,cb)=> {
    if (event.source === 'serverless-plugin-warmup') {
     let rc = cb(null, 'So warm!')
     return rc
   }
   return handler(event,context,cb)
  }
} )


module.exports = {
  snuggle : snuggle
};
