/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 24/09/2024 19:53:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`CATEGORY_ID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Education');
INSERT INTO `category` VALUES (2, 'Health');
INSERT INTO `category` VALUES (3, 'Community Development');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CAPTION` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `TARGET_FUNDING` decimal(10, 2) DEFAULT NULL,
  `CURRENT_FUNDING` decimal(10, 2) DEFAULT NULL,
  `CITY` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ACTIVE` tinyint(1) DEFAULT NULL,
  `CATEGORY_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`) USING BTREE,
  INDEX `CATEGORY_ID`(`CATEGORY_ID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Alice Smith', 'Support Local Schools', 5000.00, 1500.00, 'New York', 1, 1);
INSERT INTO `fundraiser` VALUES (2, 'Bob Johnson', 'Health for All', 10000.00, 5000.00, 'Los Angeles', 1, 2);
INSERT INTO `fundraiser` VALUES (3, 'Carol Lee', 'Clean Water Initiative', 8000.00, 3000.00, 'Chicago', 1, 3);
INSERT INTO `fundraiser` VALUES (4, 'David Kim', 'Community Garden Project', 2000.00, 1000.00, 'Houston', 1, 3);
INSERT INTO `fundraiser` VALUES (5, 'Emma Brown', 'Youth Mentorship Program', 6000.00, 2000.00, 'Miami', 1, 1);

SET FOREIGN_KEY_CHECKS = 1;
