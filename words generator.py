import random       ###导入random模块
bw = '我{v0}{n20}和{n21},通过对{n30}的研究,实现了{n40}'    ### 命名字符串bw
num = {'v':6, 'n2': 5, 'n3': 9, 'n4': 7} ###建立一个名字为num的字典key分别命名为v n2 n3 n4，对应的数字值为我们人为从词云中采用的动名词数量
v = '负责、优化、运营、设计、开发、提升'.split('、') #以、为分隔符对字符串切片
n2 = '项目、产品、游戏、内容、用户'.split('、')#以、为分隔符对字符串切片
n3 = '系统、视觉内容、市场策略、合作伙伴、业务渠道、算法、架构设计、技术、角色风格'.split('、')#以、为分隔符对字符串切片
n4 = '流程商业化、产品生命周期、解决方案落地、概念设计、用户模型、美术风格、平台规划'.split('、')#以、为分隔符对字符串切片
###. sample用于无重复的随机抽样，所有子切片将是随机的样本，分别从上述四个字符串中抽样，建立四个新的随机list，长度与原有的数量保持一致
v_list = random.sample(v, num['v']) 
n2_list = random.sample(n2, num['n2'])
n3_list = random.sample(n3, num['n3'])
n4_list = random.sample(n4, num['n4'])
lists = {'v': v_list, 'n2': n2_list, 'n3': n3_list, 'n4': n4_list}#建立一个lists为名的字典，四个key对应的value是随机生成的新列表
dic = {} ##命名一个dic的空字典
for current_type in ['v', 'n2', 'n3', 'n4']: #遍历key
    current_list = lists[current_type]  #，利用字典lists 将key对应成相应的列表并命名为current_list
    for i in range(0, len(current_list)): #range构造从0开始到列表长度未知的数字序列，比如0,1,2；range用于指定for循环次数，此处循环次数等于列表元素个数之和
        dic[current_type + str(i)] = current_list[i] 
        #更新字典，key名称为原先的命名加数字，比如v1，n21；value为原先随机生成的新列表中的1,2,3
        ###如此遍历将所有动词名词存储到新的字典之中

result = bw.format(**dic) ### .format 格式化字符串，此时就可以用大括号以及其中的内容代表key对应的value了；利用**将字典中的key和value取出
print(result) 
