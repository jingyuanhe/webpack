import avator from './1.jpg'
import './index.scss'
function header(){
    var dom=document.getElementById('root');
    var header=document.createElement('a');
    header.innerText='我是header'
    header.classList.add('iconfont');
    header.classList.add('iconnanxingmale154')
    dom.append(header);
    var img=new Image();
    img.src=avator;
    img.classList.add('avatar');
    dom.append(img)
}
export default header