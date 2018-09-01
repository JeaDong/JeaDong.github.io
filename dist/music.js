const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "その声消えないよ",
        artist: 'Fumika&Sunya',
        url: 'http://up.mcyt.net/?down/47679.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/14.jpg',
      },
      {
        name: '海贼王:沙漠王女与海贼们',
        artist: '川嶋あい',
        url: 'http://up.mcyt.net/?down/47176.mp3',
        cover: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C286%2C770%2C508%3Bc0%3Dbaike92%2C5%2C5%2C92%2C30/sign=73064689c111728b2462d662f5cceffc/9d82d158ccbf6c81220ce5f0b03eb13533fa40eb.jpg',
      },
      {
        name: '暁の车',
        artist: '南里侑香',
        url: 'http://up.mcyt.net/?down/46404.mp3',
        cover: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=157c498b3d01213fdb3e468e358e5db4/d50735fae6cd7b89063d47d10b2442a7d9330e0a.jpg',
      }
    ]
});