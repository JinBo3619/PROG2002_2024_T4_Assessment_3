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
-- Table structure for donation
-- ----------------------------
DROP TABLE IF EXISTS `donation`;
CREATE TABLE `donation`  (
  `DONATION_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DATE` DATE NOT NULL,
  `AMOUNT` decimal(10, 2) DEFAULT NULL,
  `GIVER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `FUNDRAISER_ID` int(11) DEFAULT NULL,
  INDEX `DONATION_ID`(`DONATION_ID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of donation
-- ----------------------------
INSERT INTO `donation` VALUES (6, '2024-10-18', 100.00, 'user1', 1);
INSERT INTO `donation` VALUES (7, '2024-10-19', 65.00, 'user2', 2);
INSERT INTO `donation` VALUES (8, '2024-10-02', 120.00, 'user3', 3);
INSERT INTO `donation` VALUES (9, '2024-10-05', 765.00, 'user4', 4);
INSERT INTO `donation` VALUES (10, '2024-10-01', 200.00, 'user5', 5);
INSERT INTO `donation` VALUES (11, '2024-08-09', 6.00, 'user6', 6);
INSERT INTO `donation` VALUES (12, '2024-08-23', 12.00, 'user7', 7);
INSERT INTO `donation` VALUES (13, '2024-02-09', 44.00, 'user8', 8);
INSERT INTO `donation` VALUES (14, '2024-05-11', 84.00, 'user9', 9);
INSERT INTO `donation` VALUES (15, '2024-02-10', 30.00, 'user10', 10);

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Alice Smith', 'Support Local Schools', 5000.00, 1500.00, 'New York', 1, 1);
INSERT INTO `fundraiser` VALUES (2, 'Bob Johnson', 'Health for All', 10000.00, 5000.00, 'Los Angeles', 1, 2);
INSERT INTO `fundraiser` VALUES (3, 'Carol Lee', 'Clean Water Initiative', 8000.00, 3000.00, 'Chicago', 1, 3);
INSERT INTO `fundraiser` VALUES (4, 'David Kim', 'Community Garden Project', 2000.00, 1000.00, 'Houston', 1, 3);
INSERT INTO `fundraiser` VALUES (5, 'Emma Brown', 'Youth Mentorship Program', 6000.00, 2000.00, 'Miami', 1, 1);
INSERT INTO `fundraiser` VALUES (6, 'Frank Davis', 'Animal Shelter Expansion', 7000.00, 2500.00, 'San Francisco', 1, 2);
INSERT INTO `fundraiser` VALUES (7, 'Grace Wilson', 'Senior Care Support', 12000.00, 4000.00, 'Seattle', 1, 2);
INSERT INTO `fundraiser` VALUES (8, 'Henry White', 'Tech for Kids', 9000.00, 3500.00, 'Austin', 1, 1);
INSERT INTO `fundraiser` VALUES (9, 'Isabella Green', 'Food Bank Initiative', 4000.00, 1500.00, 'Denver', 1, 3);
INSERT INTO `fundraiser` VALUES (10, 'Jack Thompson', 'Wildlife Preservation Fund', 15000.00, 7500.00, 'Phoenix', 1, 3);

SET FOREIGN_KEY_CHECKS = 1;
