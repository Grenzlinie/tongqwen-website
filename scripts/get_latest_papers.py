import re
import requests
import pandas as pd
from bs4 import BeautifulSoup

# 请求用户输入Google Scholar主页的网址
url_base = input("请输入Google Scholar主页的网址: ")

# 定义HTTP请求头，模拟正常浏览器访问，以避免被网站阻止
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def get_soup(url):
    """
    发送HTTP请求到指定URL并获取BeautifulSoup对象。

    参数:
    - url: 要请求的网页的URL字符串。

    返回:
    - BeautifulSoup对象，用于进一步解析网页内容。

    异常:
    - HTTPError: 如果响应的状态码不是200，即请求失败。
    """
    # 定义请求头，模拟浏览器行为
    response = requests.get(url, headers=HEADERS)
    # 检查请求是否成功，如果状态码不是200，则抛出异常
    response.raise_for_status()
    # 使用BeautifulSoup解析响应内容，并返回BeautifulSoup对象
    return BeautifulSoup(response.text, 'html.parser')

# 主逻辑
def main():
    """
    主函数，从Google Scholar网站抓取指定数量的论文信息，并保存到Excel文件中。
    """
    # 定义列名
    columns = ['Year', 'Journal', 'Title', 'Author', 'First Author','CN/EN']

    # 初始化DataFrame，用于存储论文信息
    papers_df = pd.DataFrame(columns=columns)


    # Loop settings
    cstart = 0      # Starting index of papers
    pagesize = 100  # Number of papers per page

    # 初始化一个空列表来存储每行的数据
    data_rows = []

    # 每次爬取100篇，直到爬取所有文章
    while True:

        url = f'{url_base}&cstart={cstart}&pagesize={pagesize}'

        # 使用get_soup函数获取Google Scholar网页的BeautifulSoup对象
        soup = get_soup(url)

        # 找到所有表示论文的行
        rows = soup.find_all('tr', class_='gsc_a_tr')
        
        try:
            for row in rows:
                # 提取论文标题
                title = row.find('a', class_='gsc_a_at').text
                # 提取作者信息
                authors = row.find('div', class_='gs_gray').text
                # 提取第一作者
                first_author = authors.split(',')[0] if authors else 'N/A'
                # 提取发表年份
                year = row.find('span', class_='gsc_a_h gsc_a_hc gs_ibl').text
                # 提取期刊信息，并去除可能的页码等信息
                journal_info = row.find_all('div', class_='gs_gray')[1].text.split(',')[0] if len(row.find_all('div', class_='gs_gray')) > 1 else 'N/A'
                journal_name = re.sub(r'\s\d+.*$', '', journal_info)

                # 判断中文还是英文
                if ',' in authors:
                    Chinese_English = 'English'
                elif '，' in authors:
                    Chinese_English = 'Chinese'
                else:
                    Chinese_English = ''

                # 输出提示
                print(f"题目：{title}\n作者：{authors}\n一作：{first_author}\n年份：{year}\n期刊：{journal_name}\n中英文：{Chinese_English}\n")
                        
                # 构造论文信息字典
                data = {
                    'Year': year,
                    'Journal': journal_name,
                    'Title': title,
                    'Author': authors,
                    'First Author': first_author,
                    'CN/EN': Chinese_English
                }
                # 将论文信息添加到列表中
                data_rows.append(data)


            cstart += 100

        except:
            # 所有文献检索完成
            break
        
    # 将列表转换为DataFrame
    papers_df = pd.DataFrame(data_rows, columns=columns)

    # 创建文件名，包含当前的日期和时间
    filename = f'lib/papers_info.json'
    # 将DataFrame保存为JSON格式
    papers_df.to_json(filename, orient='records', force_ascii=False)

    # 输出提示
    print(f'文件已经生成: {filename}')

if __name__ == "__main__":
    main()
