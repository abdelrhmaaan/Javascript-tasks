if __name__ == '__main__':
    N = int(input())
    # if condition ?
    lst = []
    print_list = []
    for _ in range(N):
        method = input('')
        # some steps for this choice 
        # insert 0 5
        if 'insert' in method:
            _,b,c = method.split(' ')
            lst.insert(int(b),int(c))
        elif method == 'print':
            new_list = lst.copy()
            print_list.extend([new_list])
        elif 'remove' in method:
            _,b = method.split(' ')
            lst.remove(int(b))
        elif 'append' in method:
            _,b = method.split(' ')
            lst.append(int(b))
        elif method == 'sort':
            lst.sort()
        elif method == 'pop':
            lst.pop()
        elif method == 'reverse':
            lst.reverse()
        else:
            print('''
                    Please just type the
                    insert e,print,remove e,append e,
                    pop,reverse......... 
                  ''')
    # after loop ending u can print output depending on how many print command typed
    for output in print_list:
        if print_list:
            print(output)
