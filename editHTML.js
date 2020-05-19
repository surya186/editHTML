var div_root = document.createElement('div');
div_root.setAttribute('style', 'display:flex');
div_root.setAttribute('id', 'root');
document.getElementById('write').appendChild(div_root);
var div_child1 = document.createElement('div');
div_child1.setAttribute('style', 'width:50%; margin-right:5px');
div_child1.setAttribute('id', 'child1');
document.getElementById('root').appendChild(div_child1);

var div_child2 = document.createElement('div');
div_child2.setAttribute('style', 'width:50%');
div_child2.setAttribute('id', 'child2');
document.getElementById('root').appendChild(div_child2);

var pre_tags = document.getElementsByClassName('md-fences md-end-block ty-contain-cm modeLoaded');
pre_tags[0].setAttribute('id', 'pre1');
pre_tags[1].setAttribute('id', 'pre2');

var p_tags = document.getElementsByTagName('P');
p_tags[0].setAttribute('id', 'para1');
p_tags[1].setAttribute('id', 'para2');

first_para = document.getElementById('para1')
sec_para = document.getElementById('para2')

first_pre = document.getElementById('pre1')
sec_pre = document.getElementById('pre2')

document.getElementById('child1').appendChild(first_para);
document.getElementById('child1').appendChild(first_pre);
first_pre.setAttribute('style', 'width:100%; break-inside: unset; ');
sec_pre.setAttribute('style', 'width:100%; break-inside: unset;');

document.getElementById('child2').appendChild(sec_para);
document.getElementById('child2').appendChild(sec_pre);