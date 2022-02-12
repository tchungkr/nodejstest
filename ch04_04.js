process.on('tick', function(count){
    console.log(count);
});

setTimeout(function() {
    console.log('2초 후 실행');
    process.emit('tick','2');
},2000);

console.log('시작');