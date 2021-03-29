
##Daily Journal 5


<b>What is Scope ?</b>

<p>The meaning of scope in software engineering is where the variables are available for use. For example, if a var is placed outside of a function, it is globally scoped, meaning it is available for use outside of that function. If a var is in a function, it is function scoped.</p>

<b>What is Hoisting ?</b>

<p>Hoisting is a process that takes the variable and function declarations and moves them to the top of the scope before the code runs. Without hoisting, the code will run but return an error. </p>


<b>In what cases might you use let vs const vs var?</b>

<p>While var is definitely useful, having vars with the same name can be problematic. They can cause bugs to appear in your code. Meanwhile, lets are blocked scoped, meaning that they are only to be used in said block. Var and let can both be updated in its scope, but only var can be redeclared in its scope. Like let, const is block scoped; however, const cannot be redeclared or updated unless it is referring to an object. Vars are useful if you want to be able to redeclare them. Lets are more useful and more organized, and, most importantly, will not risk bugging your code because it is block scoped. Const would be best used if you want to have a constant value.</p>
