# PALINDROME
# def pal():
#     word = raw_input('> ')
#     word = word.replace(' ', '')
#
#     rev = word[::-1]
#
#     if word == rev:
#     	print "Correct"
#     else:
#     	print "Incorrect"
#         pal()
#
# pal()

# def pal(word):
#     word.replace(' ', '')
#     rev = word[::-1]
#     if rev == word:
#         print 'palindrome'
#     else:
#         print 'not a palindrom'
#     print word
#
# pal('racecar')

def pal(word):
    rev = list(word)
    rev.reverse()
    ''.join(rev)
    print rev

pal('dog')

# x = [1, 2, 3]
# x.reverse()
# print x

# FIZZBUZZ

# def fizzbuzz():
#     for i in range (1, 101):
#         if i % 3 == 0 and i % 5 == 0:
#             print 'fizzbuzz'
#         elif i % 3 == 0:
#             print 'fizz'
#         elif i % 5 == 0:
#             print 'buzz'
#         else:
#             print i

# array = ['fizz', 'buzz', 'fizzbuzz']
# def fizzbuzz():
#     for i in range (1, 101):
#         if i % 3 == 0 and i % 5 == 0:
#             print array[2]
#         elif i % 3 == 0:
#             print array[0]
#         elif i % 5 == 0:
#             print array[1]
#         else:
#             print i
#
# fizzbuzz()
