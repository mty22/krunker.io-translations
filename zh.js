module.exports = `
menu.btn.ranked 排位赛
menu.btn.shop 商店
menu.btn.social 社区
menu.btn.maps 地图
menu.btn.mods 模组
menu.btn.settings 设置
menu.btn.customize 自定义
menu.btn.invite 邀请
menu.btn.invite.clicked 已复制
menu.btn.join 加入服务器
menu.btn.host 创建服务器
menu.btn.browser 浏览服务器
generic.wait 请稍等…
generic.loading 加载中…
generic.none 无
generic.connecting 连接中…
generic.select 选择
generic.delete 删除
generic.save 保存
generic.load 加载
generic.search 搜索
generic.leave 离开
generic.default 默认
generic.submit 提交
generic.create 创建
generic.random 随机
generic.failed 失败
generic.success 成功！
generic.name 用户名
generic.level 等级
generic.score 总得分
generic.off 关
generic.defeat 失败
generic.victory 胜利
generic.matchover 比赛结束
generic.matchaband 比赛被迫终止
generic.follow 关注
generic.unfollow 取消关注
generic.followers 个关注者
generic.following 个关注中
generic.games 游玩局数
generic.wins 胜场数
generic.lose 败场数
generic.clan 战队
generic.games.played 游玩局数
generic.games.won 胜场数
generic.games.lost 败场数
generic.timep 游玩时间
generic.kills 击杀数
generic.deaths 死亡数
generic.kdr 战损率
generic.time 时间
generic.logout 注销
generic.logout.sessions 为所有设备注销
generic.username 输入用户名
generic.password 输入密码
generic.register 注册
generic.login 登录
generic.accuracy 命中率
player.waiting 等待更多玩家加入
player.died 你死了
player.killed 被此玩家击杀
player.killstreak {0} on a {1} Kill Streak
player.inactive 由于您的空闲时间过长，您已被踢出此服务器
player.disconnect 连接已断开
timer.end 下一场将在 {0} 后开始
leaderboard.empty 这里没有任何玩家…
popup.checkpoint 检查点！
app.play 点击开始游戏
app.spectate 点击开始观战
app.play.mobile 点击屏幕开始游戏
app.spectate.mobile 点击屏幕开始观战
app.play.controller 按下开始键开始游戏
app.spectate.controller 按下开始键开始观战
purchase.error 出错了！
purchase.error.click 点此</a> 重试！
purchase.error.limit 您可能已超出每日交易限额
settings.reset 重置
settings.reset.confirm 您确定要重置所有设置吗？
settings.import 导入
settings.export 导出
settings.none 没有找到任何设置
settings.backup 备份设置
settings.controls.change 按键设置
settings.controls.press 按任意键
settings.local.header 本地化 <span id="requiresRestart"><span style="color: #eb5656">*</span> 需要重启游戏</span>
settings.local.region 默认服务器地区
settings.local.lang 语言
settings.network.header 网络
settings.network.netRerouting 动态路由（影响网络延时）
settings.network.netRate 网络刷新率 (Hz)
settings.network.lagComp 延迟补偿
settings.popup.header 弹窗
settings.popup.freeKRPop 显示免费 KR 弹窗
settings.experimental.header 实验性
settings.experimental.optNetwork 网络最优化
settings.experimental.aimFreezeFix 瞄准冻结修正（射击时限制帧率）
settings.experimental.mouseFlickFix 鼠标无故跳动修正（限制轮询率）
settings.experimental.shaderRendering 实例化渲染
settings.client.header 客户端
settings.client.unlimitedFrames 禁用垂直同步
settings.client.gameCap 游戏捕获
settings.client.experimental 实验性功能
settings.client.discordRPC Discord 丰富状态
settings.client.resourceSwapper 资源包
settings.client.clearCache 清除缓存
settings.client.resetSettings 重置客户端设置
settings.client.acceleratedCanvas 画布元素硬件加速
settings.client.angleBackend 几乎原生图型抽象层引擎后端
settings.client.colorProfile 色彩配置文件
settings.dev.header 开发者
settings.dev.forceUpdate 强制刷新皮肤
settings.dev.forceRegen 总是重生玩家
settings.dev.extraBan 更多封禁信息
settings.chat.header 聊天
settings.chat.chat 显示聊天窗口
settings.chat.chat.all 总是
settings.chat.chat.focus 聚焦到「输入信息」字段时
settings.chat.messages 显示玩家信息
settings.chat.unboxings 显示玩家开箱信息
settings.chat.chatOp 聊天窗口不透明度
settings.chat.chatBGOp 聊天窗口背景不透明度
settings.chat.chatHeight 聊天窗口高度
settings.chat.chatTimer 聊天文本显示时间
settings.chat.chatTextOutline 聊天文本轮廓
settings.chat.chatFilter 脏话过滤器
settings.quality.header 游戏性能
settings.quality.updRate 帧率上限
settings.quality.rendDst 渲染距离
settings.quality.res 分辨率
settings.quality.part 粒子特效
settings.quality.mapDet 地图细节
settings.quality.noTex 禁用纹理贴图
settings.quality.partdist 粒子渲染距离
settings.quality.renderdist 渲染距离
settings.quality.reflection 倒影质量
settings.quality.antiAlias 反锯齿
settings.quality.shadows 阴影
settings.quality.softShad 柔和阴影
settings.quality.highResShad 高分辨率阴影
settings.quality.shadowsDynamic 动态阴影
settings.quality.trails 显示曳光踪迹
settings.quality.yourTrails 显示自身子弹
settings.quality.mflash 枪口火焰
settings.quality.flap 显示狙击镜保护盖
settings.quality.lowSpec 低规格模式
settings.quality.ambient 环境阴影深浅程度
settings.quality.ambientOld 旧版阴影渲染算法（当可用时）
settings.quality.textureAnim 纹理动画
settings.quality.objectAnim 地图物体动画
settings.quality.screenShake 屏幕晃动
settings.quality.weaponShine 武器光泽
settings.quality.rendGamma 伽马强度
settings.quality.lighting 光照质量
settings.quality.showExplo 显示爆炸特效
settings.quality.aspectRatio 画面宽高比
settings.post.header 后期处理
settings.post.post 启用后期处理
settings.post.bloom 高光
settings.post.bloomThreshold 高光阈值
settings.post.bloomStrength 高光强度
settings.post.bloomRadius 高光半径
settings.post.ssao 屏幕空间环境光屏蔽
settings.post.ssaoRadius 屏幕空间环境光屏蔽半径
settings.interface.hitInd 显示伤害来源指示器
settings.interface.hitColor 伤害来源指示器颜色
settings.interface.dmg 显示伤害值
settings.interface.dmgCol 普通伤害值颜色
settings.interface.critCol 暴击伤害值颜色
settings.interface.header 界面
settings.interface.scale 用户界面显示比例
settings.interface.ui 显示状态栏
settings.interface.scoreboard 使用旧版记分板
settings.interface.oldBrowser 使用旧版服务器浏览器
settings.interface.rarityanim 禁用稀有物品动画
settings.interface.showPfp 显示玩家头像
settings.interface.showTradeMsg 显示交易信息
settings.interface.hideNonTrade 隐藏不可交易的皮肤
settings.interface.hp 动态血条
settings.interface.dmgScale 伤害显示显示比例
settings.interface.killf 显示击杀列表
settings.interface.ping 显示网络延时
settings.interface.net-stats 显示网络统计数据
settings.interface.fps 显示帧数
settings.interface.deaths 显示死亡数
settings.interface.kd 显示战损率
settings.interface.kills 显示击杀数
settings.interface.streak 显示连杀数
settings.interface.score 显示得分
settings.interface.spectators 显示观战人数
settings.interface.speed 显示移动速度
settings.interface.speedOffX 移动速度计数器水平坐标
settings.interface.speedOffY 移动速度计数器垂直坐标
settings.interface.speedOpacity 移动速度计数器不透明度
settings.interface.speedScale 移动速度计数器显示比例
settings.interface.speedColor 当前速度颜色
settings.interface.speedColorMax 最高速度颜色
settings.interface.medals 显示勋章
settings.interface.hideNames 名牌显示
settings.interface.hideNames.team 仅限队友
settings.interface.hideNames.enemy 仅限敌人
settings.interface.hideNames.all 全部显示
settings.interface.nametagStyle 名牌样式
settings.interface.nametagOpac 名牌不透明度
settings.interface.nametagStyle.health 仅限血条
settings.interface.nametagStyle.name 仅限名称
settings.interface.nametagStyle.nameLvl 名称和等级
settings.interface.nametagStyle.all 全部显示
settings.interface.healthNum 显示血量
settings.interface.healthColT 队友血条颜色
settings.interface.healthColE 敌人血条颜色
settings.interface.xpBarCol 经验条第一颜色
settings.interface.xpBarCol2 经验条第二颜色
settings.interface.xpBarOpac 经验条不透明度
settings.crosshair.header 准星
settings.crosshair.type 种类
settings.crosshair.type.1 动态
settings.crosshair.type.2 形状
settings.crosshair.type.3 叠层
settings.crosshair.type.4 图片
settings.crosshair.type.5 精准
settings.crosshair.style 样式
settings.crosshair.style.0 十字
settings.crosshair.style.1 空心圆
settings.crosshair.style.2 实心圆
settings.crosshair.style.3 空心方块
settings.crosshair.style.4 实心方块
settings.crosshair.image 图片
settings.crosshair.image.paste 图片网址
settings.crosshair.image.width 图片宽度
settings.crosshair.image.height 图片高度
settings.crosshair.always 总是显示
settings.crosshair.color 颜色
settings.crosshair.shadow.color 阴影颜色
settings.crosshair.shadow.thickness 阴影粗细
settings.crosshair.size 尺寸
settings.crosshair.thickness 粗细
settings.crosshair.gap 间隙
settings.crosshair.dot 点
settings.crosshair.opacity.use 使用不透明度
settings.crosshair.opacity.custom 不透明度
settings.crosshairm.header 准星（投掷时）
settings.crosshairm.type 种类
settings.crosshairm.type.1 形状
settings.crosshairm.type.2 图片
settings.crosshairm.type.3 精准
settings.crosshairm.style 样式
settings.crosshairm.style.0 十字
settings.crosshairm.style.1 空心圆
settings.crosshairm.style.2 实心圆
settings.crosshairm.style.3 空心方块
settings.crosshairm.style.4 实心方块
settings.crosshairm.image 图片
settings.crosshairm.image.paste 图片网址
settings.crosshairm.image.width 图片宽度
settings.crosshairm.image.height 图片高度
settings.crosshairm.always 总是显示
settings.crosshairm.color 颜色
settings.crosshairm.shadow.color 阴影颜色
settings.crosshairm.shadow.thickness 阴影粗细
settings.crosshairm.size 尺寸
settings.crosshairm.thickness 粗细
settings.crosshairm.gap 间隙
settings.crosshairm.dot 点
settings.crosshairm.opacity.use 使用不透明度
settings.crosshairm.opacity.custom 不透明度
settings.hitmarker.header 命中标记
settings.hitmarker.color 击中颜色
settings.hitmarker.kcolor 击杀颜色
settings.hitmarker.thickness 粗细
settings.hitmarker.opacity 不透明度
settings.hitmarker.leng 长度
settings.hitmarker.spacing 间距
settings.hitmarker.animD 扩散大小
settings.hitmarker.animS 扩散速度
settings.hitmarker.hitm 显示命中标记
settings.hitmarker.hitmFad 淡出速度
settings.hitmarker.custom 命中标记图片
settings.hitmarker.custom.paste 命中标记图片网址
settings.onKillS.style.0 默认
settings.onKillS.style.1 降低分辨率
settings.onKillS.style.2 降低视场角度
settings.onKillS.style.3 增加视场角度
settings.serverb.header 服务器浏览器
settings.serverb.oldBrowser 旧版服务器浏览器
settings.serverb.defaultRegionOnly 仅显示默认地区的服务器
settings.gameprivacy.header 游戏隐私
settings.gameprivacy.streamer 主播模式
settings.gameprivacy.anon 匿名模式
settings.gameprivacy.hideGameTitle 隐藏游戏名称
settings.gameprivacy.verified 显示验证徽章
settings.gameprivacy.premium 显示会员徽章
settings.gameprivacy.partner 显示游戏合作伙伴徽章
settings.gameprivacy.rank 显示排位等级徽章
settings.gameplay.header 游戏性
settings.gameplay.gpSetts 游戏性配置类型
settings.gameplay.sensitivityX 水平灵敏度
settings.gameplay.sensitivityY 垂直灵敏度
settings.gameplay.aimsensX 瞄准时水平灵敏度
settings.gameplay.aimsensY 瞄准时垂直灵敏度
settings.gameplay.challenge 挑战模式
settings.gameplay.invert 垂直反转
settings.gameplay.onkillS 击杀
settings.gameplay.scrollDir 滚轮方向反转
settings.controller.header 控制器
settings.controller.sensitivityX 水平灵敏度
settings.controller.disableCons 禁用摇杆
settings.controller.sensitivityY 垂直灵敏度
settings.controller.aimsensX 瞄准时水平灵敏度
settings.controller.aimsensY 瞄准时垂直灵敏度
settings.controller.deadZoneL 左摇杆死区
settings.controller.deadZoneR 右摇杆死区
settings.controller.triggerThres 触发阈值
settings.controller.vibration 震动反馈
settings.controller.gradSpeed 平滑移动
settings.controller.invert 垂直反转
settings.mobile.header 移动设备
settings.mobile.sensitivityX 水平灵敏度
settings.mobile.sensitivityY 垂直灵敏度
settings.mobile.aimsensX 瞄准时水平灵敏度
settings.mobile.aimsensY 瞄准时垂直灵敏度
settings.mobile.vibration 震动反馈
settings.mobile.gradSpeed 平滑移动
settings.mobile.invert 垂直反转
settings.audio.header 音频
settings.audio.sound 主音量
settings.audio.ambient 环境音量
settings.audio.voice 语音音量
settings.audio.input 音频或麦克风输入
settings.audio.mic 麦克风音量
settings.audio.weps 武器音量
settings.audio.player 玩家音量
settings.audio.skin 服饰音量
settings.audio.ui 用户界面音量
settings.audio.asset 地图组件音量
settings.audio.dialogue 交互音量
settings.viewmodel.header 模型
settings.viewmodel.vmSetts 模型配置类型
settings.viewmodel.fov 视场角度
settings.viewmodel.fps 武器长短
settings.viewmodel.bobbing 武器晃动幅度
settings.viewmodel.leaning 转动时武器偏航幅度
settings.viewmodel.show.primary 显示主武器
settings.viewmodel.show.secondary 显示副武器
settings.viewmodel.roundArms 圆柱体手臂
settings.viewmodel.show.melee 显示近战武器
settings.viewmodel.show.ads 瞄准时隐藏武器
settings.viewmodel.toggleAim 切换瞄准
settings.viewmodel.show.hands 显示手部
settings.viewmodel.leftHand 左手持枪
settings.viewmodel.aimAnim 武器瞄准动画
settings.viewmodel.rot 武器旋转
settings.viewmodel.xOff 武器水平位置
settings.viewmodel.yOff 武器垂直位置
settings.viewmodel.zOff 武器前后位置
settings.viewmodel.weapSwapY 切枪时武器的初始垂直位置
settings.viewmodel.weapReloadY 换弹时武器的垂直移动幅度
settings.viewmodel.yOffADS 瞄准时武器相对于准星的垂直位移
settings.viewmodel.adsFovMlt 瞄准时视场缩放乘比
settings.viewmodel.toggleADS 切换瞄准
settings.editing.header 状态栏编辑
settings.editing.health.high 高血量颜色
settings.editing.health.low 低血量颜色
settings.editing.speedLines 速度线不透明度
settings.editing.spdLinesCol 速度线颜色
settings.editing.score.color 弹出得分颜色
settings.editing.score.show 显示弹出得分
settings.editing.score.scale 弹出得分显示比例
settings.editing.score.shadow 弹出得分阴影
settings.editing.scoreOffX 弹出得分水平坐标
settings.editing.scoreOffY 弹出得分垂直坐标
settings.editing.prog.color 进度条颜色
settings.editing.prog.opacity 进度条不透明度
settings.editing.prog.scale 进度条显示比例
settings.editing.prog.shadow 进度条阴影
settings.editing.progOffX 进度条水平坐标
settings.editing.progOffY 进度条垂直坐标
settings.editing.progRot 进度条旋转角度
settings.editing.progm.color 蓄力条颜色
settings.editing.progmo.color 过度蓄力颜色
settings.editing.progm.opacity 蓄力条不透明度
settings.editing.progm.scale 蓄力条显示比例
settings.editing.progm.shadow 蓄力条阴影
settings.editing.progmOffX 蓄力条水平坐标
settings.editing.progmOffY 蓄力条垂直坐标
settings.editing.progmRot 蓄力条旋转角度
settings.editing.saturation 游戏环境饱和度
settings.editing.menuSaturation 标题画面饱和度
settings.editing.hue 游戏环境色相
settings.editing.menuHue 标题画面色相
settings.editing.vignette 晕影强度
settings.editing.feedLimit 击杀信息列表长度限制
settings.editing.depth 深度图模式
settings.editing.green 绿幕模式
settings.editing.trailcol 曳光踪迹颜色
settings.editing.ropecol 钩爪绳索颜色
settings.editing.tracercol 子弹曳光
settings.editing.tracer 子弹曳光
settings.editing.tracer.offset 子弹曳光显示位置随机幅度
settings.shaders.header 着色器输入
settings.mods.header 自定义
settings.mods.load 加载模组
settings.mods.logo 允许模组变更标题画面标志
settings.mods.auto 自动加载模组
settings.mods.borders 狙击镜边界
settings.mods.borderCol 狙击镜边界颜色
settings.mods.borderOpac 狙击镜边界不透明度
settings.mods.scope 狙击镜分划板图片
settings.mods.scope.paste 狙击镜分划板图片网址
settings.mods.scope.opacity 狙击镜分划板不透明度
settings.mods.scope.width 狙击镜分划板宽度
settings.mods.scope.height 狙击镜分划板高度
settings.mods.dot 瞄准镜标线图片
settings.mods.dot.width 瞄准镜标线图片宽度
settings.mods.dot.height 瞄准镜标线图片高度
settings.mods.dot.paste 瞄准镜标线图片网址
settings.mods.endmessage 比赛结束后自动消息
settings.mods.profile 头像图片
settings.mods.profile.paste 头像图片网址
settings.mods.ammo 弹药图标
settings.mods.ammo.paste 弹药图标网址
settings.mods.kills 击杀图标
settings.mods.kills.paste 击杀图标网址
settings.mods.deaths 死亡图标
settings.mods.deaths.paste 死亡图标网址
settings.mods.streak 连杀图标
settings.mods.streak.paste 连杀图标网址
settings.mods.timer 计时器图标
settings.mods.timer.paste 计时器图标网址
settings.mods.usedamage 受伤叠层
settings.mods.damage 受伤叠层图片
settings.mods.damage.paste 受伤叠层图片网址
settings.mods.overlay 状态栏叠层图片
settings.mods.overlay.paste 状态栏叠层图片网址
settings.social.region 地区统计
settings.social.bg 社区界面背景图片
settings.social.bg.paste 社区界面背景图片网址
windows.settings.header 游戏设置
windows.mail.header Krunker 邮箱
windows.servers.header 服务器
windows.servers.none 没有可加入的服务器…
windows.servers.host + 创建服务器
windows.servers.hide 隐藏已满的服务器
windows.servers.priority 默认地区优先
windows.servers.online {0} 个玩家在游戏中
windows.servers.social {0} 个玩家在社区浏览中
windows.loadout.header 更换武器搭配
windows.loadout.class 职业
windows.loadout.primary 主武器
windows.loadout.primary.attach 配件
windows.loadout.primary.reticle 瞄准镜标线
windows.loadout.primary.scope 狙击镜分划板
windows.loadout.secondary 副武器
windows.loadout.secondary.skin 副武器皮肤
windows.loadout.melee 近战武器
windows.loadout.hat 帽子
windows.loadout.back 背部
windows.loadout.waist 腰部
windows.loadout.shoe 鞋子
windows.loadout.face 表情
windows.loadout.spray 涂鸦
windows.loadout.color.skin 皮肤颜色
windows.loadout.color.chat 聊天框内显示名称颜色
windows.loadout.color.hair 头发颜色
windows.loadout.dye 衣服染色
windows.loadout.pet 宠物
windows.loadout.stat 击杀战绩卡
windows.loadout.flag 国家和地区旗帜
windows.mods.drop 将模组文件放在此处或点击
windows.mods.paste 粘贴模组网址
windows.mods.load 加载模组
windows.mods.none 没有找到任何模组
windows.mods.header 模组管理器
windows.mods.guide 模组指南
windows.mods.list 模组列表
windows.mods.load.header 加载模组
windows.mods.publish 发布模组
windows.mods.viewer 查看器
windows.account.header 账户
windows.account.recover 联系 <a>recovery@yendis.ch</a> 找回你的账户。
windows.class.header 选择职业
windows.controls.header 更改控制
windows.controls.forward 前
windows.controls.backward 后
windows.controls.left 左
windows.controls.right 右
windows.controls.reload 换弹
windows.controls.aim1 瞄准
windows.controls.shoot1 射击
windows.controls.inspect 检视武器
windows.controls.spray 涂鸦
windows.controls.jump 跳跃
windows.controls.crouch 下蹲
windows.controls.prim 主武器
windows.controls.swap 副武器
windows.controls.melee 近战武器
windows.controls.equip 拾取
windows.controls.chat 文字聊天
windows.controls.voice 语音聊天
windows.controls.list 玩家列表
windows.controls.board 排行榜
windows.controls.interact 交互
windows.controls.interactSec 次要交互
windows.controls.confirm 确认交互
windows.controls.drop 丢弃
windows.controls.wepVis 切换武器可见度
windows.controls.kickVoteY 投票踢出玩家［是］
windows.controls.kickVoteN 投票踢出玩家［否］
windows.controls.kpdVoteY KPD 投票［是］
windows.controls.kpdVoteN KPD 投票［否］
windows.controls.specFree 自由视角
windows.controls.specObj 目标点视角
windows.controls.specFirst 第一人称视角
windows.controls.specNames 强制显示玩家名称
windows.controls.specFocus 聚焦玩家
windows.controls.hidePlayers 隐藏玩家
windows.controls.streak0 连杀奖励 1
windows.controls.streak1 连杀奖励 2
windows.controls.streak2 连杀奖励 3
windows.controls.streak3 连杀奖励 4
windows.controls.streak4 连杀奖励 5
windows.controls.prop 选择物体（长按）
windows.controls.premium0 飞天穿墙模式
windows.controls.premium1 无敌模式
windows.controls.premium2 自杀
windows.controls.premium3 超高伤害
windows.controls.dev0 开发者专用键 1
windows.controls.dev1 开发者专用键 2
windows.controls.dev2 开发者专用键 3
windows.controls.dev3 开发者专用键 4
windows.controls.reset 重置进度并回到起点（仅限跑酷和速通模式）
windows.controls.pretend 隐藏游戏
windows.host.header 创建自定义服务器
windows.host.maps 服务器设置
windows.host.cmaps 社区地图
windows.host.raw 原始游戏数据
windows.host.modes 选择游戏模式
windows.host.classes 选择职业
windows.host.settings 服务器设置
windows.host.preset 创建默认设置
windows.host.preset.load 加载默认设置中…
windows.host.preset.name 默认设置名称
windows.host.start 开始游戏
windows.host.rehost 开始游戏（邀请玩家）
windows.spray.header 选择涂鸦
windows.spray.default 免费涂鸦
windows.spray.spin 涂鸦
windows.maps.header 自定义地图
windows.maps.none 没有找到任何地图！
windows.maps.name 地图名称
windows.maps.editor 地图编辑器
windows.maps.publish 发布地图
windows.maps.community 地图开发者社区
windows.publish.map.header 发布或更新地图
windows.publish.map.thumbnail 无缩略图
windows.publish.map.paste 粘贴地图数据
windows.publish.map.update 发布或更新
windows.publish.map.login 登录以创建并上传地图！
windows.theatre.header 影院模式
windows.theatre.record 启用录制
windows.theatre.key 录制键
windows.clans.header 战队
windows.clans.members {0} 个战队成员
windows.clans.requests 申请
windows.clans.requests.none 没有申请
windows.clans.page [{0}] 战队页面
windows.clans.create 创建战队
windows.clans.name 战队名称
windows.clans.view 浏览战队
windows.clans.join 加入战队
windows.clans.login 登录以创建并加入战队！
windows.store.header 商店
windows.store.spin {0} 转盘
windows.store.agree 确认购买即表示您同意 {0}条款及细则
windows.store.purchase 购买 KR
windows.store.voucher 兑换代金券
windows.store.voucherinfo 从指定主播和游戏活动获取代金券
windows.store.market 市场
windows.store.market2 Krunker 市场
windows.store.premium 购买会员
windows.store.premium2 Krunker 会员
windows.store.buyP 购买会员后，您将可以自定义您的显示名称和体验更多专用功能！
windows.store.buy 买卖物品尽在
windows.store.wheels 转盘
windows.store.unlock 解锁新武器和物品
windows.store.amount 您的账户还剩余 {0} KR
windows.store.login 登录以在商店中购买物品！
windows.store.purchasing 购买中…
windows.store.unboxed {0} 开箱获得了 {1}
windows.trade.header 交易
windows.scope.header 选择狙击镜
windows.premium.header 会员
windows.skin.header 选择皮肤
windows.hat.header 选择帽子
windows.back.header 选择背部饰品
windows.waist.header 选择腰部饰品
windows.face.header 选择表情
windows.melee.header 选择近战武器
windows.attach.header 选择附件
windows.reticle.header 选择准星
windows.reticle.unlocked 于 {0} 级解锁
windows.reticle.req 需要 {0} 级
windows.dye.header 选择衣服染色
windows.dye.default 默认衣服染色
windows.dye.spin 衣服染色
windows.changelog.header 更新日志
windows.mods.community.header 社区模组
windows.mods.community.fav 已收藏
windows.mods.community.new 最新
windows.mods.community.hot 热门
windows.mods.community.name 模组名称
windows.mods.community.none 没有找到任何模组
windows.publish.mod.header 发布模组
windows.publish.mod.thumbnail 无缩略图
windows.publish.mod.name 模组名称
windows.publish.mod.paste 模组网址
windows.publish.mod.update 发布或更新
windows.publish.mod.login 登录以创建并上传模组！
windows.secondary.header 选择副武器
windows.secondary.unlocked 已解锁
windows.secondary.customOnly 仅限自定义服务器
windows.secondary.premiumOnly 仅限会员
windows.secondary.req 需要 {0} 级
windows.advertise.header 广告
windows.support.header 支援
windows.players.header 玩家列表
windows.players.none 当前没有任何在线玩家…
windows.join.header 加入
windows.join.code 输入服务器网址或代码
windows.client.header 客户端
windows.client.windows Windows 安装程序
windows.client.mac macOS 安装程序
windows.client.linux Linux 安装程序
windows.ranked.header 排位赛
windows.ranked.login 登录以进行排位赛！
windows.ranked.level 您至少需要 <span color="black">{0} 级</span> 以进行排位赛！当前您的等级是 <span color="black">{1} 级</span>。
windows.ranked.mode.r1v1 单排
windows.ranked.mode.r2v2 双排
windows.ranked.mode.r4v4 四排
windows.chall.header 挑战任务
windows.chall.login 登录以完成挑战任务！
thumbnail.upload.limit 上传失败，缩略图大小上限为 {0}kb
image.upload.limit 上传失败，图片大小上限为 {0}kb
thumbnail.upload.error 缩略图错误
mod.extracting 提取中 {0}/{1}
mod.disabled 模组已禁用
mod.error 模组错误！
mod.loading 加载模组中…
mod.invalid 模组文件不可用！
matchmaker.full 已满
matchmaker.full2 此服务器人数已满。
matchmaker.updating 游戏更新中…
matchmaker.invalid 此服务器已关闭或不存在。
matchmaker.none 服务器负载已达到上限。
adblocker 禁用广告拦截器以获得免费 KR 转盘。
ad-failed 广告加载失败，请稍后重试。
streamers.views {0} 个观众
streamers.none 当前没有任何 Twitch 直播！
error.extentions 如果您有任何浏览器扩展程序，请禁用它们
error.seek 点此搜索新的游戏
custom.map.upload.limit 上传失败，地图数据大小上限为五十万个字符
custom.map.missing 请选择至少一种地图
custom.mode.missing 请选择至少一种游戏模式
custom.class.missing 请选择至少一种职业
server.config.maxPlayers 最大玩家数
server.config.minPlayers 最少玩家数
server.config.lives 玩家生命数
server.config.gameTime 每局时间（分钟）
server.config.gravMlt 重力
server.config.tickRI 高性能服务器
server.config.maxPS 40 名玩家服务器
server.config.promServ 推广服务器
server.config.jumpMlt 跳跃力量
server.config.airStrf 启用空中转向
server.config.deltaMlt 时间倍数
server.config.strafeSpd 空中转向速度
server.config.fiRat 武器射速
server.config.reSpd 换弹速度
server.config.slidTime 滑铲时间
server.config.fixMov 移动机制修正（使跳跃高度和加速不被帧率影响）
server.config.slidSpd 滑铲速度
server.config.healthMlt 血量倍数
server.config.impulseMlt 武器后坐力
server.config.nameTeam1 队伍 1 名称
server.config.nameTeam2 队伍 2 名称
server.config.nameTeam3 队伍 3 名称
server.config.nameTeam4 队伍 4 名称
server.config.nameTeam5 队伍 5 名称
server.config.t1Dmg 队伍 1 伤害倍数
server.config.t2Dmg 队伍 2 伤害倍数
server.config.t3Dmg 队伍 3 伤害倍数
server.config.t4Dmg 队伍 4 伤害倍数
server.config.t5Dmg 队伍 5 伤害倍数
server.config.selTeam 可自由选择队伍
server.config.allowSpect 允许观战
server.config.killRewards 击杀奖励
server.config.headshotOnly 仅限暴击
server.config.noSecondary 禁用副武器
server.config.noStreaks 禁用连杀
server.config.canSlide 启用滑铲
server.config.wallJP 墙壁跳跃力量
server.config.autoJump 自动跳跃
server.config.bDrop 子弹下坠
server.config.thirdPerson 第三人称
server.config.requireCaptcha 启用人机验证
server.config.nameTags 隐藏名牌
server.config.kCams 死亡视角
server.config.noReload 无需换弹
server.config.private 私服
server.config.krRewards KR 奖励
server.config.forceDefault 强制使用默认设置
server.config.warmupTime 热身时间（分钟）
server.config.gamRounds 游戏局数
server.config.objtvTime 得分点存在时间（分钟）
server.config.forceSpawn 自动重生时间（秒）
server.config.intermTmr 中场休息时间（秒）
server.config.scoreLimit 得分上限
server.config.keepTScore 保持团队得分
server.config.forceC 强制使用特定职业
server.config.logTim 通关计时（速通、跑酷）
server.config.hitBoxPad 玩家判定框大小
server.config.hpRegen 回血
server.config.disableB 禁用地图边界
server.config.throwMel 近战武器投掷
server.config.noCosm 禁用服饰
server.config.tstCmp Faceit 测试模式
server.config.limitClasses 每个职业限一人
server.config.tmSize 团队大小
server.config.fallDmg 摔落伤害
server.config.fallDmgThr 摔落伤害阈值
server.config.noDraws 禁用平局
server.config.bstOfR 最佳玩家
server.config.chrgWeps 蓄力投掷
social.login 登录或注册
social.login.failed 登录失败
social.login.buy 登录以购买
social.login.sell 登录以出售
social.login.gift 登录以赠送
social.login.proccessing 登录中…
social.since 始于
social.user.maps 此玩家地图
social.user.mods 此用玩家模组
social.maps.none 没有找到任何地图…
social.mods.none 没有找到任何模组…
social.market.price.low 最低价格
social.market.price.list 输入价格
social.market.searching 搜索中
social.market.listed {0} 前上架
social.market.list 上架物品
social.market.unlist 下架物品
social.market.unlisting 下架物品中…
social.market.posting 上架物品中…
social.market.req 需要 {0} 级
social.market.cant KR 不足
social.market.purchase 购买
social.market.fee 无上架费用
social.market.failed 失败，请稍后重试
social.market.head 头部饰品
social.market.back 背部饰品
social.market.waist 腰部饰品
social.market.face 表情
social.market.shoe 鞋子
social.market.pet 宠物
social.market.melee 近战武器
social.market.spray 涂鸦
social.market.dye 衣服染色
social.market.none 没有找到任何物品
social.market.login 您必须先登录。
social.market.grace {0} 后上架
social.market.sort 筛选或排序
social.market.filter 搜索
social.market.sort2 排序
social.market.price.high 最高价格
social.trading.submitting 发送交易请求中…
social.market.gift.amount 赠送金额
social.market.fee.gift 无费用
social.market.gift 赠送 KR
social.market.gift.msg 说点什么呢…
respawn.auto 您将会在 {0} 秒后重生
custom.host.ranked 排位赛中无法创建自定义服务器。
funds.insufficient 资金余额不足
funds.out 您似乎没有 KR 了
custom.passcode.long 密码过长
custom.passcode.input 请输入此服务器密码以加入游戏
custom.tryagain 请重试。
purchase.kr.success 已添加 {0} KR 到您的账户
limited.purchase.ask 您确定要以 {1} KR 购买 [{0}] 吗？
limited.purchase.success 已添加 {0} 到您的库存
pretend.exit 再次点击 [{0}] 退出
settings.loaded 设置已加载
settings.loaded.none 没有找到任何设置
account.login.required 您必须先登录
account.banned.hack 此账户因作弊而被封禁
account.banned.appeal 如果您想提出上诉，请联系：
account.delete 您可以在此申请删除您的账户。请注意！如果此申请在14天内没有被取消，此账户的所有数据将会被永久抹除。
account.delete.request 您确定要申请删除此账户吗？
account.delete.cancel 您确定要取消申请删除此账户吗？
spin.free.available 立即领取免费 KR！
spin.free.claim 您必须在每小时内完成一场游戏才能领取此转盘。
spin.free.disable 您可以在设置的 [General] 选项卡里禁用此弹窗。
mod.reset.0 重生后此设置将会生效。
mod.reset.1 地图物体不会被重置。
windows.profile.picture 更改头像
stats.assists 助攻数
stats.nukes 核弹数
stats.melee 近战击杀数
stats.fistkills 空手击杀数
stats.thrownkills 投掷击杀数
stats.headshots 暴击数
stats.wallbangs 穿墙击杀数
stats.sprays 涂鸦数
windows.host.default.settings 使用地图默认设置以允许玩家保存他们的进度及最高分数
windows.host.default.commands * 房主命令 (/noclip, /god, /smite, /kill) 在此模式中将会被禁用。
windows.host.rewards 启用 KR 奖励将强制服务器使用地图默认设置，以允许玩家从此地图获得 KR：
windows.store.wheels.sub 试试您的运气，转动奖盘来赢得全新皮肤！
windows.store.currency * 美元和您当地货币之间的汇率由支付服务提供商或银行决定。
windows.store.creator 购买 KR 时，考虑使用创作者代码以支持您喜爱的内容创作者
windows.chall.customs 自定义服务器内无法完成挑战任务。
twitch.link 您确定要链接您的 Twitch 账户吗？
twitch.unlink 您确定要取消链接您的 Twitch 账户吗？
windows.clan.leave 您确定要离开此战队吗？
windows.clan.delete 您确定要解散此战队吗？
windows.clan.kick 您确定要从此战队踢出 {0} 吗？
windows.store.premium.purchase 您确定要购买 {0} 天的会员吗？
windows.store.premium.gift 您确定要赠送「{0}」{1} 天的会员吗？
windows.playerlist.ban 您确定要从此服务器封禁并踢出 {0} 吗？
windows.playerlist.flag 您确定要标记 {0} 吗？
windows.playerlist.unflag 您确定要取消标记 {0} 吗？
windows.playerlist.punish 您确定要对 {0} 采取措施吗？
item.view.open 打开模型查看器
item.view.more 更多信息
item.sell.cant 此物品不可被出售。
item.sell.quick 您确定要快速出售 {0} 吗？
social.profile.stats 综合战绩
social.profile.class 职业战绩
social.profile.sales 出售记录
social.profile.sales.market 市场出售额
social.profile.skins [{0}] 个皮肤
social.profile.skins.none 此玩家没有已发布的皮肤
social.profile.games [{0}] 个地图
social.profile.games.none 此玩家没有已发布的地图
social.profile.assets [{0}] 个地图组件
social.profile.assets.none 此玩家没有已发布的地图组件
social.profile.mods [{0}] 个模组
social.profile.mods.none 此玩家没有已发布的模组
social.search 搜索结果
social.market.stats.rare 最稀有物品
social.market.stats.circulation 流通中
social.market.stats.units 全球持有数量
social.trades.in 收到的交易请求
social.trades.in.head 收到 ({0}) 个交易请求
social.trades.out 已发送的交易请求
social.trades.out.head 发送 ({0}) 个交易请求
social.trades.history 交易记录
social.trades.history.head ({0}) 个交易记录
social.trades.decline 全部拒绝
social.trades.message 在市场设置中启用「显示交易信息」选项
social.trades.warning 您将不会在此交易中得到任何物品！
social.trades.accept 您确定要接受此交易请求吗？
stats.airdrops KR 空投
settings.quality.flapAnim 狙击镜保护盖动画
`;
