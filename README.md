Homework 1 (CSC591 - DevOps)
-------------------

####Description of tasks completed:

- **Authenticate to AWS**  
This was handled by the aws-sdk node module.  Credentials were placed in a file (~/.aws/credentials) and
this module read them when required.  Authentication was required when accomplishing the task below, see reference doc if in doubt (you can't request instance info of an instance you don't own! Well...you can, but you'll get a 401 unauthorized response).

- **Demonstrate a simple API call**  
I already had an existing instance running on EC2, so I chose to make a call which would describe the
running instance.  This was accomplished with a call to aws-sdk's `describeInstances` function. This 
describes details about the instance such as public/private IP, public/private DNS name, image ID, etc.
As you can see in the provided screenshot, the instance described by the API call (on the left) matches the instance in the EC2 web view on the right.

For reference:  
- API Reference [doc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html)  
- SDK Reference [doc](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeInstances-property)
