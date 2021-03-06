try {
  document.body.addEventListener('touchstart', () => { })
  document.body.addEventListener('click', (e) => {
    let TagArr=['A','IMG','INPUT','TEXTAREA'];
    if (TagArr.indexOf(e.target.tagName)>-1) return
    const moveDotWrap = document.createElement('div')
    const expression = [
      'https://q.huxiaojun.work/1.jpg',
      'https://q.huxiaojun.work/2.jpg',
      'https://q.huxiaojun.work/3.jpg',
      'https://q.huxiaojun.work/4.jpg',
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
  $("<link>").attr({ href: "/waifu.css", rel: "stylesheet", type: "text/css" }).appendTo('head');
  $("<script>").attr({ src: 'https://player.lmih.cn/player/js/player.js', id:"myhk", key:"159047776484", m:"1"}).appendTo('body');
  $("<script>").html(`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-TPC877MB0L');`).appendTo('head');
  
  $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');

  $.ajax({
    url: "/waifu-tips.js", dataType: "script", cache: true, success: function (res) {

      $.ajax({
        url: "/live2d.js", dataType: "script", cache: true, success: function (res) {
          /* 可直接修改部分参数 */
          live2d_settings['modelAPI'] = 'https://wp.huxiaojun.work/wp-content/themes/service/api/';   // 自建 API 修改这里
          live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
          live2d_settings['modelId'] = 1;                  // 默认模型 ID
          live2d_settings['modelTexturesId'] = 29;          // 默认材质 ID
          live2d_settings['modelStorage'] = false;         // 不储存模型 ID

          /* 在 initModel 前添加 */
          initModel("/waifu-tips.json");
        }
      });
    }
  });
} catch (err) { console.log(err) }
