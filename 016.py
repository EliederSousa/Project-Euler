## 
#  016.py
#  
#  Copyright (c) 2020, Elieder Sousa
#  eliedersousa<at>gmail<dot>com
#  
#  Distributed under the MIT license.
#  
#  @date     07/08/20
#
#  @brief    "Power digit sum"
#  			2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
#  			What is the sum of the digits of the number 2^1000?
##

# Simple one-line answer. It even looks like cheating.
# If you see an other file with the same number, take a look on it.
# Maybe I did the hard implementation of the same thing.
sum(map(int, str(2**1000)))
