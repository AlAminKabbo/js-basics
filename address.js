let address = {
    Street: 'Lake Circus, Kalabagan, Dhanmondi',
    city: 'Dhaka',
    zipCode: '1205',
}

function showAddress(address){
    for(let key in address){
        console.log (key, address[key]);
    }
}

showAddress(address);