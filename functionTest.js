// Method 1
function print(name) {
    if(name=='Sneha')
        console.log('Hello '+name);
    else
        console.log('Hello Everybody');
}

print('Sara');

// Method 2
var print = function(name) {
    console.log('Hello '+name);
}

print('Sneha');