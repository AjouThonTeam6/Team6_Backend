import sys  # acquire parameters
import pandas as pd
import os

# 코드 생략...


def op():
    os.chdir(os.getcwd())
    df1 = pd.read_table(sys.argv[1], encoding='utf-8')
    print(df1, end='')
    sys.stdout.flush()


# import sys를 활용하여 매개변수를 받아온다.
if __name__ == '__main__':
    op()
