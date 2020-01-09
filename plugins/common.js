document.body.addEventListener('touchstart', () => {})
document.body.addEventListener('click', (e) => {
  if(e.target.href)return
  const moveDotWrap = document.createElement('div')
  const expression = [
    '/images/smilies/qq/huaixiao.gif',
    '/images/smilies/qq/yinxian.gif',
    '/images/smilies/qq/xieyanxiao.gif',
    '/images/smilies/qq/xiaoku.gif',
    '/images/smilies/qq/ciya.gif',
    '/images/smilies/qq/wozuimei.gif',
    '/images/smilies/qq/koubi.gif'
  ]
  moveDotWrap.className = 'move-dot-wrap on'
  moveDotWrap.style.top = e.clientY - 10 + 'px'
  moveDotWrap.style.left = e.clientX - 10 + 'px'
  const oImg = new Image()
  oImg.src = expression[parseInt(Math.random() * expression.length)]
  moveDotWrap.appendChild(oImg)
  document.body.appendChild(moveDotWrap)
  setTimeout(() => moveDotWrap.remove(), 1000)
})
