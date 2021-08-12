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
menu.btn.join 加入游戏房间
menu.btn.host 创建游戏房间
menu.btn.browser 浏览游戏房间
generic.wait 请稍等...
generic.loading 加载中...
generic.none 无
generic.connecting 连接中...
generic.select 选择
generic.delete 删除
generic.save 保存
generic.load 加载
generic.search 搜索
generic.leave 退出
generic.default 默认
generic.submit 提交
generic.create 创建
generic.random 随机
generic.failed 失败
generic.success 成功！
generic.name 用户名
generic.level 等级
generic.score 得分
generic.off 关
generic.defeat 失败
generic.victory 胜利
generic.matchover 比赛结束
generic.matchaband 比赛被迫终止
generic.follow 关注
generic.unfollow 取消关注
generic.followers 关注者
generic.following 关注中
generic.games 游戏
generic.wins 胜场
generic.lose 败场
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
generic.username 用户名
generic.password 密码
generic.register 注册
generic.login 登录
generic.accuracy 命中率
player.waiting 等待更多玩家加入
player.died 你死了
player.killed 被此玩家击杀
player.killstreak {0} 已达到 {1} 连杀
player.inactive 由于您的空闲时间过长，您已被踢出房间
player.disconnect 连接已断开
timer.end 下一场将在 {0} 后开始
leaderboard.empty 空房间
popup.checkpoint 检查点！
app.play 点此开始游戏
app.spectate 点此开始观战
app.play.mobile 点击屏幕开始游戏
app.spectate.mobile 点击屏幕开始观战
app.play.controller 按下开始键开始游戏
app.spectate.controller 按下开始键开始观战
purchase.error 出错了！
purchase.error.click 点此</a> 重试！
purchase.error.limit 您可能已超出每日交易限额
settings.reset 重置
settings.reset.confirm 您是否希望重置所有设置？
settings.import 导入
settings.export 导出
settings.none 没有找到设置
settings.backup 备份设置
settings.controls.change 按键绑定
settings.controls.press 按下任意按键
settings.local.header 本地化 <span id="requiresRestart"><span style="color: #eb5656">*</span> 需要重启游戏</span>
settings.local.region 默认服务器地区
settings.local.lang 语言
settings.network.header 网路
settings.network.sendRate 高服务器应答率
settings.network.netRerouting 自动路由（可能会影响网络延迟）
settings.network.lagComp 延迟修正
settings.network.hitReg 命中判定测试
settings.popup.header 弹窗
settings.popup.freeKRPop 允许免费 KR 弹窗
settings.experimental.header 实验性功能
settings.experimental.aimFreezeFix 开镜冻结修正
settings.experimental.mouseFlickFix 鼠标轮询率修正
settings.experimental.shaderRendering 着色器渲染
settings.experimental.staticRendering 静态渲染
settings.client.header 客户端
settings.client.unlimitedFrames 帧数无限制
settings.client.gameCap 游戏捕获 (OBS)
settings.client.experimental 实验性功能
settings.client.discordRPC 启用 Discord RPC
settings.client.resourceSwapper 资源包
settings.client.clearCache 清除缓存
settings.client.resetSettings 重置客户端设置
settings.client.acceleratedCanvas 启用画布硬件加速 (Accelerated Canvas)
settings.client.angleBackend ANGLE 图形后端
settings.client.colorProfile 色彩配置文件
settings.dev.header 开发者
settings.dev.forceUpdate 强制刷新皮肤
settings.dev.forceRegen 强制复活玩家
settings.dev.extraBan 更多封禁信息
settings.chat.header 聊天
settings.chat.chat 显示聊天窗口
settings.chat.chat.all 总是
settings.chat.chat.focus 被聚焦时显示
settings.chat.messages 显示玩家信息
settings.chat.unboxings 显示玩家开箱
settings.chat.chatOp 聊天窗口不透明度
settings.chat.chatBGOp 聊天窗口背景不透明度
settings.chat.chatHeight 聊天窗口高度
settings.chat.chatTimer 聊天文本显示时间
settings.chat.chatTextOutline 聊天文本轮廓
settings.chat.chatFilter 过滤不良信息（仅限英文）
settings.quality.header 游戏性能
settings.quality.updRate 帧数限制
settings.quality.rendDst 渲染距离
settings.quality.res 分辨率
settings.quality.part 粒子效果
settings.quality.mapDet 地图细节
settings.quality.noTex 无贴图
settings.quality.partdist 粒子渲染距离
settings.quality.renderdist 渲染距离
settings.quality.reflection 倒影质量
settings.quality.antiAlias 反锯齿
settings.quality.shadows 阴影
settings.quality.softShad 柔和阴影
settings.quality.highResShad 高分辨率阴影
settings.quality.shadowsDynamic 动态阴影
settings.quality.trails 其他玩家子弹轨迹
settings.quality.yourTrails 自身子弹轨迹
settings.quality.mflash 枪口火焰
settings.quality.flap 狙击镜保护盖
settings.quality.lowSpec 低配置模式
settings.quality.ambient 环境阴影
settings.quality.ambientOld 经典阴影（仅可用时）
settings.quality.textureAnim 纹理动画
settings.quality.objectAnim 物体动画
settings.quality.screenShake 屏幕晃动
settings.quality.weaponShine 武器光泽
settings.quality.rendGamma 伽马效果
settings.quality.lighting 光照强度
settings.quality.showExplo 显示爆炸特效
settings.quality.aspectRatio 屏幕高宽比
settings.post.header 后期处理
settings.post.post 后期处理
settings.post.bloom 光线散射
settings.post.bloomThreshold 光线散射阈值
settings.post.bloomStrength 光线散射强度
settings.post.bloomRadius 光线散射半径
settings.post.ssao 屏幕空间环境光屏蔽
settings.post.ssaoRadius 屏蔽半径
settings.interface.hitInd 命中指示器
settings.interface.hitColor 命中指示器颜色
settings.interface.dmg 显示伤害
settings.interface.dmgCol 伤害颜色
settings.interface.critCol 暴击颜色
settings.interface.header 界面
settings.interface.scale 用户界面比例
settings.interface.ui 显示用户界面
settings.interface.scoreboard 使用经典计分板
settings.interface.oldBrowser 使用经典浏览器
settings.interface.rarityanim 禁用稀有物品动画
settings.interface.showPfp 显示用户头像
settings.interface.showTradeMsg 显示交易信息
settings.interface.hideNonTrade 隐藏不可交易的皮肤
settings.interface.hp 动态血条
settings.interface.dmgScale 伤害显示比例
settings.interface.killf 显示击杀列表
settings.interface.ping 显示网络延迟
settings.interface.net-stats 显示网络状况
settings.interface.fps 显示帧数
settings.interface.deaths 显示死亡数
settings.interface.kd 显示战损率
settings.interface.kills 显示击杀数
settings.interface.streak 显示连杀数
settings.interface.score 显示分数
settings.interface.spectators 显示观战人数
settings.interface.speed 显示移动速度
settings.interface.speedOffX 移动速度指示器水平位置
settings.interface.speedOffY 移动速度指示器垂直位置
settings.interface.speedOpacity 移动速度指示器不透明度
settings.interface.speedScale 移动速度指示器比例
settings.interface.speedColor 当前速度颜色
settings.interface.speedColorMax 最高速度颜色
settings.interface.medals 显示勋章
settings.interface.hideNames 显示名牌
settings.interface.hideNames.team 仅限队友
settings.interface.hideNames.enemy 仅限敌人
settings.interface.hideNames.all 全部显示
settings.interface.nametagStyle 名牌样式
settings.interface.nametagOpac 名牌不透明度
settings.interface.nametagStyle.health 仅限血条
settings.interface.nametagStyle.name 仅限用户名
settings.interface.nametagStyle.nameLvl 用户名和等级
settings.interface.nametagStyle.all 全部显示
settings.interface.healthNum 名牌
settings.interface.healthColT 队友血条颜色
settings.interface.healthColE 敌人血条颜色
settings.interface.xpBarCol 经验条颜色
settings.interface.xpBarOpac 经验条不透明度
settings.crosshair.header 准星
settings.crosshair.type 种类
settings.crosshair.type.2 自定义
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
settings.crosshair.image.paste 准星图片
settings.crosshair.always 总是显示
settings.crosshair.color 颜色
settings.crosshair.shadow.color 阴影颜色
settings.crosshair.shadow.thickness 阴影粗细
settings.crosshair.size 尺寸
settings.crosshair.thickness 粗细
settings.crosshair.gap 中心间隔大小
settings.crosshair.dot 点
settings.crosshair.opacity.use 使用自定义不透明度
settings.crosshair.opacity.custom 自定义不透明度
settings.hitmarker.header 命中标记
settings.hitmarker.color 颜色
settings.hitmarker.kcolor 击杀颜色
settings.hitmarker.thickness 粗细
settings.hitmarker.opacity 不透明度
settings.hitmarker.leng 长度
settings.hitmarker.spacing 间距
settings.hitmarker.animD 动画尺寸
settings.hitmarker.animS 动画速度
settings.hitmarker.hitm 显示
settings.hitmarker.hitmFad 褪去速度
settings.hitmarker.custom 命中标记图标
settings.hitmarker.custom.paste 命中标记图标网址
settings.onKillS.style.0 默认
settings.onKillS.style.1 降低分辨率
settings.onKillS.style.2 降低视场角度数
settings.onKillS.style.3 增加视场角度数
settings.serverb.header 游戏房间浏览器
settings.serverb.oldBrowser 经典房间浏览器
settings.serverb.defaultRegionOnly 只显示默认地区的房间
settings.gameprivacy.header 游玩隐私
settings.gameprivacy.streamer 主播模式
settings.gameprivacy.anon 匿名模式
settings.gameprivacy.hideGameTitle 隐藏游戏标志
settings.gameplay.header 游戏性
settings.gameplay.gpSetts 游戏性设置
settings.gameplay.sensitivityX 水平灵敏度
settings.gameplay.sensitivityY 垂直灵敏度
settings.gameplay.aimsensX 开镜水平灵敏度
settings.gameplay.aimsensY 开镜垂直灵敏度
settings.gameplay.challenge 挑战模式
settings.gameplay.invert 鼠标反转
settings.gameplay.onkillS 击杀
settings.gameplay.scrollDir 鼠标滚轮方向反转
settings.controller.header 手柄
settings.controller.sensitivityX 水平灵敏度
settings.controller.disableCons 禁用手柄
settings.controller.sensitivityY 垂直灵敏度
settings.controller.aimsensX 开镜水平灵敏度
settings.controller.aimsensY 开镜垂直灵敏度
settings.controller.deadZoneL 左手柄摇杆死区
settings.controller.deadZoneR 右手柄摇杆死区
settings.controller.triggerThres 触发阈值
settings.controller.vibration 震动
settings.controller.gradSpeed 渐缓速度
settings.controller.invert 摇杆反转
settings.mobile.header 移动设备
settings.mobile.sensitivityX 水平灵敏度
settings.mobile.sensitivityY 垂直灵敏度
settings.mobile.aimsensX 开镜水平灵敏度
settings.mobile.aimsensY 开镜垂直灵敏度
settings.mobile.vibration 震动
settings.mobile.gradSpeed 渐缓速度
settings.mobile.invert 触控反转
settings.audio.header 音效
settings.audio.sound 主音量
settings.audio.ambient 背景音量
settings.audio.voice 语言音量
settings.audio.weps 武器音量
settings.audio.player 玩家音量
settings.audio.skin 服饰音量
settings.audio.ui 用户界面音量
settings.audio.asset 地图音量
settings.audio.dialogue 动作音量
settings.viewmodel.header 视野和模型
settings.viewmodel.vmSetts 视野和模型设置
settings.viewmodel.fov 腰射视场角度数
settings.viewmodel.fps 武器视场角度数
settings.viewmodel.bobbing 武器摇晃
settings.viewmodel.leaning 武器向鼠标移动方向倾斜
settings.viewmodel.show.primary 显示主武器
settings.viewmodel.show.secondary 显示副武器
settings.viewmodel.roundArms 圆形手臂
settings.viewmodel.show.melee 显示近战武器
settings.viewmodel.show.ads 开镜时隐藏武器
settings.viewmodel.toggleAim 松手时保持开镜
settings.viewmodel.show.hands 显示手部
settings.viewmodel.leftHand 左手持枪
settings.viewmodel.aimAnim 武器开镜动画
settings.viewmodel.rot 武器位置旋转
settings.viewmodel.xOff 武器水平位置
settings.viewmodel.yOff 武器垂直位置
settings.viewmodel.zOff 武器前后位置
settings.viewmodel.weapSwapY 切枪时武器的垂直位置
settings.viewmodel.weapReloadY 换弹时武器的垂直位置
settings.viewmodel.yOffADS 开镜时武器的垂直位置
settings.viewmodel.adsFovMlt 开镜放大倍数
settings.editing.header 编辑
settings.editing.health.high HUD高血量颜色
settings.editing.health.low HUD低血量颜色
settings.editing.speedLines 速度线
settings.editing.spdLinesCol 速度线颜色
settings.editing.score.color 弹出得分颜色
settings.editing.score.show 显示弹出得分
settings.editing.score.scale 弹出得分比例
settings.editing.score.shadow 弹出得分阴影
settings.editing.scoreOffX 弹出得分水平位置
settings.editing.scoreOffY 弹出得分垂直位置
settings.editing.prog.color 经验条颜色
settings.editing.prog.opacity 经验条不透明度
settings.editing.prog.scale 经验条大小
settings.editing.prog.shadow 经验条阴影
settings.editing.progOffX 经验条水平位置
settings.editing.progOffY 经验条垂直位置
settings.editing.progRot 经验条角度
settings.editing.progm.color 蓄力条颜色
settings.editing.progm.opacity 蓄力条不透明度
settings.editing.progm.scale 蓄力条大小
settings.editing.progm.shadow 蓄力条阴影
settings.editing.progmOffX 蓄力条水平位置
settings.editing.progmOffY 蓄力条垂直位置
settings.editing.progmRot 蓄力条角度
settings.editing.saturation 饱和度（游戏中）
settings.editing.menuSaturation 饱和度（用户界面）
settings.editing.hue 色调（游戏中）
settings.editing.menuHue 色调（用户界面）
settings.editing.vignette 晕影特效
settings.editing.feedLimit 击杀列表长度限制
settings.editing.depth 深度图模式
settings.editing.green 绿幕模式
settings.editing.trailcol 弹道轨迹颜色
settings.editing.ropecol 钩爪绳索颜色
settings.editing.tracercol 弹道轨迹
settings.editing.tracer 弹道轨迹
settings.editing.tracer.offset 弹道显示位置
settings.shaders.header 着色器输入
settings.mods.header 自定义
settings.mods.load 加载模组
settings.mods.logo 允许模组变更界面图标
settings.mods.auto 自动加载模组
settings.mods.borders 狙击镜边界
settings.mods.borderCol 狙击镜边界
settings.mods.borderOpac 狙击镜边界不透明度
settings.mods.scope 狙击镜准心图标
settings.mods.scope.paste 狙击镜准心图标网址
settings.mods.scope.opacity 狙击镜准心不透明度
settings.mods.scope.width 狙击镜准心宽度
settings.mods.scope.height 狙击镜准心高度
settings.mods.dot 准星图标
settings.mods.dot.width 准星图标宽度
settings.mods.dot.height 准星图标高度
settings.mods.dot.paste 准星图标网址
settings.mods.endmessage 比赛结束后自动消息
settings.mods.profile 用户图标
settings.mods.profile.paste 用户图标网址
settings.mods.ammo 弹药图标
settings.mods.ammo.paste 弹药图标网址
settings.mods.kills 击杀图标
settings.mods.kills.paste 击杀图标网址
settings.mods.deaths 死亡图标
settings.mods.deaths.paste 死亡图标网址
settings.mods.streak 连杀图标
settings.mods.streak.paste 连杀图标网址
settings.mods.timer 时钟图标
settings.mods.timer.paste 时钟图标网址
settings.mods.usedamage 覆盖受伤屏幕效果
settings.mods.damage 受伤屏幕效果图标
settings.mods.damage.paste 受伤屏幕效果网址
settings.mods.overlay 游戏结束图标
settings.mods.overlay.paste 游戏叠层图片网址
settings.social.region 各地区统计数据
windows.settings.header 游戏设置
windows.mail.header Krunker 邮箱
windows.servers.header 服务器
windows.servers.none 无可加入游戏...
windows.servers.host + 创建游戏
windows.servers.hide 隐藏已满的房间
windows.servers.priority 优先区域
windows.servers.online {0} 玩家正在游戏中
windows.servers.social {0} 玩家正在社区中
windows.loadout.header 更换武器类别
windows.loadout.class 武器类别
windows.loadout.primary 主武器
windows.loadout.primary.attach 配件
windows.loadout.primary.reticle 准星
windows.loadout.primary.scope 狙击镜
windows.loadout.secondary 副武器
windows.loadout.secondary.skin 副武器皮肤
windows.loadout.melee 近战武器
windows.loadout.hat 头饰
windows.loadout.back 背部饰品
windows.loadout.waist 腰部饰品
windows.loadout.shoe 鞋子
windows.loadout.face 表情
windows.loadout.spray 涂鸦
windows.loadout.color.skin 皮肤颜色
windows.loadout.color.chat 聊天框中用户名颜色
windows.loadout.color.hair 头发颜色
windows.loadout.dye 服装染色
windows.loadout.pet 宠物
windows.loadout.stat 击杀战绩卡
windows.loadout.flag 国家旗帜
windows.mods.drop 将模组文件放在此处或单击
windows.mods.paste 粘贴模组网址
windows.mods.load 加载模组
windows.mods.none 没有找到任何模组
windows.mods.header 模组管理器
windows.mods.guide 模组指南
windows.mods.list 模组列表
windows.mods.load.header 加载模组
windows.mods.publish 发布模组
windows.mods.viewer 浏览器
windows.account.header 帐号
windows.account.recover 联系 <a>recovery@yendis.ch</a> 以找回密码。
windows.class.header 选择武器类别
windows.controls.header 更改控制
windows.controls.forward 前
windows.controls.backward 后
windows.controls.left 左
windows.controls.right 右
windows.controls.reload 装填弹药
windows.controls.aim 瞄准
windows.controls.shoot 射击
windows.controls.inspect 检视武器
windows.controls.spray 涂鸦
windows.controls.jump 跳跃
windows.controls.crouch 下蹲或滑铲
windows.controls.prim 主武器
windows.controls.swap 副武器
windows.controls.melee 近战武器
windows.controls.equip 装备
windows.controls.chat 文字聊天
windows.controls.voice 语言聊天
windows.controls.list 玩家列表
windows.controls.board 排行榜
windows.controls.interact 交互
windows.controls.interactSec 次要交互
windows.controls.confirm 确认交互
windows.controls.drop 丢弃（武器、物品）
windows.controls.wepVis 切换武器可见度
windows.controls.kickVoteY 投票踢出玩家［是］
windows.controls.kickVoteN 投票踢出玩家［否］
windows.controls.kpdVoteY KPD投票［是］
windows.controls.kpdVoteN KPD投票［否］
windows.controls.specFree 自由视角
windows.controls.specObj 物件视角
windows.controls.specFirst 第一人称视角
windows.controls.specNames 强制显示玩家名字
windows.controls.streak0 连杀奖励 1
windows.controls.streak1 连杀奖励 2
windows.controls.streak2 连杀奖励 3
windows.controls.streak3 连杀奖励 4
windows.controls.streak4 连杀奖励 5
windows.controls.premium0 穿墙飞行模式
windows.controls.premium1 无敌模式
windows.controls.premium2 自杀
windows.controls.premium3 超高伤害
windows.controls.dev0 开发者专用键 1
windows.controls.dev1 开发者专用键 2
windows.controls.dev2 开发者专用键 3
windows.controls.dev3 开发者专用键 4
windows.controls.reset 重置进度并回到起点（仅限于跑酷和速通模式）
windows.controls.pretend 隐藏游戏
windows.host.header 创建自定义游戏
windows.host.maps 服务器设置
windows.host.cmaps 社区地图
windows.host.raw 原始游戏数据
windows.host.modes 选择游戏模式
windows.host.classes 选择武器类别
windows.host.settings 服务器设置
windows.host.preset 创建预设
windows.host.preset.load 加载预设中...
windows.host.preset.name 预设名称
windows.host.start 开始游戏
windows.host.rehost 开始游戏（邀请玩家）
windows.spray.header 选择涂鸦
windows.spray.default 默认涂鸦
windows.spray.spin 涂鸦
windows.maps.header 自定义地图
windows.maps.none 没有找到该地图！
windows.maps.name 地图名称
windows.maps.editor 地图编辑器
windows.maps.publish 发布地图
windows.maps.community 地图开发者社区
windows.publish.map.header 发布或更新地图
windows.publish.map.thumbnail 没有缩略图
windows.publish.map.paste 粘贴游戏数据
windows.publish.map.update 发布或更新
windows.publish.map.login 登录以创建并上传您的地图！
windows.theatre.header 影院模式
windows.theatre.record 启用录制
windows.theatre.key 录制按键
windows.clans.header 战队
windows.clans.members {0} 个战队成员
windows.clans.requests 申请
windows.clans.requests.none 没有申请
windows.clans.page [{0}] 战队页面
windows.clans.create 创建战队
windows.clans.name 战队名称
windows.clans.view 浏览战队
windows.clans.join 加入战队
windows.clans.login 创建并加入战队！
windows.store.header 商店
windows.store.spin {0} 转盘
windows.store.agree 通过此次购买，您将同意 {0} 条款。
windows.store.purchase 购买 KR
windows.store.voucher 兑换代金券
windows.store.voucherinfo 从指定主播和活动获取代金券
windows.store.market 市场
windows.store.market2 Krunker 市场
windows.store.premium 购买会员
windows.store.premium2 Krunker 会员
windows.store.buyP 购买会员后，您将可以自定义您的游戏用户名和体验更多专用功能！
windows.store.buy 买卖物品
windows.store.wheels 转盘
windows.store.unlock 解锁新武器和物品
windows.store.amount 您的账号中还有 {0} KR
windows.store.login 用于在商店中购买和解锁物品！
windows.store.purchasing 购买中...
windows.store.unboxed {0} 开箱获得了 {1}
windows.trade.header 交易
windows.scope.header 选择狙击镜准心
windows.premium.header 会员
windows.skin.header 选择皮肤
windows.hat.header 选择头部
windows.back.header 选择背部饰品
windows.waist.header 选择腰部饰品
windows.face.header 选择表情
windows.melee.header 选择近战武器
windows.attach.header 选择附件
windows.reticle.header 选择准星
windows.reticle.unlocked 于 {0} 级解锁
windows.reticle.req 需要 {0} 级
windows.dye.header 选择服装染色
windows.dye.default 默认服装染色
windows.dye.spin 服装染色
windows.changelog.header 更新日志
windows.mods.community.header 社区模组
windows.mods.community.fav 已收藏
windows.mods.community.new 最新
windows.mods.community.hot 最热门
windows.mods.community.name 模组名称
windows.mods.community.none 没有找到该模组
windows.publish.mod.header 发表模组
windows.publish.mod.thumbnail 没有缩略图
windows.publish.mod.name 模组名称
windows.publish.mod.paste 模组网址
windows.publish.mod.update 发布或更新
windows.publish.mod.login 登录以创建并上传模组！
windows.secondary.header 选择副武器
windows.secondary.unlocked 已解锁
windows.secondary.customOnly 仅限自定义房间
windows.secondary.premiumOnly 仅限会员
windows.secondary.req 需要至少 {0} 级
windows.advertise.header 广告
windows.support.header 支援
windows.players.header 玩家列表
windows.players.none 当前没有玩家在线...
windows.join.header 加入
windows.join.code 输入房间网址
windows.client.header 客户端
windows.client.windows Windows 游戏客户端
windows.client.mac macOS 游戏客户端
windows.client.linux Linux 游戏客户端
windows.ranked.header 排位赛
windows.ranked.login 登录以进行排位赛！
windows.ranked.level 您至少需要 <span color="black"> {0} 级</span> 以进行排位赛！当前您的等级是<span color="black"> {1} 级</span>。
windows.ranked.mode.r1v1 单排
windows.ranked.mode.r2v2 双排
windows.ranked.mode.r4v4 四排
windows.chall.header 挑战
windows.chall.login 登录以完成挑战！
thumbnail.upload.limit 上传失败，缩略图大小上限为 {0}kb
image.upload.limit 上传失败，图片大小上限为 {0}kb
thumbnail.upload.error 缩略图错误
mod.extracting 提取中 {0}/{1}
mod.disabled 模组已禁用
mod.error 模组错误！
mod.loading 加载模组中...
mod.invalid 模组文件不可用！
matchmaker.full 已满
matchmaker.full2 服务器人数已满。
matchmaker.updating 游戏更新中
matchmaker.invalid 没有找到游戏。
matchmaker.none 服务器负载已达到上限
adblocker 禁用广告拦截器以获得免费的KR。
ad-failed 广告加载失败，请稍后重试。
streamers.views {0} 个观众
streamers.none 当前没有 Twitch 直播！
error.extentions 如果您有任何（浏览器）插件，请禁用它们
error.seek 点此以搜索新的游戏
custom.map.upload.limit 上传失败，游戏数据大小上限为五十万个字元
custom.map.missing 请选择至少一种游戏或地图
custom.mode.missing 请选择至少一种模式
custom.class.missing 请选择至少一种武器类别
server.config.maxPlayers 最大玩家数
server.config.minPlayers 最小玩家数
server.config.lives 玩家生命数
server.config.gameTime 每局时间（分钟）
server.config.gravMlt 重力
server.config.tickRI 高传送率
server.config.maxPS 40 人房间
server.config.promServ 推广服务器
server.config.jumpMlt 跳跃力量
server.config.airStrf 开启空中转向
server.config.deltaMlt 时间倍率
server.config.strafeSpd 空中转向速度
server.config.fiRat 武器射速
server.config.reSpd 换弹速度
server.config.slidTime 滑铲时间
server.config.fixMov 修正移动（使跳跃高度和加速不被帧率影响）
server.config.slidSpd 滑铲速度
server.config.healthMlt 血量倍率
server.config.impulseMlt 武器后坐力
server.config.nameTeam1 队伍 1 名字
server.config.nameTeam2 队伍 2 名字
server.config.nameTeam3 队伍 3 名字
server.config.nameTeam4 队伍 4 名字
server.config.nameTeam5 队伍 5 名字
server.config.t1Dmg 队伍 1 伤害
server.config.t2Dmg 队伍 2 伤害
server.config.t3Dmg 队伍 3 伤害
server.config.t4Dmg 队伍 4 伤害
server.config.t5Dmg 队伍 5 伤害
server.config.selTeam 选择队伍
server.config.allowSpect 观战
server.config.killRewards 击杀奖励
server.config.headshotOnly 仅限暴击
server.config.noSecondary 禁用副武器
server.config.noStreaks 禁用连杀
server.config.canSlide 启用滑铲
server.config.wallJP 墙壁跳跃倍率
server.config.autoJump 自动跳跃
server.config.bDrop 子弹下坠
server.config.thirdPerson 第三人称
server.config.requireCaptcha 需要 Captcha 验证
server.config.nameTags 隐藏名牌
server.config.kCams 死亡视角
server.config.noReload 无需重装弹药
server.config.private 私人房间
server.config.krRewards KR 奖励
server.config.forceDefault 必须使用默认设置
server.config.warmupTime 热身时间
server.config.gamRounds 游戏局数
server.config.objtvTime 得分点存在时间
server.config.forceSpawn 自动重生时间
server.config.intermTmr 中场休息时间
server.config.scoreLimit 得分限制
server.config.keepTScore 保持该队伍分数
server.config.forceC 必须使用特定武器
server.config.logTim 通关计时（速通、跑酷）
server.config.hitBoxPad 碰撞箱大小
server.config.hpRegen 启用回血
server.config.disableB 禁用地图边界
server.config.throwMel 启用投掷近战武器
server.config.noCosm 禁用饰品
server.config.tstCmp Faceit 测试模式
server.config.limitClasses 仅限一人一武器类别
server.config.tmSize 团队大小
server.config.fallDmg 开启摔落伤害
server.config.fallDmgThr 摔落伤害阈值
server.config.noDraws 禁用平局
server.config.bstOfR 最佳玩家
social.login 登录或注册
social.login.failed 登录失败
social.login.buy 登录后才可购买
social.login.sell 登录后出售
social.login.gift 登录后赠送
social.login.proccessing 登录中...
social.since 始于
social.user.maps 此用户地图
social.user.mods 此用户模组
social.maps.none 没有找到游戏...
social.mods.none 没有找到模组...
social.market.price.low 最低价格
social.market.price.list 输入价格
social.market.searching 搜索中
social.market.listed {0} 前上架
social.market.list 发布该物品
social.market.unlist 下架该物品
social.market.unlisting 下架物品中...
social.market.posting 发布物品中...
social.market.req 需要至少 {0} 级
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
social.market.dye 服装染色
social.market.none 没有找到任何物品
social.market.login 您必须先登录。
social.market.grace {0} 秒后上架
social.market.sort 筛选或排序
social.market.filter 搜索
social.market.sort2 排序
social.market.price.high 最高价格
social.trading.submitting 提交报价中...
social.market.gift.amount 赠送金额
social.market.fee.gift 无费用
social.market.gift 赠送 KR
social.market.gift.msg 留言
respawn.auto 您将会在 {0} 秒内重生
custom.host.ranked 您不可以在进行排位赛时开设自定义房间。
funds.insufficient 经费不足
funds.out 您似乎没有 KR 了
custom.passcode.long 密码过长
custom.passcode.input 请输入房间密码
custom.tryagain 请重试。
purchase.kr.success 已成功将 {0} KR 加入您的账号
limited.purchase.ask 您确定要以 {1} KR 购买 [{0}] 吗？
limited.purchase.success 已成功将 {0} 加入您的账号
pretend.exit 再次点击 [{0}] 以退出
settings.loaded 设置已加载
settings.loaded.none 该设置为空白
account.login.required 您必须先登录
account.banned.hack 此账号因使用外挂而被封禁
account.banned.appeal 如果您想提出上诉，请联系：
account.delete 您可以申请删除您的账号，如果您的申请在14天內没有被撤销，所有关于此账号的信息将会被永久抹除。
account.delete.request 您确定要申请删除您的账号吗？
account.delete.cancel 您确定要取消账号删除申请吗？
spin.free.available 免费 KR 已准备完毕！
spin.free.claim 此免费 KR 转盘仅可在每小时完成一局比赛后获得。
spin.free.disable 免费 KR 弹窗可以在设置中禁用。
mod.reset.0 该设置将会在玩家重生后生效。
mod.reset.1 地图物体将不会被重置。
windows.profile.picture 更改头像
stats.assists 助攻次数
stats.nukes 使用核弹次数
stats.melee 近战武器击杀次数
stats.fistkills 空手击杀次数
stats.thrownkills 投掷近战武器击杀次数
stats.headshots 暴击次数
stats.wallbangs 穿墙击杀次数
stats.sprays 涂鸦次数
windows.host.default.settings 保持玩家计分功能仅可在使用默认设置时被打开
windows.host.default.commands * 房主指令（如：/noclip，/god，/smite 等）会在此模式中被禁用。
windows.host.rewards 启用 KR 奖励将强制服务器使用地图预设，以允许玩家在地图内获得 KR：
windows.store.wheels.sub 试试这些转盘，您将有机会获得全新皮肤！
windows.store.currency * 美元价格会按照支付服务提供商或银行决定的汇率转换为您的本地货币。
windows.store.creator 购买 KR 时，考虑使用创作者代码以支持您喜爱的内容创作者
windows.chall.customs 您不能在自定义房间中完成挑战。
twitch.link 您确定要链接您的 Twitch 账号吗？
twitch.unlink 您确定要取消链接吗？
windows.clan.leave 您确定要离开该战队吗？
windows.clan.delete 您确定要解散该战队吗？
windows.clan.kick 您确定要将 {0} 踢出您的战队吗？
windows.store.premium.purchase 您确定要购买 {0} 天的会员吗？
windows.store.premium.gift 您确定要赠送 '{0}' {1} 天的会员吗？
windows.playerlist.ban 您确定要封禁 {0} 吗？
windows.playerlist.flag 您确定要标记 {0} 为外挂用户吗？
windows.playerlist.unflag 您确定要取消标记 {0} 吗？
windows.playerlist.punish 您确定要对 {0} 采取措施吗？
item.view.open 打开模型浏览器
item.view.more 更多信息
item.sell.cant 物品无法出售。
item.sell.quick 您确定要闪售 {0} 吗？
social.profile.stats 综合战绩
social.profile.class 各武器类别战绩
social.profile.sales 销售记录
social.profile.sales.market 市场销售额
social.profile.skins [{0}] 个物品
social.profile.skins.none 此用户未发布任何皮肤
social.profile.games [{0}] 个游戏地图
social.profile.games.none 此用户未发布任何游戏地图
social.profile.assets [{0}] 个地图组件
social.profile.assets.none 此用户未发布任何地图组件
social.profile.mods [{0}] 个模组
social.profile.mods.none 此用户未发布任何游戏模组
social.search 搜索结果
social.market.stats.rare 最稀有物品
social.market.stats.circulation 流通中
social.market.stats.units 全球持有数量
social.trades.in 收到的请求
social.trades.in.head 收到了 ({0}) 个交易请求
social.trades.out 已发送的请求
social.trades.out.head 发送了 ({0}) 个交易请求
social.trades.history 交易记录
social.trades.history.head ({0}) 个交易记录
social.trades.decline 全部拒绝
social.trades.message 在设置中开启交易请求信息
social.trades.warning 您将不会在此交易中获得任何物品！
social.trades.accept 您确定要接受此交易请求吗？
stats.airdrops KR 空投
settings.quality.flapAnim 狙击镜保护蓋动画
`;
