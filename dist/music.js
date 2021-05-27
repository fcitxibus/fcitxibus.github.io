const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
    listFolded: true, //播放列表默认折叠
    listMaxHeight: 20, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
    preload: 'auto', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed:true , //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
audio: [
  {
    name: '绅士',
    artist: '薛之谦',
    lrc: '/downloads/lrc/绅士-薛之谦.lrc',
    cover: 'https://p1.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg',
    url: 'http://music.163.com/song/media/outer/url?id=32192436.mp3'
  },
	  {
        name: '桃花庵',
        artist: '音阙诗听/封茗囧菌',
        lrc: '/downloads/lrc/桃花庵-音阙诗听,封茗囧菌.lrc',
        cover: 'http://img2.kuwo.cn/star/albumcover/300/67/78/116927395.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=1355197518.mp3'
      },
	 {
        name: '北城以北南城以南',
        artist: '花7',
        lrc: '/downloads/lrc/北城以北,南城以南-花7.lrc',
        cover: 'http://img4.kuwo.cn/star/albumcover/300/9/20/3895826455.jpg?param=300x300',
        url: 'https://freetyst.nf.migu.cn/public%2Fproduct09%2F2018%2F05%2F14%2F2018%E5%B9%B404%E6%9C%8813%E6%97%A509%E7%82%B913%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E5%AE%87%E4%B8%96%E5%8D%9A25%E9%A6%96%2F%E5%85%A8%E6%9B%B2%E8%AF%95%E5%90%AC%2FMp3_64_22_16%2F%E5%8C%97%E5%9F%8E%E4%BB%A5%E5%8C%97%E5%8D%97%E5%9F%8E%E4%BB%A5%E5%8D%97-%E8%8A%B17.mp3'
      },
	  {
        name: '勾指起誓英文版（人声版）（Cover：ilem）',
        artist: '葵花fa',
        lrc: '/downloads/lrc/勾指起誓-葵花fa.lrc',
        cover: 'http://imge.kugou.com/stdmusic/240/20190220/20190220113738222140.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=1346676131.mp3'
      },
	 {
        name: '街灯晚餐',
        artist: '卫兰',
        lrc: '/downloads/lrc/街灯晚餐-卫兰.lrc',
        cover: 'http://imge.kugou.com/stdmusic/240/20150720/20150720161449890476.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=25657581.mp3'
      },
	  {
        name: '记昨日书-伏仪',
        artist: '伏仪',
        lrc: '/downloads/lrc/记昨日书-伏仪.lrc',
        cover: 'http://img3.kuwo.cn/star/albumcover/300/52/45/72704424.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=501220618.mp3'
      },
	  {
        name: '樱花樱花想见你（Cover RSP）',
        artist: 'ゆう十',
        lrc: '/downloads/lrc/樱花樱花想见你-ゆう十.lrc',
        cover: 'http://p2.music.126.net/6_6PfLcHwBOKNekhiwqdpQ==/109951162986344534.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=472194327.mp3'
      }
    ]
  });
  //实现切换音频时，根据音频的封面图片自适应主题色
  const colorThief = new ColorThief();
  const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
      colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
        ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
      });
    }
  };
  setTheme(ap.list.index);
  ap.on('listswitch', (data) => {
    setTheme(data.index);
  });