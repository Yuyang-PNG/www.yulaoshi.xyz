Artplayer.RECONNECT_TIME_MAX = 120;
Artplayer.FAST_FORWARD_VALUE = 5;

var art = new Artplayer({
                container: '.artplayer-app',
                url: 'https://yulaoshi.xyz/视频网站/视频/棺姬嘉依卡 第一季/[VCB-Studio] Hitsugi no Chaika [02][Ma10p_1080p][x265_flac].mkv',
				
				customType: {
				        m3u8: function (video, url, art) {
				            //
				        },
				    },
					
				// 分辨率 1080P 60FPS
				quality: [
				        {
				            default: true,
				            html: '1080P',
							url:'https://yulaoshi.xyz/视频网站/视频/棺姬嘉依卡 第一季/[VCB-Studio] Hitsugi no Chaika [02][Ma10p_1080p][x265_flac].mkv',
				        },
						{
							html:'1080P 带字幕',
							url:'../视频/棺姬嘉依卡 第一季/带字幕/',
						},
						{
							html:'realesr-animevideov3-x3 4k 60FPS',
							url:'../视频/棺姬嘉依卡 第一季/带字幕/',
						}
				    ],
				// 添加字幕
				// subtitle: {
				//         url: '',
				//         type: 'srt',
				//         encoding: 'utf-8',
				//         escape: true,
				//         style: {
				//             // color: '#FFFFFF',
				//             // 'font-size': '40px',
				//         },
				// 	},
					
				hotkey: Boolean,
				airplay: true,
				mutex: true,
				// 是否显示视频播放速度功能，会出现在 和 里设置面板右键菜单
				playbackRate: true,
				// 是否在底部控制栏里显示 的开关按钮画中画
				pip: true,
				// 是否在底部控制栏里显示播放器 按钮窗口全屏
				fullscreen: true,
				//是否在底部控制栏里显示播放器 按钮网页全屏 
				fullscreenWeb: true,
				// 是否使用 挂载模式，假如你希望在播放器挂载前，就提前渲染好播放器所需的 时有用SSRHTML你可以通过 访问到播放器所需的 Artplayer.htmlHTML
				// useSSR: true,
				// 在移动端是否使用 模式playsInline
				playsInline: true,
				// 用于指明视频的格式，需要配合 一起使用，默认视频的格式就是视频地址的后缀（如 , , ），但有时候视频地地址没有正确的后缀，所以需要特别指明customType.m3u8.mkv.ts
				// type: 'm3u8',
					
				    // controls: [
				    //     {
				    //         position: 'right',
				    //         html: '发送弹幕',
				    //         click: function () {
				    //             var text = prompt('请输入弹幕文本', '弹幕测试文本');
				    //             if (!text || !text.trim()) return;
				    //             var color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
				    //             art.plugins.artplayerPluginDanmuku.emit({
				    //                 text: text,
				    //                 color: color,
				    //                 border: true,
				    //             });
				    //         },
				    //     },
				    // ],
					
				// controls: [
				//         {
				//             position: 'right',
				//             html: '隐藏弹幕',
				//             click: function () {
				//                 art.plugins.artplayerPluginDanmuku.hide();
				//             },
				//         },
				//         {
				//             position: 'right',
				//             html: '显示弹幕',
				//             click: function () {
				//                 art.plugins.artplayerPluginDanmuku.show();
				//             },
				//         },
				//     ],
				
				// controls: [
				//         {
				//             position: 'right',
				//             html: '隐藏弹幕',
				//             click: function (_, event) {
				//                 if (art.plugins.artplayerPluginDanmuku.isHide) {
				//                     art.plugins.artplayerPluginDanmuku.show();
				//                     event.target.innerText = '隐藏弹幕';
				//                 } else {
				//                     art.plugins.artplayerPluginDanmuku.hide();
				//                     event.target.innerText = '显示弹幕';
				//                 }
				//             },
				//         },
				//     ],
				
				// 使用弹幕数组
				setting: true,
				
				plugins: [
				        artplayerPluginDanmuku({
				            // 弹幕数组
				            danmuku: [
				                {
									text: '111', // 弹幕文本
									time: 3, // 发送时间，单位秒
									color: '#fff', // 弹幕局部颜色
									border: false, // 是否显示描边
									mode: 0, // 弹幕模式: 0表示滚动, 1静止
				                },
								{
									danmuku: [], // 弹幕数据
									speed: 5, // 弹幕持续时间，范围在[1 ~ 10]
									margin: [10, '25%'], // 弹幕上下边距，支持像素数字和百分比
									opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
									color: '#FFFFFF', // 默认弹幕颜色，可以被单独弹幕项覆盖
									mode: 0, // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
									modes: [0, 1, 2], // 弹幕可见的模式
									fontSize: 25, // 弹幕字体大小，支持像素数字和百分比
									antiOverlap: true, // 弹幕是否防重叠
									synchronousPlayback: false, // 是否同步播放速度
									mount: undefined, // 弹幕发射器挂载点, 默认为播放器控制栏中部
									heatmap: false, // 是否开启热力图
									width: 512, // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
									points: [], // 热力图数据
									filter: () => true, // 弹幕载入前的过滤器，只支持返回布尔值
									beforeEmit: () => true, // 弹幕发送前的过滤器，支持返回 Promise
									beforeVisible: () => true, // 弹幕显示前的过滤器，支持返回 Promise
									visible: true, // 弹幕层是否可见
									emitter: true, // 是否开启弹幕发射器
									maxLength: 200, // 弹幕输入框最大长度, 范围在[1 ~ 1000]
									lockTime: 5, // 输入框锁定时间，范围在[1 ~ 60]
									theme: 'dark', // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效
									OPACITY: {}, // 不透明度配置项
									FONT_SIZE: {}, // 弹幕字号配置项
									MARGIN: {}, // 显示区域配置项
									SPEED: {}, // 弹幕速度配置项
									COLOR: [], // 颜色列表配置项
								},
				            ],
				        }),
				],
				
				// 新增语言
				// lang: 'your-lang',
				//     i18n: {
				//         'your-lang': {
				//             Play: 'Your Play'
				//         },
				//     },
				
				// 修改语言
				// i18n: {
				//         // Change the default language
				//         'zh-cn': {
				//             Play: 'Your Play'
				//         },
				//         // Change the imported language
				//         'zh-tw': {
				//             ...zhTw,
				//             Play: 'Your Play'
				//         },
				//     },
				
				// 更新
				// setting: true,
				//     settings: [
				//         {
				//             name: 'slider',
				//             html: 'Slider',
				//             tooltip: '5x',
				//             icon: '<img width="22" heigth="22" src="/assets/img/state.svg">',
				//             range: [5, 1, 10, 1],
				//         },
				//     ],
				// });
				
				// // 初始化自定义的底部控制栏
				// controls: [
				//         {
				//             position: 'left',
				//             html: 'your-control',
				//             tooltip: 'Your Control',
				//             style: {
				//                 color: 'green',
				//             },
				//             click: function (...args) {
				//                 console.info('click', args);
				//             },
				//         },
				//     ],
				// // 在进度条上显示高亮信息
				// highlight: [
				//         {
				//             time: 60,
				//             text: 'One more chance',
				//         },
				//         {
				//             time: 120,
				//             text: '谁でもいいはずなのに',
				//         },
				//         {
				//             time: 180,
				//             text: '夏の想い出がまわる',
				//         },
				//         {
				//             time: 240,
				//             text: 'こんなとこにあるはずもないのに',
				//         },
				//         {
				//             time: 300,
				//             text: '－－终わり－－',
				//         },
				//     ],
				// 
				// 是否显示 按钮，当前只有部分浏览器支持该功能airplay
				airplay: true,
				// 是否在移动端的网页全屏时，根据视频尺寸和视口尺寸，旋转播放器
				autoOrientation: true,
				// 是否使用自动 回放功能
				autoPlayback: true,
				// 是否在移动端添加长按视频快进功能
				fastForward: true,
				// 是否在移动端显示一个 ，用于隐藏底部 锁定按钮控制栏
				lock: true,
				// 锁
				lock: true,
				// 快进
				fastForward: true,
				// 是否在移动端的网页全屏时，根据视频尺寸和视口尺寸，旋转播放器
				autoOrientation: true,
				// 是否显示 按钮，当前只有部分浏览器支持该功能airplay
				airplay: true,
				// 是否在底部控制栏里显示播放器 按钮窗口全屏
				fullscreen: true,
				// 是否在底部控制栏里显示 的开关按钮设置面板
				setting: true,
				// 是否使用快捷键
				hotkey: true,
				// 是否在底部控制栏里显示播放器 按钮网页全屏
				fullscreenWeb: true,
				// 迷你进度条，只在播放器失去焦点后且正在播放时出现
				miniProgressBar: true,
				// 是否在底部控制栏里显示 功能视频截图
				screenshot: true,
				// 是否显示视频长宽比功能，会出现在 和 里设置面板右键菜单
				aspectRatio: true,
				// 当播放器滚动到浏览器视口以外时，自动进入 模式迷你播放
				autoMini: true,
				// 播放器的尺寸默认会填充整个 容器尺寸，所以经常出现黑边，该值能自动调整播放器尺寸以隐藏黑边，类似 的containercssobject-fit: cover;
				autoSize: true,
				// 是否默认静音
				muted: true,
				// 播放器的默认音量
				volume: 0.5,
				// 播放器主题颜色，目前用于 和 上进度条高亮元素
				theme: '#ffad00',
				// 视频的海报，只会出现在播放器初始化且未播放的状态下
				poster: 'https://yulaoshi.xyz/视频网站/图片/495cc92902835272749189bf4d4445eb.jpg',
				// 播放器的唯一标识，目前只用于记忆播放autoplayback
				id: 'your-url-id',
				// 迷你进度条，只在播放器失去焦点后且正在播放时出现
				miniProgressBar: true,
				// // 是否使用 挂载模式，假如你希望在播放器挂载前，就提前渲染好播放器所需的 时有用SSRHTML你可以通过 访问到播放器所需的Artplayer.htmlHTML
				// useSSR: true,
            });
			
			// 更新
			
			// art.setting.show = true;
			
			// art.on('ready', () => {
			//     setTimeout(() => {
			//         // Update the setting by name
			//         art.setting.update({
			//             name: 'slider',
			//             html: 'PIP Mode',
			//             tooltip: 'Close',
			//             icon: '<img width="22" heigth="22" src="/assets/img/state.svg">',
			//             switch: false,
			//         });
			//     }, 3000);
			// });
			