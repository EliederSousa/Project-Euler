import math
num = int(input("Enter a number: ") )

print(sum(map(int, str(math.factorial(num)))))



"""

# This is the way to do if you want to get rid of the built-in function.
def factorial(n):
    if n==0 or n==1:
        return 1
    return n * factorial(n - 1)

print(sum(map(int, str(factorial( num )))))

"""




