##Daily Journal 11

<b>What are the two common operations that we will set in the handler?</b>

1.The set operation.

2. The get operation.

<b>What do you have to make sure you are doing with every Get to insure the value does not become undefined?</b>

You need to create a trap. For example, the handler object is basically a set of traps that go off whenever something tries to access them.



<b>What are some of the benefits of the proxy object that we are using in our structure for applications?</b>

Private properties- Proxies allow us to make private properties, meaning no one can access these specific properties. 