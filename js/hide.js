//时刻关注现在执行的是哪个定时器
  window.onload=function(){

    function getPos(oDiv3)//----------------------------------------------------------用封装函数获取物体的外边距
    {
      var l=0,t=0;
      //alert(oDiv3+','+oDiv3.className);
      while(oDiv3)
      {//一个元素的父级不可能无限多就以oDiv3为条件
        l+=oDiv3.offsetLeft;
        t+=oDiv3.offsetTop;
        oDiv3=oDiv3.offsetParent;//利用它让它不断往定位的父级上升
        //alert(oDiv3+','+oDiv3.className);
      }
      //body是没有定位父级的，所以循环到最后就变成null，循环就到头了
      return{left:l,top:t};//再以json的形式把值返回去
    }

    var oDiv3=document.getElementById('tools');
    var oDiv2=document.getElementById('div2');
    var oDiv8=document.getElementById('fontColor');
    var aDiv6=oDiv8.getElementsByTagName('a');
    //初始的top
    var initTop=getPos(oDiv3).top;//-----------------------------------------------将吸顶条的外边距用变量存起来
    //每当页面滚动的时候都应该检测一下
    window.onscroll=function()
    {
      var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
      //--------------------------------------------------------------------------将滚动距离做兼容性处理
  console.log(scrollTop,initTop)
      if(scrollTop>initTop)//----------------------------------------------------符合条件时将oDiv固定定位且Div2显示
      {
        oDiv3.style.position='fixed';
        oDiv2.style.display='block';
        oDiv3.style.background='#fff';
        for(var i=0;i<aDiv6.length;i++){
          aDiv6[i].style.color='#666';
        }
      }
      else {//--------------------------------------------------------------------不符合条件时取消定位且Div2不显示
        oDiv3.style.position='';
        oDiv2.style.display='none';
        oDiv3.style.background='';
        for(var i=0;i<aDiv6.length;i++){
          aDiv6[i].style.color='';
        }
      }
    };


    var oA=document.getElementById('phoneIcon');
    var oDiv=document.getElementById('phone');
    var timer=null;//父函数的变量子函数同样可以用
    oA.onmouseover=function()
    {
      clearTimeout(timer);//再次循环时关闭前一个定时器，阻止phone后消失
      timer=setTimeout(function(){
        oDiv.style.display='block';
      },300);//当鼠标在按钮上停留300毫秒后div显示
    };
    oA.onmouseleave=function()
    {
      clearTimeout(timer);//若鼠标只是滑过按钮则关闭上一个定时器300毫秒后让div不显示
      timer=setTimeout(function(){
        oDiv.style.display='none';
      },1000);//若div正常显示则让它1s后消失
    };
    oDiv.onmouseenter=function(){
      clearTimeout(timer);//若鼠标悬停在div上则关闭上一个定时器让div一直显示
    };
    oDiv.onmouseleave=function(){
      timer=setTimeout(function(){
        oDiv.style.display='none'
      },1000);//若鼠标离开div则让div在1s后消失
    }

    var oA1=document.getElementById('wechatIcon');
    var oDiv1=document.getElementById('wechat');
    var timer=null;//父函数的变量子函数同样可以用
    oA1.onmouseover=function()
    {
      clearTimeout(timer);//再次循环时关闭前一个定时器，阻止phones后消失
      timer=setTimeout(function(){
        oDiv1.style.display='block';
      },300);//当鼠标在按钮上停留300毫秒后div显示
    };
    oA1.onmouseleave=function()
    {
      clearTimeout(timer);//若鼠标只是滑过按钮则关闭上一个定时器300毫秒后让div不显示
      timer=setTimeout(function(){
        oDiv1.style.display='none';
      },1000);//若div正常显示则让它1s后消失
    };
    oDiv1.onmouseenter=function(){
      clearTimeout(timer);//若鼠标悬停在div上则关闭上一个定时器让div一直显示
    };
    oDiv1.onmouseleave=function(){
      timer=setTimeout(function(){
        oDiv1.style.display='none'
      },1000);//若鼠标离开div则让div在1s后消失
    }

    var oDiv12=document.getElementById('table1');
    var oDiv11=document.getElementById('cont3Tab');
    var aBtn=oDiv11.getElementsByTagName('span');
    var aDiv=oDiv12.getElementsByTagName('ul');
    for(var i=0; i<aBtn.length; i++)
  {
    (function(index){
      aBtn[i].onclick=function(){
        for(var i=0; i<aBtn.length; i++){
          aBtn[i].className='';
          aDiv[i].className='';
        }
        aBtn[index].className='cur';
        aDiv[index].className='active';
      }
    })(i);
  }
  }
