def power(n,exp):
  nums = map((lambda x: int(x)),list(str(n**exp)))
  return sum(nums)
  
print(power(2,1000))