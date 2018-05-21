/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : zolmall

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-21 12:41:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` tinyint(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('5', 'zhangsan', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `admin` VALUES ('6', 'yuliang', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `admin` VALUES ('7', 'lisi', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `admin` VALUES ('8', 'haha', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `admin` VALUES ('9', 'xinxin', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `admin` VALUES ('10', 'heheda', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `admin` VALUES ('11', 'memeda', '96e79218965eb72c92a549dd5a330112');

-- ----------------------------
-- Table structure for `bannerimg`
-- ----------------------------
DROP TABLE IF EXISTS `bannerimg`;
CREATE TABLE `bannerimg` (
  `id` tinyint(255) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bannerimg
-- ----------------------------
INSERT INTO `bannerimg` VALUES ('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001', 'https://mercrt-fd.zol-img.com.cn/g5/M00/0A/02/ChMkJlrMWtaIedlDAAF_YCs7NYgAAnjIwJFXGgAAX94721.jpg');
INSERT INTO `bannerimg` VALUES ('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002', 'https://mercrt-fd.zol-img.com.cn/g5/M00/03/0C/ChMkJlrxCxeICdF1AAIP3kkPOFcAAoJhgLLJ_QAAg_2532.jpg');
INSERT INTO `bannerimg` VALUES ('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003', 'https://mercrt-fd.zol-img.com.cn/g5/M00/0E/0E/ChMkJ1rezyaIXYnoAAG0wP2n83YAAn2DAPWsR8AAbTY070.jpg');

-- ----------------------------
-- Table structure for `hotsell`
-- ----------------------------
DROP TABLE IF EXISTS `hotsell`;
CREATE TABLE `hotsell` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `url` text,
  `tittle` text CHARACTER SET utf8,
  `price` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of hotsell
-- ----------------------------
INSERT INTO `hotsell` VALUES ('1', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/02/00/ChMkJlqXrniIJE3HAAIu3uUyQ3QAAlCzQIXdYUAAi72519.jpg', '【现货包邮送礼包】魅蓝 Note6 3+32G运行 全网通 移动联通电信4G', '¥745.00');
INSERT INTO `hotsell` VALUES ('2', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/07/07/ChMkJlr5W8WII_5wAAFOQjpu0h8AAoYagDtaa8AAU5a718.jpg', '【顺丰包邮 送壳膜】荣耀 V10全网通  6GB+64/128GB 移动联通电信4G', '¥2439.00');
INSERT INTO `hotsell` VALUES ('3', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/06/00/ChMkJlnkU9yIUJJXAAWXafd-NugAAhSywProYsABZeB678.png', '【顺丰包邮】惠普 PAVILION 15-CK025TX（2UY74PA）15.6英寸电脑', '¥5939.00');
INSERT INTO `hotsell` VALUES ('4', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g2/M00/04/0A/Cg-4WlUnvriIEZv8AACwDxUGnVUAABSrQFzPqAAALAn301.jpg', '索尼（SONY） FDR-AX30 4K数码摄像机  索尼 FDR-AX30 索尼AX30摄像机', '¥4488.00');
INSERT INTO `hotsell` VALUES ('5', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/07/0B/ChMkJ1r6S0SIC-bxAAEROpDRyvEAAoZQQK7GtgAARFS994.jpg', '【顺丰包邮 送壳膜】荣耀 畅玩7X（4GB 全网通）移动联通电信4G', '¥1185.00');
INSERT INTO `hotsell` VALUES ('6', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/09/01/ChMkJ1m7ZQ2IVjnZAAcUhS9nnbAAAgfYQBk3D4ABxSd383.png', '【顺丰包邮】联想 Ideapad 320S-15（4GB/1TB）15.6英寸轻薄便携电脑', '¥3666.00');
INSERT INTO `hotsell` VALUES ('7', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/01/0C/ChMkJlqmREOIbsITAAHhKj1BPl8AAmBoQP9pWAAAeFC089.jpg', '【亲！包邮送壳膜】(MI)小米 5X  全网通 4+32/64G  pk 荣耀 魅族', '¥1058.00');
INSERT INTO `hotsell` VALUES ('11', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/07/06/ChMkJlr5MWOISZ-hAAFOeQawiEUAAoYEAJfQz4AAU6R962.jpg', '【现货包邮 送壳膜】魅族 魅蓝 Note6 4GB/32/64GB全网通4G', '¥938.00');
INSERT INTO `hotsell` VALUES ('12', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/0E/00/ChMkJ1gtaq6IOTQeAAEaUlFPS4sAAX05QEnd5MAARpq201.jpg', 'GoPro HERO 5 Black 运动摄像机 4K高清', '¥2299.00');
INSERT INTO `hotsell` VALUES ('13', 'https://mercrt-fd.zol-img.com.cn/t_s220x220/g5/M00/07/07/ChMkJ1r5Sw2IOmwmAAF8u9vhVnkAAoYVQDXipEAAXzT611.jpg', '【顺丰包邮 送壳膜】华为 Mate 10 6GB+128GB 移动联通电信4G手机', '¥3615.00');

-- ----------------------------
-- Table structure for `tabimg`
-- ----------------------------
DROP TABLE IF EXISTS `tabimg`;
CREATE TABLE `tabimg` (
  `id` tinyint(255) NOT NULL AUTO_INCREMENT,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tabimg
-- ----------------------------
INSERT INTO `tabimg` VALUES ('1', 'https://mercrt-fd.zol-img.com.cn/g5/M00/0D/09/ChMkJlpMdMyIfHtbAABWawSoLJMAAjw8QMgNecAAFaD819.jpg');
INSERT INTO `tabimg` VALUES ('2', 'https://mercrt-fd.zol-img.com.cn/g5/M00/0A/02/ChMkJloeTkaIIDItAABeK9Yb760AAijcQKv4i0AAF5D170.jpg');
INSERT INTO `tabimg` VALUES ('3', 'https://mercrt-fd.zol-img.com.cn/g5/M00/07/0F/ChMkJlm3W1KIdOv9AABDXvifjHoAAgavQLHXQQAAEN2205.jpg');
INSERT INTO `tabimg` VALUES ('4', 'https://mercrt-fd.zol-img.com.cn/g5/M00/0D/0A/ChMkJlpMoUSIAlhCAABgJlgihNsAAjxPgPcXh0AAGA-501.jpg');
INSERT INTO `tabimg` VALUES ('5', 'https://mercrt-fd.zol-img.com.cn/g5/M00/0A/03/ChMkJ1oeVBmIae78AABGTAY30fYAAijewBxlyoAAEZk116.jpg');
