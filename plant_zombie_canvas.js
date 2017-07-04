(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#333333",
	manifest: [
		{src:"sounds/zombie_eat.mp3", id:"zombie_eat"},
		{src:"sounds/AudioSprite.mp3", id:"AudioSprite"},
		{src:"sounds/LauraShigiharaGrasswalkINGAME钢琴版纯音乐.mp3", id:"LauraShigiharaGrasswalkINGAME钢琴版纯音乐"}
	]
};



// symbols:



(lib.background1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bulletMcs = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PeaBulletHit = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_0 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_1_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_10 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_11 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_12 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Peashooter_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Shovel = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Sun_0 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Sun_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Sun_10 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Sun_11 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Sun_12 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Sun_13 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Sun_14 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Sun_15 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Sun_16 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Sun_17 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Sun_18 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Sun_19 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Sun_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Sun_20 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Sun_21 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Sun_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Sun_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Sun_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Sun_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Sun_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Sun_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Sun_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_0 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_10 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_11 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_12 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_13 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_14 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_15 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_16 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_17 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_18 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_19 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.TwinSunflower_2_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_0 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_10 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_11 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_12 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_13 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_14 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_15 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_16 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_17 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_18 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_19 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_20 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_21 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Zombie_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_0 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_10 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_11 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_12 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_13 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_14 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_15 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_16 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_17 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_18 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_19 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_20 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.ZombieAttack_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_0 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_1 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.ZombieDie_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_10 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_11 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_2 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_3 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_4 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_5 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_6 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_7 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_8 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.ZombieHead_9 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.导航 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.铲子 = function() {
	this.spriteSheet = ss["plant_zombie_canvas_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.zombieMc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Zombie_0();
	this.instance.setTransform(-108,-109);

	this.instance_1 = new lib.Zombie_1();
	this.instance_1.setTransform(-108,-109);

	this.instance_2 = new lib.Zombie_2();
	this.instance_2.setTransform(-108,-109);

	this.instance_3 = new lib.Zombie_3();
	this.instance_3.setTransform(-108,-109);

	this.instance_4 = new lib.Zombie_4();
	this.instance_4.setTransform(-108,-109);

	this.instance_5 = new lib.Zombie_5();
	this.instance_5.setTransform(-108,-109);

	this.instance_6 = new lib.Zombie_6();
	this.instance_6.setTransform(-108,-109);

	this.instance_7 = new lib.Zombie_7();
	this.instance_7.setTransform(-108,-109);

	this.instance_8 = new lib.Zombie_8();
	this.instance_8.setTransform(-108,-109);

	this.instance_9 = new lib.Zombie_9();
	this.instance_9.setTransform(-108,-109);

	this.instance_10 = new lib.Zombie_10();
	this.instance_10.setTransform(-108,-109);

	this.instance_11 = new lib.Zombie_11();
	this.instance_11.setTransform(-108,-109);

	this.instance_12 = new lib.Zombie_12();
	this.instance_12.setTransform(-108,-109);

	this.instance_13 = new lib.Zombie_13();
	this.instance_13.setTransform(-108,-109);

	this.instance_14 = new lib.Zombie_14();
	this.instance_14.setTransform(-108,-109);

	this.instance_15 = new lib.Zombie_15();
	this.instance_15.setTransform(-108,-109);

	this.instance_16 = new lib.Zombie_16();
	this.instance_16.setTransform(-108,-109);

	this.instance_17 = new lib.Zombie_17();
	this.instance_17.setTransform(-108,-109);

	this.instance_18 = new lib.Zombie_18();
	this.instance_18.setTransform(-108,-109);

	this.instance_19 = new lib.Zombie_19();
	this.instance_19.setTransform(-108,-109);

	this.instance_20 = new lib.Zombie_20();
	this.instance_20.setTransform(-108,-109);

	this.instance_21 = new lib.Zombie_21();
	this.instance_21.setTransform(-108,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},6).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},6).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},6).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},6).to({state:[{t:this.instance_21}]},3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-109,166,144);


