import time
from selenium.webdriver.common.by import By
import sys  # acquire parameters
import pandas as pd
import os

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
driver = webdriver.Chrome(ChromeDriverManager().install())


def find_btn_menu_1():
    try:
        btn_menu_1 = driver.find_element(
            By.XPATH, "//a[contains(text(), '학생생활신청')]")
        time.sleep(1)
        btn_menu_1.click()
    except:
        print("Error: <a> 태그 중에서 텍스트가 '학생생활신청'인 요소가 없음")
    return


def find_btn_menu_2():
    try:
        btn_menu_2 = driver.find_element(
            By.XPATH, "//a[contains(text(), '소학회상세정보신청')]")
        time.sleep(1)
        btn_menu_2.click()
    except:
        print("Error: <a> 태그 중에서 텍스트가 '소학회상세정보신청'인 요소가 없음")
    return


# import sys를 활용하여 매개변수를 받아온다.
if __name__ == '__main__':
    driver.get('https://mhaksa.ajou.ac.kr:30443/index.html')
    driver.maximize_window()
    input_id = driver.find_element('name', 'userId')
    input_pw = driver.find_element('name', 'password')
    btn_login = driver.find_element('id', 'loginSubmit')
    input_id.send_keys('nhle0217')
    input_pw.send_keys('030217nana')
    btn_login.click()

    find_btn_menu_1()

    find_btn_menu_2()

    while (True):
        pass
