const taskinput = document.getElementById('input-task');
const addbtn = document.getElementById('add-btn');
const todolist = document.querySelector('.task-list')

addbtn.addEventListener('click', function(){
    // 获取输入框的值,使用trim()去除首尾空格
    const tasktest = taskinput.value.trim();

    // 若输入为空则返回,不作任何处理
    if (tasktest === ''){
        alert('请输入任务内容!')
        return;
    }

    // 创建新的<li>
    const newli = document.createElement('li');
    newli.className = 'task';
    newli.textContent = tasktest;

    // 把新创建的<li>添加到<ul>中
    todolist.appendChild(newli);

    // 清空输入框
    taskinput.value = "";
});