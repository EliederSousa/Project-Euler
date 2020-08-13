## 
#  030.py
#  
#  Copyright (c) 2020, Elieder Sousa
#  eliedersousa<at>gmail<dot>com
#  
#  Distributed under the MIT license. 
#  See <license.txt> file for details.
#  
#  @date     13/08/20
#  
#  @brief    "Digit fifth powers"
#  Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
#  
#  1634 = 14 + 64 + 34 + 44
#  8208 = 84 + 24 + 04 + 84
#  9474 = 94 + 44 + 74 + 44
#  
#  As 1 = 14 is not a sum it is not included.
#  The sum of these numbers is 1634 + 8208 + 9474 = 19316.
#  Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
##

def soma( n ):
    sum = 0
    for c in str(n):
        sum += int(c)**5
    return sum
    

total = 0
for d in range( 2, 200000):
    if soma(d) == d:
        total += d
        
print(total);