(lib.zombie_attack_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ZombieAttack_0();
	this.instance.setTransform(-108,-109);

	this.instance_1 = new lib.ZombieAttack_1();
	this.instance_1.setTransform(-108,-109);

	this.instance_2 = new lib.ZombieAttack_2();
	this.instance_2.setTransform(-108,-109);

	this.instance_3 = new lib.ZombieAttack_3();
	this.instance_3.setTransform(-108,-109);

	this.instance_4 = new lib.ZombieAttack_4();
	this.instance_4.setTransform(-108,-109);

	this.instance_5 = new lib.ZombieAttack_5();
	this.instance_5.setTransform(-108,-109);

	this.instance_6 = new lib.ZombieAttack_6();
	this.instance_6.setTransform(-108,-109);

	this.instance_7 = new lib.ZombieAttack_7();
	this.instance_7.setTransform(-108,-109);

	this.instance_8 = new lib.ZombieAttack_8();
	this.instance_8.setTransform(-108,-109);

	this.instance_9 = new lib.ZombieAttack_9();
	this.instance_9.setTransform(-108,-109);

	this.instance_10 = new lib.ZombieAttack_10();
	this.instance_10.setTransform(-108,-109);

	this.instance_11 = new lib.ZombieAttack_11();
	this.instance_11.setTransform(-108,-109);

	this.instance_12 = new lib.ZombieAttack_12();
	this.instance_12.setTransform(-108,-109);

	this.instance_13 = new lib.ZombieAttack_13();
	this.instance_13.setTransform(-108,-109);

	this.instance_14 = new lib.ZombieAttack_14();
	this.instance_14.setTransform(-108,-109);

	this.instance_15 = new lib.ZombieAttack_15();
	this.instance_15.setTransform(-108,-109);

	this.instance_16 = new lib.ZombieAttack_16();
	this.instance_16.setTransform(-108,-109);

	this.instance_17 = new lib.ZombieAttack_17();
	this.instance_17.setTransform(-108,-109);

	this.instance_18 = new lib.ZombieAttack_18();
	this.instance_18.setTransform(-108,-109);

	this.instance_19 = new lib.ZombieAttack_19();
	this.instance_19.setTransform(-108,-109);

	this.instance_20 = new lib.ZombieAttack_20();
	this.instance_20.setTransform(-108,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-109,166,144);


(lib.TwinSunflower_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.TwinSunflower();
	this.instance.setTransform(-33,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-39,50,70);


(lib.sunMc_duo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Sun_0();
	this.instance.setTransform(-37,-38);

	this.instance_1 = new lib.Sun_1();
	this.instance_1.setTransform(-37,-38);

	this.instance_2 = new lib.Sun_2();
	this.instance_2.setTransform(-37,-38);

	this.instance_3 = new lib.Sun_3();
	this.instance_3.setTransform(-37,-38);

	this.instance_4 = new lib.Sun_4();
	this.instance_4.setTransform(-37,-38);

	this.instance_5 = new lib.Sun_5();
	this.instance_5.setTransform(-37,-38);

	this.instance_6 = new lib.Sun_6();
	this.instance_6.setTransform(-37,-38);

	this.instance_7 = new lib.Sun_7();
	this.instance_7.setTransform(-37,-38);

	this.instance_8 = new lib.Sun_8();
	this.instance_8.setTransform(-37,-38);

	this.instance_9 = new lib.Sun_9();
	this.instance_9.setTransform(-37,-38);

	this.instance_10 = new lib.Sun_10();
	this.instance_10.setTransform(-37,-38);

	this.instance_11 = new lib.Sun_11();
	this.instance_11.setTransform(-37,-38);

	this.instance_12 = new lib.Sun_12();
	this.instance_12.setTransform(-37,-38);

	this.instance_13 = new lib.Sun_13();
	this.instance_13.setTransform(-37,-38);

	this.instance_14 = new lib.Sun_14();
	this.instance_14.setTransform(-37,-38);

	this.instance_15 = new lib.Sun_15();
	this.instance_15.setTransform(-37,-38);

	this.instance_16 = new lib.Sun_16();
	this.instance_16.setTransform(-37,-38);

	this.instance_17 = new lib.Sun_17();
	this.instance_17.setTransform(-37,-38);

	this.instance_18 = new lib.Sun_18();
	this.instance_18.setTransform(-37,-38);

	this.instance_19 = new lib.Sun_19();
	this.instance_19.setTransform(-37,-38);

	this.instance_20 = new lib.Sun_20();
	this.instance_20.setTransform(-37,-38);

	this.instance_21 = new lib.Sun_21();
	this.instance_21.setTransform(-37,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-38,78,78);


(lib.SunFlowerMc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.TwinSunflower_2_0();
	this.instance.setTransform(-37,-48);

	this.instance_1 = new lib.TwinSunflower_2_1();
	this.instance_1.setTransform(-37,-48);

	this.instance_2 = new lib.TwinSunflower_2_2();
	this.instance_2.setTransform(-37,-48);

	this.instance_3 = new lib.TwinSunflower_2_3();
	this.instance_3.setTransform(-37,-48);

	this.instance_4 = new lib.TwinSunflower_2_4();
	this.instance_4.setTransform(-37,-48);

	this.instance_5 = new lib.TwinSunflower_2_5();
	this.instance_5.setTransform(-37,-48);

	this.instance_6 = new lib.TwinSunflower_2_6();
	this.instance_6.setTransform(-37,-48);

	this.instance_7 = new lib.TwinSunflower_2_7();
	this.instance_7.setTransform(-37,-48);

	this.instance_8 = new lib.TwinSunflower_2_8();
	this.instance_8.setTransform(-37,-48);

	this.instance_9 = new lib.TwinSunflower_2_9();
	this.instance_9.setTransform(-37,-48);

	this.instance_10 = new lib.TwinSunflower_2_10();
	this.instance_10.setTransform(-37,-48);

	this.instance_11 = new lib.TwinSunflower_2_11();
	this.instance_11.setTransform(-37,-48);

	this.instance_12 = new lib.TwinSunflower_2_12();
	this.instance_12.setTransform(-37,-48);

	this.instance_13 = new lib.TwinSunflower_2_13();
	this.instance_13.setTransform(-37,-48);

	this.instance_14 = new lib.TwinSunflower_2_14();
	this.instance_14.setTransform(-37,-48);

	this.instance_15 = new lib.TwinSunflower_2_15();
	this.instance_15.setTransform(-37,-48);

	this.instance_16 = new lib.TwinSunflower_2_16();
	this.instance_16.setTransform(-37,-48);

	this.instance_17 = new lib.TwinSunflower_2_17();
	this.instance_17.setTransform(-37,-48);

	this.instance_18 = new lib.TwinSunflower_2_18();
	this.instance_18.setTransform(-37,-48);

	this.instance_19 = new lib.TwinSunflower_2_19();
	this.instance_19.setTransform(-37,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-48,83,84);


(lib.shovelMc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Shovel();
	this.instance.setTransform(-32,-15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-15,76,34);


(lib.shovel = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.铲子();
	this.instance.setTransform(-33,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-39,71,72);


(lib.selectorMc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.502)").s().p("AlEF2IAArsIKIAAIAALsg");
	this.shape.setTransform(32.5,37.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,75);


(lib.plantMccc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Peashooter_0();
	this.instance.setTransform(-33,-39);

	this.instance_1 = new lib.Peashooter_1();
	this.instance_1.setTransform(-33,-39);

	this.instance_2 = new lib.Peashooter_2();
	this.instance_2.setTransform(-33,-39);

	this.instance_3 = new lib.Peashooter_3();
	this.instance_3.setTransform(-33,-39);

	this.instance_4 = new lib.Peashooter_4();
	this.instance_4.setTransform(-33,-39);

	this.instance_5 = new lib.Peashooter_5();
	this.instance_5.setTransform(-33,-39);

	this.instance_6 = new lib.Peashooter_6();
	this.instance_6.setTransform(-33,-39);

	this.instance_7 = new lib.Peashooter_7();
	this.instance_7.setTransform(-33,-39);

	this.instance_8 = new lib.Peashooter_8();
	this.instance_8.setTransform(-33,-39);

	this.instance_9 = new lib.Peashooter_9();
	this.instance_9.setTransform(-33,-39);

	this.instance_10 = new lib.Peashooter_10();
	this.instance_10.setTransform(-33,-39);

	this.instance_11 = new lib.Peashooter_11();
	this.instance_11.setTransform(-33,-39);

	this.instance_12 = new lib.Peashooter_12();
	this.instance_12.setTransform(-33,-39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-39,71,71);


(lib.Peashooter = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Peashooter_1_1();
	this.instance.setTransform(-33,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-39,50,70);


(lib.nav = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.导航();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,262,87);


(lib.deadZombie_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ZombieHead_2();
	this.instance.setTransform(-86,-107);

	this.instance_1 = new lib.ZombieHead_3();
	this.instance_1.setTransform(-86,-107);

	this.instance_2 = new lib.ZombieHead_4();
	this.instance_2.setTransform(-86,-107);

	this.instance_3 = new lib.ZombieHead_5();
	this.instance_3.setTransform(-86,-107);

	this.instance_4 = new lib.ZombieHead_6();
	this.instance_4.setTransform(-86,-107);

	this.instance_5 = new lib.ZombieHead_7();
	this.instance_5.setTransform(-86,-107);

	this.instance_6 = new lib.ZombieHead_8();
	this.instance_6.setTransform(-86,-107);

	this.instance_7 = new lib.ZombieHead_9();
	this.instance_7.setTransform(-86,-107);

	this.instance_8 = new lib.ZombieHead_10();
	this.instance_8.setTransform(-86,-107);

	this.instance_9 = new lib.ZombieHead_11();
	this.instance_9.setTransform(-86,-107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.instance_9}]},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-107,150,186);


(lib.deadZombie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ZombieDie_0();
	this.instance.setTransform(-108,-109);

	this.instance_1 = new lib.ZombieDie_1();
	this.instance_1.setTransform(-108,-109);

	this.instance_2 = new lib.ZombieDie_2();
	this.instance_2.setTransform(-108,-109);

	this.instance_3 = new lib.ZombieDie_3();
	this.instance_3.setTransform(-108,-109);

	this.instance_4 = new lib.ZombieDie_4();
	this.instance_4.setTransform(-108,-109);

	this.instance_5 = new lib.ZombieDie_5();
	this.instance_5.setTransform(-108,-109);

	this.instance_6 = new lib.ZombieDie_6();
	this.instance_6.setTransform(-108,-109);

	this.instance_7 = new lib.ZombieDie_7();
	this.instance_7.setTransform(-108,-109);

	this.instance_8 = new lib.ZombieDie_8();
	this.instance_8.setTransform(-108,-109);

	this.instance_9 = new lib.ZombieDie_9();
	this.instance_9.setTransform(-108,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-109,166,144);


(lib.bulletMcc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.PeaBulletHit();
	this.instance.setTransform(-26,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,46);


(lib.bulletMc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.bulletMcs();
	this.instance.setTransform(-16,-17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-17,56,34);


(lib.zombieMc = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(133,0,0,0.02)").s().p("As9LQIAA2eIZ6AAIAAWeg");
	this.shape.setTransform(-25,-37);

	// 图层 1
	this.instance = new lib.zombieMc_1();
	this.instance.setTransform(-25,-37,1,1,0,0,0,-25,-37);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108,-109,166,144);


(lib.zombie_attack = function() {
	this.initialize();

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(133,0,0,0.012)").s().p("As9LQIAA2eIZ6AAIAAWeg");
	this.shape.setTransform(-25,-37);

	// 图层 1
	this.instance = new lib.zombie_attack_1();
	this.instance.setTransform(-25,-37,1,1,0,0,0,-25,-37);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108,-109,166,144);


(lib.sunMc = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.Sun_1();
	this.instance.setTransform(-40,-39);

	// duo
	this.instance_1 = new lib.sunMc_duo();
	this.instance_1.setTransform(-1,0,1,1,0,0,0,2,1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-39,78,78);


(lib.SunFlowerMc = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(133,0,0,0.012)").s().p("AmeGjIAAtGIM9AAIAANGg");
	this.shape.setTransform(-4,-17);

	// 图层 1
	this.instance = new lib.SunFlowerMc_1();
	this.instance.setTransform(-4,-17,1,1,0,0,0,4.5,-6);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-59,83,84);


(lib.plantMc = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(133,0,0,0.012)").s().p("AlhFjIAArEILEAAIAALEg");
	this.shape.setTransform(2,-8);

	// 图层 1
	this.instance = new lib.plantMccc();
	this.instance.setTransform(2,-8,1,1,0,0,0,2.5,-3.5);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.5,-43.5,71,71);


// stage content:
(lib.plant_zombie_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("LauraShigiharaGrasswalkINGAME钢琴版纯音乐",-1);
		//
		// arrays to store game field information
		//
		var plantsArray = new Array(); // plants placed in the game field
		var zombiesArray = new Array(); //zombies placed in the game field
		//
		// timers
		//
		//var flowersTimer = new Timer(10000); // timer to make flowers fall down//////////////////////////////////////太阳计时器
		//var zombieTimer = new Timer(5000); // timer to make zombies come in//////////////////////////////////////僵尸计时器
		//
		// containers
		//
		var deadZombieContainer = new createjs.Container(); // container for all sunflower//////////////死亡僵尸收集器
		var sunFlowerContainer = new createjs.Container(); // container for all sunflower//////////////葵花收集器
		var sunContainer = new createjs.Container(); // container for all suns//////////////太阳收集器
		var sun_ClickContainer = new createjs.Container(); // container for all suns//////////////点击的太阳收集器
		var plantContainer = new createjs.Container(); // container for all plants//////////////植物收集器
		var bulletContainer = new createjs.Container(); // container for all bullets//////////////子弹收集器
		var zombieContainer = new createjs.Container(); // container for all zombies//////////////僵尸收集器
		var overlayContainer = new createjs.Container(); // container of all overlays
		var bulletcContainer = new createjs.Container(); //爆炸子弹收集器
		var zombie_attackContainer = new createjs.Container(); // 进攻僵尸收集器
		//
		// actors
		//
		var movingShovel; // 移动的铲子
		var movingSunFlower; // plant the player can drag on game field
		var movingPlant; // plant the player can drag on game field
		var selector; // the selector square to show the playere where he's going to place the plant使得玩家看清楚植物将要被种到哪一个区块
		//
		// other variables
		//
		var money = 250; // amout of money owned by the player
		var moneyText = new createjs.Text("money:" + money, "20px Times", "#000000"); //////////////////////////////////动态money文本框// dynamic text field where to show player's money
		var playerMoving_shovel = false;
		var playerMoving = false;
		var playerMoving_sunflower = false; // Boolean variable to tell us if the player is moving a plant (true) or not (false)
		var totalZombies = 0; //total amount of zombies placed in game
		
		//var assetsPath = "./sounds/";
		/*var sound = [{
			scr: "sounds/floop.wav",
			data: {
				channels: 1,
				plantFire: [{
					id: "plantHit",
					startTime: 0,
					duration: 400
				}]
			}
		
		}];
		createjs.Sound.alternateExtensions = ["wav"];
		//createjs.Sound.on("fileload",loadSound);
		//createjs.Sound.registerSounds(sounds,assetsPath);
		//function loadSound(){
		//	createjs.Sound.removeEventListener()
		//}*/
		pvz_植物大战僵尸();
		function pvz_植物大战僵尸() {
			//createjs.Sound.alternateExtensions = ["mp3"];
			//createjs.Sound.on("fileload", this.loadHandler, this);
			createjs.Sound.registerSound("./sounds/floop.wav", "plantHit");
			createjs.Sound.registerSound("./sounds/zombie_eat.mp3", "zombieHit");
			setupField(); // initializes the game
			drawField(); // draws the game field
			addZombies(); // initializes the zombies
			addStore(); //左上角选择栏背景
			addShovel(); ////左上角加上铲子
			addPlants(); // initialized the plants
			addSunFlower(); //左上角加上太阳
			fallingSuns(); // initializes the falling suns
			stage.addEventListener("tick", onEnterFrm); //////////////////////////////////////////////////每一帧
		}
		//
		// game field setup. arrays to store plants and zombies information are created
		//
		function setupField() { //////////////////////////////////////创建田
			for (var i = 0; i < 5; i++) {
				plantsArray[i] = new Array();
				zombiesArray[i] = new Array();
				for (var j = 0; j < 9; j++) {
					plantsArray[i][j] = 0;
				}
			}
		}
		//
		// showing the amount of money
		//
		function updateMoney() {
			moneyText.text = money.toString();
		}
		//
		// game field drawing and children hierarchy management
		//
		function drawField() { //////////////////////////////////////////////////画田
			stage.addChild(bulletContainer);
			stage.addChild(zombieContainer);
			stage.addChild(overlayContainer);
			stage.addChild(sunFlowerContainer);
			stage.addChild(plantContainer);
			stage.addChild(deadZombieContainer);
			stage.addChild(zombie_attackContainer);
			stage.addChild(bulletcContainer);
			stage.addChild(moneyText);
			stage.addChild(sunContainer);
			stage.addChild(sun_ClickContainer);
			updateMoney();
			moneyText.y = 63;
			moneyText.x = 25;
		
		}
		
		
		
		
		
		//
		// zombies initialization
		//
		function addZombies() {
			var aa = setInterval(newZombie, 5000);
		}
		//
		// adding a new zombie
		//
		function newZombie() {
			var zombie = new lib.zombieMc(); // constructs the zombie
			totalZombies++;
			zombieContainer.addChild(zombie); // adds the zombie
			zombie.blood = 1.0; //僵尸的血
			zombie.zombieRow = Math.floor(Math.random() * 5); // chooses a random row where to place the zombie
			zombie.name = "zombie_" + totalZombies; //gives a name to the zombie
			zombie.num = totalZombies;
			zombiesArray[zombie.zombieRow].push(zombie.name); // adds the zombie in the row-th row
			zombie.x = 660; // places the zombie on the board, outside the stage to the right
			zombie.y = zombie.zombieRow * 75 + 115;
		}
		
		
		
		
		
		
		//
		// suns initialization
		//
		function fallingSuns() { //////////////////////////////////////////////////计时器，掉太阳
			var bb = setInterval(newSun, 1000);
		}
		//
		// adding a new sun
		//
		function newSun() { //////////////////////////////////////////////////创建太阳
			var sunRow = Math.floor(Math.random() * 5); // random row
			var sunCol = Math.floor(Math.random() * 9); // random column
			var sun = new lib.sunMc(); // constructs the sun
			sun.buttonMode = true; // makes the mouse change shape when over the plant//////////////////////////////////////改变鼠标样式
			sun.alpha = 1; //太阳的血
			sunContainer.addChild(sun); // adds the sun
			sun.x = 52 + sunCol * 65; // places the sun in the proper column
			sun.destinationY = 130 + sunRow * 75; // definines the sun y destination point
			sun.y = -20; // places the sun out to the upper side of the stage
			sun.addEventListener("click", sunClicked); // listener to be triggered when the sun is clicked
		}
		//
		// handling clicks on suns
		//
		
		function sunClicked(event) { //////////////////////////////////////////////////点击太阳
			var targett = event.target;
			var sunToRemove = targett.parent; // defines which sun we need to remove
			sunToRemove.removeEventListener("click", sunClicked); // removes the CLICK listener
			money += 50; // makes the player earn money (5)
			updateMoney(); //////////////////////////////////////////////////更新钱// updates money text
			sunContainer.removeChild(sunToRemove); // removes the sun
			sun_ClickContainer.addChild(sunToRemove); ///////收集被点击的太阳，  让太阳沿左上角移动
		}
		
		
		
		
		
		//
		// building the plantStore toolbar (only 1 plant at the moment)
		//
		function addStore() { //左上角选择栏背景
			var store_ = new lib.nav();
			overlayContainer.addChild(store_);
			store_.x = 0;
			store_.y = 0;
			//overlayContainer.addChild(moneyText); //金钱数目
		}
		
		
		
		//
		// building the plantShovel toolbar (only 1 plant at the moment)
		//
		function addShovel() { ////////////////////////////////// //////////////////////////////////添加植物
			var shavel_ = new lib.shovel(); // constructs a new plant
			overlayContainer.addChild(shavel_); // adds the plant
			shavel_.buttonMode = true; // makes the mouse change shape when over the plant//////////////////////////////////////改变鼠标样式
			shavel_.x = 224;
			shavel_.y = 39;
			shavel_.addEventListener("click", onShovelClicked); // listener to be triggered once the plant is clicked
		}
		//
		// handling clicks on shovel
		//
		function onShovelClicked() {
			// let's see if the player has enough money (10) to afford the plant and isn't currently dragging a plant
			if (!playerMoving_shovel) {
				selector = new lib.selectorMc(); // constructs a new selector
				selector.visible = false; // makes the selector invisible
				overlayContainer.addChild(selector); // adds the selector
				movingShovel = new lib.shovelMc(); // constructs a new moving plant
				movingShovel.addEventListener("click", placeShovel); // lister to be triggered once the moving plant is clicked
				overlayContainer.addChild(movingShovel); // adds the moving plant
				playerMoving_shovel = true; // tells the script the player is actually moving a plant//////////////////////////////////////选中当前植物且鼠标在移动
			}
		}
		//
		// placing the plant on the game field
		//
		function placeShovel() {
			var plantRow = Math.floor((stage.mouseY - 120) / 75);
			var plantCol = Math.floor((stage.mouseX - 25) / 65);
			// let's see if the tile is inside the game field and it's free
			if (plantRow >= 0 && plantCol >= 0 && plantRow < 5 && plantCol < 9) {
				if (plantsArray[plantRow][plantCol] == 1) {
					playerMoving_shovel = false;
					var plant_remove = plantContainer.getChildByName("plant_" + plantRow + "_" + plantCol);
					plantContainer.removeChild(plant_remove);
					overlayContainer.removeChild(selector); // removes the selector
					overlayContainer.removeChild(movingShovel); // removes the plant itself
					plantsArray[plantRow][plantCol] = 0; // updates game array adding the new plant等于1是豌豆
					movingShovel.removeEventListener("click", placeShovel); //移除铲子的监听
				}
				if (plantsArray[plantRow][plantCol] == 2) {
					playerMoving_shovel = false;
					var sunFlower_remove = sunFlowerContainer.getChildByName("sunFlower_" + plantRow + "_" + plantCol);
					sunFlowerContainer.removeChild(sunFlower_remove);
					overlayContainer.removeChild(selector); // removes the selector
					overlayContainer.removeChild(movingShovel); // removes the plant itself
					plantsArray[plantRow][plantCol] = 0; // updates game array adding the new plant等于1是豌豆
					movingShovel.removeEventListener("click", placeShovel);
				}
				if (plantsArray[plantRow][plantCol] == 0) {
					playerMoving_shovel = false; // tells the script the player is no longer moving
					movingShovel.removeEventListener("click", placeShovel); // removes the CLICK listener from the draggable plant
					overlayContainer.removeChild(selector); // removes the selector
					overlayContainer.removeChild(movingShovel); // removes the plant itself
				}
			}
		}
		
		
		
		
		
		
		//
		// building the plant toolbar (only 1 plant at the moment)
		//
		function addPlants() { ////////////////////////////////// //////////////////////////////////添加植物
			var plant = new lib.Peashooter(); // constructs a new plant
			overlayContainer.addChild(plant); // adds the plant
			plant.buttonMode = true; // makes the mouse change shape when over the plant//////////////////////////////////////改变鼠标样式
			plant.x = 162;
			plant.y = 47;
			plant.addEventListener("click", onPlantClicked); // listener to be triggered once the plant is clicked
		}
		//
		// handling clicks on plants
		//
		function onPlantClicked() {
			// let's see if the player has enough money (10) to afford the plant and isn't currently dragging a plant
			if (money >= 100 && !playerMoving) {
				money -= 100; // pays the plant
				updateMoney(); // updates money text
				selector = new lib.selectorMc(); // constructs a new selector
				selector.visible = false; // makes the selector invisible
				overlayContainer.addChild(selector); // adds the selector
				movingPlant = new lib.plantMc(); // constructs a new moving plant
				movingPlant.addEventListener("click", placePlant); // lister to be triggered once the moving plant is clicked
				overlayContainer.addChild(movingPlant); // adds the moving plant
				playerMoving = true; // tells the script the player is actually moving a plant//////////////////////////////////////选中当前植物且鼠标在移动
			}
		}
		//
		// placing the plant on the game field
		//
		function placePlant() {
			var plantRow = Math.floor((stage.mouseY - 80) / 75);
			var plantCol = Math.floor((stage.mouseX - 25) / 65);
			// let's see if the tile is inside the game field and it's free
			if (plantRow >= 0 && plantCol >= 0 && plantRow < 5 && plantCol < 9 && plantsArray[plantRow][plantCol] == 0) {
				var placedPlant = new lib.plantMc(); // constructs the plant to be placed
				placedPlant.blood = 1.0; //植物的血
				placedPlant.name = "plant_" + plantRow + "_" + plantCol; // gives the plant a name
				placedPlant.fireRate = 100; // plant fire rate, in frames
				placedPlant.recharge = 0; // plant recharge. When recharge is equal to fireRate, the plant is ready to fire
				//placedPlant.isFiring = false; // Boolean value to tell if the plant is firing
				placedPlant.plantRow = plantRow; // plant row
				placedPlant.plantCol = plantCol; //植物在哪一列
				plantContainer.addChild(placedPlant); // adds the plant
				placedPlant.x = plantCol * 65 + 57;
				placedPlant.y = plantRow * 75 + 115;
				playerMoving = false; // tells the script the player is no longer moving
				movingPlant.removeEventListener("click", placePlant); // removes the CLICK listener from the draggable plant
				overlayContainer.removeChild(selector); // removes the selector
				overlayContainer.removeChild(movingPlant); // removes the plant itself
				plantsArray[plantRow][plantCol] = 1; // updates game array adding the new plant等于1是豌豆
			}
		}
		
		
		
		
		
		
		//
		// building the sunFlower toolbar (only 1 plant at the moment)
		//
		function addSunFlower() { ////////////////////////////////// //////////////////////////////////添加植物
			var sunFlower = new lib.TwinSunflower(); // constructs a new plant
			overlayContainer.addChild(sunFlower); // adds the plant
			sunFlower.buttonMode = true; // makes the mouse change shape when over the plant//////////////////////////////////////改变鼠标样式
			sunFlower.x = 78;
			sunFlower.y = 9;
			sunFlower.addEventListener("click", onSunFlowerClicked); // listener to be triggered once the plant is clicked
		}
		//
		// handling clicks on plants
		//
		function onSunFlowerClicked() {
			// let's see if the player has enough money (10) to afford the plant and isn't currently dragging a plant
			if (money >= 150 && !playerMoving_sunflower) {
				money -= 150; // pays the plant
				updateMoney(); // updates money text
				selector = new lib.selectorMc(); // constructs a new selector
				selector.visible = false; // makes the selector invisible
				overlayContainer.addChild(selector); // adds the selector
				movingSunFlower = new lib.SunFlowerMc(); // constructs a new moving plant
				movingSunFlower.addEventListener("click", placeSunFlower); // lister to be triggered once the moving plant is clicked
				overlayContainer.addChild(movingSunFlower); // adds the moving plant
				playerMoving_sunflower = true; // tells the script the player is actually moving a plant//////////////////////////////////////选中当前植物且鼠标在移动
			}
		}
		//
		// placing the plant on the game field
		//
		function placeSunFlower() {
			var plantRow = Math.floor((stage.mouseY - 80) / 75);
			var plantCol = Math.floor((stage.mouseX - 25) / 65);
			// let's see if the tile is inside the game field and it's free
			if (plantRow >= 0 && plantCol >= 0 && plantRow < 5 && plantCol < 9 && plantsArray[plantRow][plantCol] == 0) {
				var placedPlant = new lib.SunFlowerMc(); // constructs the plant to be placed
				placedPlant.blood = 1.0; //向日葵的血
				placedPlant.name = "sunFlower_" + plantRow + "_" + plantCol; // gives the plant a name
				placedPlant.fireRate = 250 //产太阳速度
				placedPlant.recharge = 0; // 累计能力产太阳
				placedPlant.plantRow = plantRow; // plant row
				placedPlant.plantCol = plantCol; //植物在哪一列
				sunFlowerContainer.addChild(placedPlant); // adds the plant
				placedPlant.x = plantCol * 65 + 57;
				placedPlant.y = plantRow * 75 + 115;
				playerMoving_sunflower = false; // tells the script the player is no longer moving
				movingSunFlower.removeEventListener("click", placeSunFlower); // removes the CLICK listener from the draggable plant
				overlayContainer.removeChild(selector); // removes the selector
				overlayContainer.removeChild(movingSunFlower); // removes the plant itself
				plantsArray[plantRow][plantCol] = 2; // updates game array adding the new plant等于2是向日葵
			}
		}
		
		
		
		//
		// core function to be executed at every frame. The whole game is managed here
		//
		function onEnterFrm() { //////////////////////////////////帧数（时间）一到，各种消失
			var i;
			var j;
			var k;
			var h;
			//
			//点击的太阳往左上飞
			//
			for (i = 0; i < sun_ClickContainer.numChildren; i++) {
				var sun_click = sun_ClickContainer.getChildAt(i);
				if (sun_click.x >= 5 || sun_click.y >= 20) {
					sun_click.x -= 4;
					var k_sun = (sun_click.y / sun_click.x) * 4;
					sun_click.y -= k_sun;
				}
				if (sun_click.x <= 5 || sun_click.y <= 20) {
					sun_ClickContainer.removeChild(sun_click);
				}
			}
		
			//
			// plants management
			//
			for (i = 0; i < plantContainer.numChildren; i++) {
				var currentPlant = plantContainer.getChildAt(i);
				// let's see if the plant can fire
				if (currentPlant.recharge == currentPlant.fireRate) {
		
					if (zombiesArray[currentPlant.plantRow].length > 0 || zombie_attackContainer.numChildren > 0) {
						// let's scan through all zombies
						for (j = 0, h = 0; j < zombiesArray[currentPlant.plantRow].length > 0 || h < zombie_attackContainer.numChildren;) {
							console.log("寻找到僵尸ing");
							if (j < zombiesArray[currentPlant.plantRow].length) {
								var targetZombie_1 = zombieContainer.getChildByName(zombiesArray[currentPlant.plantRow][j]); // 行走的僵尸
								j++;
								console.log(targetZombie_1.name);
								// if the zombie is on the right of the plant
								if (targetZombie_1.x >= currentPlant.x) {
									console.log("开炮");
		
									createjs.Sound.play("plantHit");
									
									var bullet_1 = new lib.bulletMc(); // constructs a new bullet
									bulletContainer.addChild(bullet_1); // adds the bullet
									bullet_1.bulletRow = targetZombie_1.zombieRow;
									bullet_1.x = currentPlant.x + 18;
									bullet_1.y = currentPlant.y - 20;
									bullet_1.sonOf = currentPlant; // sets the bullet as a son of the current plant
									currentPlant.recharge = 0; // the plant must recharge
									//currentPlant.isFiring = true; // the plant is firing
								}
								break; // exits the j for loop
							} else if (h < zombie_attackContainer.numChildren) {
								var targetZombie_2 = zombie_attackContainer.getChildAt(h); //攻击的僵尸
								h++;
								if (targetZombie_2.x >= currentPlant.x) {
		
									createjs.Sound.play("plantHit");
		
									var bullet_2 = new lib.bulletMc(); // constructs a new bullet
									bulletContainer.addChild(bullet_2); // adds the bullet
									bullet_2.bulletRow = targetZombie_2.attackzombieRow;
									bullet_2.x = currentPlant.x + 18;
									bullet_2.y = currentPlant.y - 20;
									bullet_2.sonOf = currentPlant; // sets the bullet as a son of the current plant
									currentPlant.recharge = 0;
								} // the plant must recharge
								//currentPlant.isFiring = true; // the plant is firing
								break; // exits the j for loop
							}
						}
					}
				}
				// let's see if the plant has to recharge
				if (currentPlant.recharge < currentPlant.fireRate) {
					currentPlant.recharge++; // recharges the plant
				}
			}
		
		
			//
			// sunFlower management
			//
			for (i = 0; i < sunFlowerContainer.numChildren > 0; i++) {
				var currentSunFlower = sunFlowerContainer.getChildAt(i);
				// let's see if the plant can fire
				if (currentSunFlower.recharge == currentSunFlower.fireRate) {
					var sunFromFlower = new lib.sunMc(); // constructs the sun
					sunFromFlower.x = currentSunFlower.x;
					sunFromFlower.y = currentSunFlower.y - 30;
					sunFromFlower.destinationY = currentSunFlower.y;
					sunFromFlower.alpha = 1;
					sunFromFlower.buttonMode = true;
					sunContainer.addChild(sunFromFlower);
					sunFromFlower.addEventListener("click", sunClicked);
					currentSunFlower.recharge = 0; //重新积累能量
				}
				// let's see if the plant has to recharge
				if (currentSunFlower.recharge < currentSunFlower.fireRate) {
					currentSunFlower.recharge++; // recharges the plant
				}
			}
		
		
			//
			// bullets management
			//
			for (i = 0; i < bulletContainer.numChildren; i++) {
				var movingBullet = bulletContainer.getChildAt(i);
				movingBullet.x += 3; //moves each bullet right by 3 pixels
				var firingPlant = movingBullet.sonOf; // finds the plant which shot the bullet
				k = 0;
				// let's see if the bullet flew out of the screen
				if (movingBullet.x > 650) {
					//firingPlant.isFiring = false; // the plant is not longer firing
					bulletContainer.removeChild(movingBullet); // removes the bullet
				} else {
					//遍历子弹是否打到攻击的僵尸
					//for (k = 0; k < bulletContainer.numChildren>0; k++) {
					//var moving_Bullet: bulletMc = bulletContainer.getChildAt(k) as bulletMc; //获取要打攻击僵尸的子弹
					for (h = 0; h < zombie_attackContainer.numChildren > 0; h++) {
						var attackzombie_1 = zombie_attackContainer.getChildAt(h); //遍历所有攻击僵尸
						if (k == 1) break; //子弹打在行走僵尸上了
						if (movingBullet.bulletRow != attackzombie_1.attackzombieRow) continue; //子弹和攻击僵尸不在同一行
						//if (attackzombie_1.hitTest(movingBullet.x - 80, movingBullet.y)) 
						if ((movingBullet.x + 15) > attackzombie_1.x && movingBullet.x < (attackzombie_1.x + 10)) {
							console.log("daole");
							attackzombie_1.blood -= 0.3;
							//firingPlant.isFiring = false; // the plant is not longer firing
							// removes the bullet
							var bulletcc = new lib.bulletMcc(); //爆炸子弹出现
							bulletcContainer.addChild(bulletcc);
							bulletcc.x = movingBullet.x;
							bulletcc.y = movingBullet.y;
							var bulletcc_time = (setTimeout(function () {
								bulletcContainer.removeChild(bulletcc);
							}, 500)); //爆炸子弹显示0.5秒
							bulletContainer.removeChild(movingBullet); //去掉当前的豌豆子弹
							k = 1;
							if (attackzombie_1.blood < 0) { //攻击僵尸死了
								var moving_zombie = zombieContainer.getChildByName("zombie_" + attackzombie_1.num); //获取相同名字的被隐藏的僵尸
								zombiesArray[moving_zombie.zombieRow].splice(zombiesArray[moving_zombie.zombieRow].indexOf(moving_zombie.name), 1); // remove the zombie from the row
								var dead_3 = new lib.deadZombie_1();
								var dead_4 = new lib.deadZombie_2();
								deadZombieContainer.addChild(dead_3);
								deadZombieContainer.addChild(dead_4);
								dead_3.x = attackzombie_1.x;
								dead_3.y = attackzombie_1.y;
								dead_4.x = attackzombie_1.x;
								dead_4.y = attackzombie_1.y;
								zombieContainer.removeChild(moving_zombie);
								zombie_attackContainer.removeChild(attackzombie_1);
								var dead_2_time = (setTimeout(function () {
									deadZombieContainer.removeChild(dead_3);
									deadZombieContainer.removeChild(dead_4);
								}, 2000)); //爆炸子弹显示2秒
							}
							break;
						}
					}
					//遍历子弹是否打到行走的僵尸
					for (j = 0; j < zombiesArray[firingPlant.plantRow].length > 0; j++) {
						var movingZombie = zombieContainer.getChildByName(zombiesArray[firingPlant.plantRow][j]);
						if (k == 1) break; //子弹打在攻击僵尸上了
						if (movingBullet.bulletRow != movingZombie.zombieRow) continue; //子弹和行走僵尸不在同一行
						console.log("daole");
						// let's see if a zombie has been hit by a bullet
						//if (movingZombie.hitTest(movingBullet.x - 80, movingBullet.y))
						if ((movingBullet.x + 15) > movingZombie.x && movingBullet.x < (movingZombie.x + 10)) {
							console.log("dassole");
							movingZombie.blood -= 0.3; // decreases zombie energy (blood)
							//firingPlant.isFiring = false; // the plant is not longer firing
							// removes the bullet
							var bulletc = new lib.bulletMcc(); //爆炸子弹出现
							bulletcContainer.addChild(bulletc);
							bulletc.x = movingBullet.x;
							bulletc.y = movingBullet.y;
							var bulletc_time = (setTimeout(function () {
								bulletcContainer.removeChild(bulletc);
							}, 500)); //爆炸子弹显示0.5秒*/
							bulletContainer.removeChild(movingBullet); //去掉当前的豌豆子弹
							k = 1;
							// let's see if zombie's energy (blood) reached zero
							if (movingZombie.blood < 0) { //行走僵尸要死时
								zombiesArray[movingZombie.zombieRow].splice(zombiesArray[movingZombie.zombieRow].indexOf(movingZombie.name), 1); // remove the zombie from the row
								var dead_1 = new lib.deadZombie_1();
								var dead_2 = new lib.deadZombie_2();
								deadZombieContainer.addChild(dead_1);
								deadZombieContainer.addChild(dead_2);
								dead_1.x = movingZombie.x;
								dead_1.y = movingZombie.y;
								dead_2.x = movingZombie.x;
								dead_2.y = movingZombie.y;
								zombieContainer.removeChild(movingZombie); // 移除行走僵尸
								var dead_1_time = (setTimeout(function () {
									deadZombieContainer.removeChild(dead_1);
									deadZombieContainer.removeChild(dead_2);
								}, 2000)); //爆炸子弹显示2秒
		
							}
							break;
						}
					}
				}
			}
		
			//
			// zombies management
			//
			var plant_eaten;
			var sunflower_eaten;
			var zombieColumn; ////该僵尸所在哪一列
			for (i = 0; i < zombieContainer.numChildren; i++) {
				movingZombie = zombieContainer.getChildAt(i);
				zombieColumn = Math.floor((movingZombie.x - 25) / 65); // gets zombie column////该僵尸所在哪一列
				// let's see if there is a plant in the same tile
				if (zombieColumn < 0 || zombieColumn > 8 || plantsArray[movingZombie.zombieRow][zombieColumn] == 0) {
					movingZombie.x -= 0.5; // moves each zombie left by 1/2 pixels
				} else {
					// the zombie attacks!!
					if (plantsArray[movingZombie.zombieRow][zombieColumn] == 1) {
						var attackedPlant = plantContainer.getChildByName("plant_" + movingZombie.zombieRow + "_" + zombieColumn);
						attackedPlant.blood -= 0.01; // drains plant energy
						if (movingZombie.visible == true) {
							var attackzombie = new lib.zombie_attack(); //新建攻击僵尸
							createjs.Sound.play("zombieHit");
							setTimeout(function(){createjs.Sound.play("zombieHit");},2000);
							zombie_attackContainer.addChild(attackzombie);
							attackzombie.name = movingZombie.name; //相同名字
							attackzombie.num = movingZombie.num; //相同序号
							attackzombie.x = movingZombie.x; //相同位置
							attackzombie.y = movingZombie.y;
							attackzombie.attackzombieRow = attackedPlant.plantRow;
							attackzombie.attackzombieCol = attackedPlant.plantCol;
							attackzombie.blood = movingZombie.blood; //相同血量
							movingZombie.visible = false;
							movingZombie.display = false; //隐藏行走僵尸
						}
						// let's see if the plant died
						if (attackedPlant.blood < 0) { //植物快死了
							plantsArray[movingZombie.zombieRow][zombieColumn] = 0; //removes the plant from the array
							//movingZombie.visible = true;
							for (k = 0; k < zombiesArray[attackedPlant.plantRow].length > 0; k++) { //显示隐藏的行走僵尸
								var movingZombiefalse = zombieContainer.getChildByName(zombiesArray[attackedPlant.plantRow][k]);
								movingZombiefalse.zombieCol = Math.floor((movingZombiefalse.x - 25) / 65);
								if (movingZombiefalse.zombieCol >= 10) {
									movingZombiefalse.zombieCol = 9;
								}
								if (plantsArray[movingZombiefalse.zombieRow][movingZombiefalse.zombieCol] == 0 && movingZombiefalse.visible == false) {
									movingZombiefalse.display = true;
									movingZombiefalse.visible = true;
									var attackzombie_found = zombie_attackContainer.getChildByName("zombie_" + movingZombiefalse.num);
									movingZombiefalse.blood = attackzombie_found.blood;
									zombie_attackContainer.removeChild(attackzombie_found); //去掉正在吃的僵尸
								}
							}
							plantContainer.removeChild(attackedPlant); //removes the plant Display Object from Display List
						}
		
					} else if (plantsArray[movingZombie.zombieRow][zombieColumn] == 2) {
						var attackedPlant_2 = sunFlowerContainer.getChildByName("sunFlower_" + movingZombie.zombieRow + "_" + zombieColumn);
						attackedPlant_2.blood -= 0.01; // drains plant energy
						if (movingZombie.visible == true) {
							var attackzombie_sunflower = new lib.zombie_attack(); //新建攻击僵尸
							createjs.Sound.play("zombieHit");
							setTimeout(function(){createjs.Sound.play("zombieHit");},2000);
							zombie_attackContainer.addChild(attackzombie_sunflower);
							attackzombie_sunflower.name = movingZombie.name; //相同名字
							attackzombie_sunflower.num = movingZombie.num; //相同序号
							attackzombie_sunflower.x = movingZombie.x; //相同位置
							attackzombie_sunflower.y = movingZombie.y;
							attackzombie_sunflower.attackzombieRow = attackedPlant_2.plantRow;
							attackzombie_sunflower.attackzombieCol = attackedPlant_2.plantCol;
							attackzombie_sunflower.blood = movingZombie.blood; //相同血量
							movingZombie.visible = false;
							movingZombie.display = false; //隐藏行走僵尸
						}
						// let's see if the plant died
						if (attackedPlant_2.blood < 0) { //植物快死了
							plantsArray[movingZombie.zombieRow][zombieColumn] = 0; //removes the plant from the array
							//movingZombie.visible = true;
							for (k = 0; k < zombiesArray[attackedPlant_2.plantRow].length > 0; k++) { //显示隐藏的行走僵尸
								var movingZombiefalse_2 = zombieContainer.getChildByName(zombiesArray[attackedPlant_2.plantRow][k]);
								movingZombiefalse_2.zombieCol = Math.floor((movingZombiefalse_2.x - 25) / 65);
								if (movingZombiefalse_2.zombieCol >= 10) {
									movingZombiefalse_2.zombieCol = 9;
								}
								if (plantsArray[movingZombiefalse_2.zombieRow][movingZombiefalse_2.zombieCol] == 0 && movingZombiefalse_2.visible == false) {
									movingZombiefalse_2.display = true;
									movingZombiefalse_2.visible = true;
									var attackzombie_found_2 = zombie_attackContainer.getChildByName("zombie_" + movingZombiefalse_2.num);
									movingZombiefalse_2.blood = attackzombie_found_2.blood;
									zombie_attackContainer.removeChild(attackzombie_found_2); //去掉正在吃的僵尸
								}
							}
							sunFlowerContainer.removeChild(attackedPlant_2); //removes the plant Display Object from Display List
						}
					}
				}
			}
		
		
			//
			// suns management
			//
			for (i = 0; i < sunContainer.numChildren; i++) {
				var fallingSun = sunContainer.getChildAt(i);
				// let's see if the sun is still falling because it did not reach its destination
				if (fallingSun.y < fallingSun.destinationY) {
					fallingSun.y++; // moves the sun down by one pixel
				} else {
					fallingSun.alpha -= 0.01; // makes the sun fade away
					// let's see if the sun disappeared
					if (fallingSun.alpha < 0) {
						fallingSun.removeEventListener("click", sunClicked); // removes the CLICK listener from the sun
						sunContainer.removeChild(fallingSun); // removes the sun
					}
				}
			}
			//
			// placing plant process
			//
			if (playerMoving_sunflower) {
				movingSunFlower.x = stage.mouseX;
				movingSunFlower.y = stage.mouseY;
				var plantRow = Math.floor((stage.mouseY - 80) / 75);
				var plantCol = Math.floor((stage.mouseX - 25) / 65);
				// let's see if the plant is inside the game field
				if (plantRow >= 0 && plantCol >= 0 && plantRow < 5 && plantCol < 9) {
					selector.visible = true; // shows the selector
					selector.x = 25 + plantCol * 65;
					selector.y = 80 + plantRow * 75;
				} else {
					selector.visible = false; // hide the selector
				}
			}
			if (playerMoving) {
				movingPlant.x = stage.mouseX;
				movingPlant.y = stage.mouseY;
				var plantRow_2 = Math.floor((stage.mouseY - 80) / 75);
				var plantCol_2 = Math.floor((stage.mouseX - 25) / 65);
				// let's see if the plant is inside the game field
				if (plantRow_2 >= 0 && plantCol_2 >= 0 && plantRow_2 < 5 && plantCol_2 < 9) {
					selector.visible = true; // shows the selector
					selector.x = 25 + plantCol_2 * 65;
					selector.y = 80 + plantRow_2 * 75;
				} else {
					selector.visible = false; // hide the selector
				}
			}
			if (playerMoving_shovel) {
				movingShovel.x = stage.mouseX;
				movingShovel.y = stage.mouseY;
				var plantRow_3 = Math.floor((stage.mouseY - 80) / 75);
				var plantCol_3 = Math.floor((stage.mouseX - 25) / 65);
				// let's see if the plant is inside the game field
				if (plantRow_3 >= 0 && plantCol_3 >= 0 && plantRow_3 < 5 && plantCol_3 < 9) {
					selector.visible = true; // shows the selector
					selector.x = 25 + plantCol_3 * 65;
					selector.y = 80 + plantRow_3 * 75;
				} else {
					selector.visible = false; // hide the selector
				}
			}
		
			//设置僵尸上下级
			for (i = 4; i >= 0; i--) {
				for (j = 0; j < zombiesArray[i].length > 0; j++) {
					var movingZombie_traverse = zombieContainer.getChildByName(zombiesArray[i][j]);
					zombieContainer.setChildIndex(movingZombie_traverse, 0);
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.deadZombie_2();
	this.instance.setTransform(528.9,709.1,1,1,0,0,0,-11,-14);

	this.instance_1 = new lib.deadZombie_1();
	this.instance_1.setTransform(797.2,632.7,1,1,0,0,0,-25,-37);

	this.instance_2 = new lib.zombieMc();
	this.instance_2.setTransform(-307,332.1,1,1,0,0,0,-25,-37);

	this.instance_3 = new lib.zombie_attack();
	this.instance_3.setTransform(-321.1,101.8,1,1,0,0,0,-25,-36.5);

	this.instance_4 = new lib.bulletMcc();
	this.instance_4.setTransform(-411.9,512.2,1,1,0,0,0,0,-3);

	this.instance_5 = new lib.bulletMc();
	this.instance_5.setTransform(-438.5,427.6,1,1,0,0,0,12,0);

	this.instance_6 = new lib.SunFlowerMc();
	this.instance_6.setTransform(-407.2,642.2,1,1,0,0,0,-4,-21);

	this.instance_7 = new lib.Peashooter();
	this.instance_7.setTransform(449,529.5,1,1,0,0,0,-8,-4);

	this.instance_8 = new lib.plantMccc();
	this.instance_8.setTransform(-507.5,390,1,1,0,0,0,2.5,-3.5);

	this.instance_9 = new lib.TwinSunflower_1();
	this.instance_9.setTransform(-239.6,668.8,1,1,0,0,0,-8,-4);

	this.instance_10 = new lib.sunMc();
	this.instance_10.setTransform(-408.8,277.3,1,1,0,0,0,-1,0);

	this.instance_11 = new lib.nav();
	this.instance_11.setTransform(-57.9,608,1,1,0,0,0,131,43.5);

	this.instance_12 = new lib.Peashooter();
	this.instance_12.setTransform(123.8,578,1,1,0,0,0,-8,-4);

	this.instance_13 = new lib.selectorMc();
	this.instance_13.setTransform(264.8,614,1,1,0,0,0,32.5,37.5);

	this.instance_14 = new lib.shovel();
	this.instance_14.setTransform(388.5,617.1,1,1,0,0,0,2.5,-3);

	this.instance_15 = new lib.background1();
	this.instance_15.setTransform(-163.8,18,0.78,0.77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223,258,1471.2,784.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;