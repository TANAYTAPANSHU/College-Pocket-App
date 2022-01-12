function RecursionFactorial(n)
{
if(n===1)
{
  return 1
}
else
{
  return(n*RecursionFactorial(n-1))
}


}

function IterationFactorial(n)
{
  let result =1;
while(n!==1)
{
result = n*result;
n=n-1;
}
return(result)

}

console.log(`Factorial of ${num} using RecursionFactorial is   ${RecursionFactorial(n)}`)

console.log(`Factorial of ${num} using IterationFactorial is   ${IterationFactorial(n)}`)