// Simple EC2 call to get a specific running instance's info.
// Note that the authentication portion is handled behind the scenes by aws-sdk.  Credentials
// are stored in ~/.aws/credentials and read when needed.

var AWS = require('aws-sdk'); 

AWS.config.update({region: 'us-west-2'}); //region that my existing instance resides

var ec2 = new AWS.EC2(); 

var params = {InstanceIds:['i-dcb0acd1']}; //hardcoded id of my running instance

ec2.describeInstances(params, function(err, data) {
  if (err) console.log(err, err.stack); // error
  else     console.log(data.Reservations[0].Instances); //get only reservation and list instances (1)
});
