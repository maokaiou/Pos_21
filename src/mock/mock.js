const Mock = require('mockjs')
// const fs = require('fs')
// const path = require('path')
// const goodslist=fs.readFileSync(path.join(__dirname, '/goodslist/index.json5'))

Mock.mock('/goods/host',{
  code:200,
   data:[
    {
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    },{
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    },{
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    },{
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    },{
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    },{
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    },{
      'price':"@string('number',2)",
      img:'@image()',
      name:'@cname'
    }
   ]
})
