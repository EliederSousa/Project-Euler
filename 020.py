## 
#  020.py
#  
#  Copyright (c) 2020, Elieder Sousa
#  eliedersousa<at>gmail<dot>com
#  
#  Distributed under the MIT license. 
#  
#  @date     11/08/20
#  
#  @brief    "Factorial digit sum"
#  			n! means n × (n − 1) × ... × 3 × 2 × 1
#  			For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
#  			and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
#  			Find the sum of the digits in the number 100!
##

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
