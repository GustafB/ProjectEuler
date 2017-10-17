def factorial(n):
  if n == 1:
    return 1
  else:
    return n * factorial(n - 1)
    
def getDigitSum(n):
  digits = list(str(n))
  return sum(map(lambda x: int(x),digits))

print(getDigitSum(factorial(100)))