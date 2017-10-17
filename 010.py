import math

def isPrime(n):
    if n == 2:
        return True
    elif n == 3:
        return True
    if n % 2 == 0:
        return False
    if n % 3 == 0:
        return False
    else:
        div = 3
        limit = math.sqrt(n)
        while div <= limit:
            if n % div == 0:
                return False
            else:
                div += 2
        return n > 1


def summationOfPrimes(n):
    sum = 0
    for i in range(3, n + 1, 2):
        if isPrime(i):
            sum += i
    if n >= 2:
        return sum + 2
    return sum