var express=require('express');
    app=express();

    

app.get('/customer/:id',function(req,res){
    var customerId=parseInt(req.params.id);
    var data={};
    for(var i=0,len=customers.length;i<len;i++){
        if(customers[i].id===customerId){
            data=customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers',function(req,res){
    res.json(customers);
});

app.listen(8888);
console.log('Express listening on port 8888');
///remove this
     var customers=[
              { 
                id:1,
                joinedOn: '2000-12-01',
                name: 'Issak',
                city: 'Vasco', 
                orderTotal: 9.9965,
                orders:[
                  {
                    id:1,
                    product:'shoes',
                    total:9.9988

                  }
                ]
              },
            { 
              id:2,
              joinedOn: '2010-04-10', 
              name: 'Gautam', 
              city: 'Margao', 
              orderTotal: 8.7723,
              orders:[
                {
                  id:2,
                  product:'mobile',
                  total:110.77

                },
                {
                  id:3,
                  product:'bat',
                  total:10.88

                }
              ]
            },
            { 
              id:3,
              joinedOn: '2016-10-26', 
              name: 'Varada', 
              city: 'Pilar', 
              orderTotal: 9.9111,
              orders:[
                {
                  id:1,
                  product:'shoes',
                  total:9.9988

                }
              ]
           },
            { 
                id:4,
                joinedOn: '2017-08-17', 
                name: 'Namita', 
                city: 'Porvorim', 
                orderTotal: 6.2323, 
                orders:[
                    {
                      id:5,
                      product:'shoes',
                      total:19.9988
    
                    }
                  ]
            }
        ];
