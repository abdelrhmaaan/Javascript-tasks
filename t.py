# result = []
# scores = []

# if __name__ == '__main__':
#     for _ in range(int(input())):
#         name = input()
#         score = float(input())
#         result+=[[name,score]]
#         scores+= [score]
#     runner_up = sorted(list(set(scores)))[1]

#     for name,score in result:
#         if score == runner_up:
#             print(name)

# if __name__ == '__main__':
#     n = int(input())
#     student_marks = {}
#     for _ in range(n):
#         name, *line = input().split()
#         scores = list(map(float, line))
#         student_marks[name] = scores
#     query_name = input()
    
#     for name in student_marks:
#         if name == query_name:
#             score_list = student_marks[name]
#             avg = sum(score_list)/len(score_list)
#             print(avg)

a = [1,2,3,4]

# print(a[:])

# def count_substring(string, sub_string):
#     # compare substing with another 
#     count = 0
#     for i in range(0,len(string)):
#         if string[i:i+len(sub_string)] == sub_string:
#             count += 1
#     return count

# if __name__ == '__main__':
#     string = 'ABCDCDC'
#     sub_string = 'CDC'
    
#     count = count_substring(string, sub_string)
#     print(count)

# mutable list , dict , set 

# a = [1,2,3]
# a[0] = 2
# b = {'1','1','2','2'}
# b.add(1)
# b.remove('1')
# b.clear()
# print(b)
# b = {1,2,3,3}
# # print(b[0])
# c = {'1':'1','2':'2'}
# c['1'] = 'not 1'
# print(c)

# # immutable -> tuble , int , string ,float
# d = (2,3)
# d[0] = 1
# print(d[0])
# def simpleGeneratorFun(): 
#     yield 1            
#     yield 2            
#     yield 3 

# a = simpleGeneratorFun()
# print(next(a))
# print(next(a))
# print(next(a))


# # generator expression 
# generator_exp = (i * 5 for i in range(5) if i%2==0) 

# for i in generator_exp: 
# 	print(i)

# def a(arg):
#     arg = 2
#     b = arg
#     return arg

# b = 3

# a(b)

# print(b)

# input which is the width 

# width = int(input('=')) 
width = 5

# n = int(input())
# n = 5
# th = int()
# if n%2!=0:
#     th = n
# c = 'H'
# for i in range(th):
#     uc = (i*2+1)*c
#     wdt = th*2-1
#     print(uc.center(wdt))
# for _ in range(th+1):
#     print((c*th).center(th*2) + (c*th).center(th*6))
# for _ in range((th+1)//2):
#     print((c*th*5).center(th*6))
# for _ in range(th+1):
#     print((c*th).center(th*2) + (c*th).center(th*6))
# for i in range(th, 0, -1):
#     uc = (i*2-1)*c
#     wdt = th*5*2
#     print(uc.center(wdt))

# st = 'ljasdlfkjaskldfjalskdfjklasdaf'
# ln = 4
# tem_str = ''
# wrp_str = ''
# for char in st:
#     # as len(temp_str) == 4
#     tem_str +=char
#     if len(tem_str) == ln:
#         wrp_str +=tem_str+'\n'
#         tem_str = ''

# wrp_str+=tem_str

# print(wrp_str)

# import textwrap

# st = 'flaskdjflaskjdfklasjl'

# newst = textwrap.wrap(st,4)
# newst = '\n'.join(newst)
# print(newst)
number = 17

width = len(bin(number)) - 2


for i in range(1, number+1):
    print(f"{i:>{width}} {i:>{width}o} {i:>{width}X} {i:>{width}b}")