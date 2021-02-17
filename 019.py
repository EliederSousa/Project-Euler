## 
#  019.py
#  
#  Copyright (c) 2020, Elieder Sousa
#  eliedersousa<at>gmail<dot>com
#  
#  Distributed under the MIT license.
#  
#  @date     17/02/21
#  
#  @brief       "Counting Sundays"
#               You are given the following information, but you may prefer to do some research for yourself.
#
#               > 1 Jan 1900 was a Monday.
#               > Thirty days has September,
#               April, June and November.
#               All the rest have thirty-one,
#               Saving February alone,
#               Which has twenty-eight, rain or shine.
#               And on leap years, twenty-nine.
#               > A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
#
#               How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
##

# 1900 was not a leap year (isn't a multiple of 400) and started on a Monday, so:
# 365 % 7 = 1
# Therefor, 1/1/1901 was a Tuesday.


meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
dias = 1
domingos = 0
for ano in range( 1901, 2001 ):
    for mes in range(12):
        dias += meses[mes]
        
        # Is it a leap year?
        if mes == 1 and ano % 4 == 0:
            dias += 1
        
        # Is it Sunday?
        if dias % 7 == 6:
            domingos += 1
        
print(domingos)























