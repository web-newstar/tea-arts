-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-14 13:37:20
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tea`
--

-- --------------------------------------------------------

--
-- 表的结构 `about`
--

CREATE TABLE IF NOT EXISTS `about` (
  `about_id` int(12) NOT NULL AUTO_INCREMENT,
  `about_china` varchar(255) NOT NULL,
  `about_english` varchar(255) NOT NULL,
  `about_url` varchar(255) NOT NULL,
  PRIMARY KEY (`about_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `about`
--

INSERT INTO `about` (`about_id`, `about_china`, `about_english`, `about_url`) VALUES
(1, '企业简介', 'COMPANY PROFILE', 't_bg01.png'),
(2, '行业新闻', 'ACADEMY STYLE', 't_bg01.png'),
(3, '合作加盟', 'COOPERATIVE', 't_bg01.png'),
(4, '企业招聘', 'RECRUITMENT', 't_bg01.png');

-- --------------------------------------------------------

--
-- 表的结构 `about_con`
--

CREATE TABLE IF NOT EXISTS `about_con` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name_china` varchar(255) NOT NULL,
  `name_english` varchar(255) NOT NULL,
  `abstractchina` longtext NOT NULL,
  `abstractenglish` longtext NOT NULL,
  `time` varchar(255) NOT NULL,
  `browse` varchar(255) NOT NULL,
  `showchina` varchar(255) NOT NULL,
  `showenglish` varchar(255) NOT NULL,
  `about_id` int(12) NOT NULL,
  `about_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `about_id` (`about_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `about_con`
--

INSERT INTO `about_con` (`id`, `name_china`, `name_english`, `abstractchina`, `abstractenglish`, `time`, `browse`, `showchina`, `showenglish`, `about_id`, `about_url`) VALUES
(1, '企业简介', 'Company profile', '当传统脱下古装，当文化穿越回最初。一场千年而就的邂逅，见证还是参与？ 这是一个问题......', 'When the traditional take off the costume, when the culture back to the original. A thousand years of encounter, witness or participate?This is a question.', '2016-3-3 08:00', '22222', '', '', 1, '1.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `admin_user`
--

CREATE TABLE IF NOT EXISTS `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `admin_user`
--

INSERT INTO `admin_user` (`id`, `account`, `password`, `hash`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '88468d8478342c7b664e011062129a10');

-- --------------------------------------------------------

--
-- 表的结构 `apply`
--

CREATE TABLE IF NOT EXISTS `apply` (
  `apply_id` int(12) NOT NULL AUTO_INCREMENT,
  `apply_class` varchar(255) NOT NULL,
  `wechat` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`apply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `ban_id` int(11) NOT NULL AUTO_INCREMENT,
  `ban_img` varchar(255) NOT NULL,
  PRIMARY KEY (`ban_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`ban_id`, `ban_img`) VALUES
(1, 'lt_1.png'),
(2, 'lt_2.png'),
(3, 'lt_3.png');

-- --------------------------------------------------------

--
-- 表的结构 `class`
--

CREATE TABLE IF NOT EXISTS `class` (
  `class_id` int(12) NOT NULL AUTO_INCREMENT,
  `class_china` varchar(255) NOT NULL,
  `classenglish` varchar(255) NOT NULL,
  `abstract` longtext NOT NULL,
  `abstractenglish` longtext NOT NULL,
  `time` varchar(255) NOT NULL,
  `browse` int(12) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `cat_id` int(12) NOT NULL,
  `china_details` longtext NOT NULL,
  `english_details` longtext NOT NULL,
  PRIMARY KEY (`class_id`),
  KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `class`
--

INSERT INTO `class` (`class_id`, `class_china`, `classenglish`, `abstract`, `abstractenglish`, `time`, `browse`, `thumbnail`, `cat_id`, `china_details`, `english_details`) VALUES
(1, '茶艺讲座', 'Flower arranging', '在我国插花的历史源远流长，发展至今已为人们日常生活所不可缺少。一件成功的插花作品，并不是一定要选用名贵的花材、高价的花器。\r\n', 'n our country has a long history of flower arrangement, development has been indispensable to Peopl e''s Daily life. A successful flower arrangement, not must choose .', '2016-3-3', 1222, '1,jpg', 1, '一件成功的插花作品\r\n\r\n在我国插花的历史源远流长，发展至今已为人们日常生活所不可缺少。一件成功的插花作品，并不是一定要选用名贵的花材、高价的花器。一般看来并不起眼的绿叶一个花蕾，甚至路边的野花野草常见的水果、蔬菜，都能插出一件令人赏心悦目的优秀作品来。使观赏者在心灵上产生共鸣的是创作者唯一的目的，如果不能产生共鸣，那么这件作品也就失击了观赏价值。\r\n', 'In our country has a long history of flower arrangement, development has been indispensable to People''s Daily life. A successful flower arrangement, not must choose expensive flowers of flowers, a high price. General opinion and a small green bud, wild weed even common fruits, vegetables, can put out a pleasing to the outstanding works. Make viewer resonate on the mind is the sole purpose of creators, if can''t resonate, so this work will lose the ornamental value');

-- --------------------------------------------------------

--
-- 表的结构 `class_cat`
--

CREATE TABLE IF NOT EXISTS `class_cat` (
  `cat_id` int(12) NOT NULL AUTO_INCREMENT,
  `cat_china` varchar(255) NOT NULL,
  `cat_english` varchar(255) NOT NULL,
  `cat_url` varchar(255) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `class_cat`
--

INSERT INTO `class_cat` (`cat_id`, `cat_china`, `cat_english`, `cat_url`) VALUES
(1, '插画', 'FLOWERTR AINING', '1.png'),
(2, '茶艺', 'ART TRAINING', '1.png'),
(3, '香道', 'INCENSE LORE', '1.png'),
(4, '古琴', 'CHINESE ZITHER', '1.png');

-- --------------------------------------------------------

--
-- 表的结构 `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `contact_id` int(12) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `localtion` varchar(255) NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `new_id` int(12) NOT NULL AUTO_INCREMENT,
  `new_china` varchar(255) NOT NULL,
  `news_english` varchar(255) NOT NULL,
  `abstract` longtext NOT NULL,
  `abstractenglish` longtext NOT NULL,
  `time` varchar(255) NOT NULL,
  `browse` int(12) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `cat_id` int(12) NOT NULL,
  `china_details` longtext NOT NULL,
  `english_details` longtext NOT NULL,
  PRIMARY KEY (`new_id`),
  KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`new_id`, `new_china`, `news_english`, `abstract`, `abstractenglish`, `time`, `browse`, `thumbnail`, `cat_id`, `china_details`, `english_details`) VALUES
(1, '茗悦动态', 'mingyue news', '\r\n近日，横岗街道怡锦社区党群服务中心举行了一场社区民生大盆菜之”礼赞父母·孝亲奉茶”活动，15岁萌童身着汉服，手把茶具，跟着茶艺师演绎……\r\n', 'Recently, Henggang Jin Yi Street community party service center held a celebration of "community''s livelihood Poon Choi - filial parents tea" activities, 15 year old adorable boy dressed in Chinese clothes, hand tea, tea with ', '2016-8-14 08:00', 12222, '1.jpg', 1, '近日，横岗街道怡锦社区党群服务中心举行了一场社区民生大盆菜之”礼赞父母·孝亲奉茶”活动，15岁萌童身着汉服，手把茶具，跟着茶艺师演绎j具有中华特色的传统华夏茶礼。这是”小小状元郎“国学书院中的一个项目。课堂上，茶艺老师给大家示范了汉式茶道。从诵读《孝经》，到泡茶、敬茶，小朋友对传统茶礼都学得特别认真，在茶艺师的指导下，孩子们将一杯杯香茗敬给父母，表达着对长辈的感恩之情。活动将传统文化融入生活之中，让孩子们在学茶礼的过程中，学会尊敬长辈、感恩父母。 ', 'Recently, Henggang Jin Yi Street community party service center held a celebration of "community''s livelihood Poon Choi - filial parents tea" activities, 15 year old adorable boy dressed in Chinese clothes, hand tea, tea with J has characteristic of Chinese traditional interpretation of Chinese tea ceremony. This is one of the little champion Lang Sinology Academy in the project. The classroom, the teacher of the Chinese tea ceremony tea demonstration to everyone. From the reading of "filial piety", to make tea, tea, tea ceremony of the traditional children learn very seriously, in the tea under the guidance of teachers, the children will be a cup of tea to their parents, expressing gratitude to the elders. Activities will be integrated into the traditional culture of life, so that children in the process of learning tea ceremony, learn to respect their elders, Thanksgiving parents.');

-- --------------------------------------------------------

--
-- 表的结构 `new_cat`
--

CREATE TABLE IF NOT EXISTS `new_cat` (
  `cat_id` int(12) NOT NULL AUTO_INCREMENT,
  `cat_china` varchar(255) NOT NULL,
  `cat_english` varchar(255) NOT NULL,
  `cat_url` varchar(255) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `new_cat`
--

INSERT INTO `new_cat` (`cat_id`, `cat_china`, `cat_english`, `cat_url`) VALUES
(1, '行业动态', 'COOPERATIVE', '1.png');

-- --------------------------------------------------------

--
-- 表的结构 `school`
--

CREATE TABLE IF NOT EXISTS `school` (
  `cat_id` int(12) NOT NULL AUTO_INCREMENT,
  `cat_china` varchar(255) NOT NULL,
  `cat_english` varchar(255) NOT NULL,
  `cat_url` varchar(255) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `school`
--

INSERT INTO `school` (`cat_id`, `cat_china`, `cat_english`, `cat_url`) VALUES
(1, 'frhr', 'hthth', '1.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `schools`
--

CREATE TABLE IF NOT EXISTS `schools` (
  `school_id` int(12) NOT NULL AUTO_INCREMENT,
  `school_china` varchar(255) NOT NULL,
  `school_english` varchar(255) NOT NULL,
  `abstract` longtext NOT NULL,
  `abstractenglish` longtext NOT NULL,
  `time` varchar(255) NOT NULL,
  `browse` int(12) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `cat_id` int(12) NOT NULL,
  `china_details` longtext NOT NULL,
  `english_details` longtext NOT NULL,
  PRIMARY KEY (`school_id`),
  KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `schools`
--

INSERT INTO `schools` (`school_id`, `school_china`, `school_english`, `abstract`, `abstractenglish`, `time`, `browse`, `thumbnail`, `cat_id`, `china_details`, `english_details`) VALUES
(1, '茶叶知识', 'THE TEAKNOWLEDGE', '1111', 'gregregrgreg', '1111', 5555, '1.jpg', 1, '近日，横岗街道怡锦社区党群服务中心举行了一场社区民生大盆菜之“礼赞父母·孝亲奉茶”活动，15名萌童身着汉服，手把茶具，跟着茶艺师演绎具有中华特色的传统华夏茶礼。这是“小小状元郎”国学书院中的一个项目。课堂上，茶艺老师给大家示范了汉式...', 'Yi jin recently, the horizontal bar street community service center held a community between the party and the masses of the people''s livelihood big ready-to-cook "praise parents XiaoQin serve tea" activities, 15 of children''s wear hanfu, hand the tea set, followed the tea room with characteristic of Chinese traditional Chinese tea ceremony. This is one of the "little took traditional Chinese academy" project. Class, tea art teacher to demonstrate the han type...');

-- --------------------------------------------------------

--
-- 表的结构 `shows`
--

CREATE TABLE IF NOT EXISTS `shows` (
  `show_id` int(12) NOT NULL AUTO_INCREMENT,
  `show_src` varchar(255) NOT NULL,
  PRIMARY KEY (`show_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `shows`
--

INSERT INTO `shows` (`show_id`, `show_src`) VALUES
(1, '../www/public/video');

-- --------------------------------------------------------

--
-- 表的结构 `usermess`
--

CREATE TABLE IF NOT EXISTS `usermess` (
  `mess_id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`mess_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 限制导出的表
--

--
-- 限制表 `about_con`
--
ALTER TABLE `about_con`
  ADD CONSTRAINT `about_con_ibfk_1` FOREIGN KEY (`about_id`) REFERENCES `about` (`about_id`);

--
-- 限制表 `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `class_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `class_cat` (`cat_id`);

--
-- 限制表 `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `new_cat` (`cat_id`);

--
-- 限制表 `schools`
--
ALTER TABLE `schools`
  ADD CONSTRAINT `schools_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `school` (`cat_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
