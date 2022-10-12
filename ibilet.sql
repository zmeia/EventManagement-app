-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2022 at 07:19 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ibilet`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE `actors` (
  `ID_ACTORS` int(11) NOT NULL,
  `ID_MEMEBER_TEAM` int(11) DEFAULT NULL,
  `NAME` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `actors`
--

INSERT INTO `actors` (`ID_ACTORS`, `ID_MEMEBER_TEAM`, `NAME`) VALUES
(12, 1, 'Alexandra Drumi'),
(13, 1, 'Alexandru Leancă'),
(14, 1, 'Alexandru Pleșca'),
(15, 2, 'Ana Tkacenko'),
(16, 2, 'Anatol Durbală'),
(17, 2, 'Anatol Durbală'),
(18, 3, 'Angela Ciobanu'),
(19, 3, 'Diana Decuseară'),
(20, 3, 'Diana Decuseară'),
(21, 4, 'Igor Babiac'),
(22, 4, 'Constantin Adam'),
(23, 5, 'Emil Gaju'),
(24, 5, 'Cornelia Maros-Suveică');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `ID_EVENTS` int(11) NOT NULL,
  `ID_MEMBER_TEAM` int(11) DEFAULT NULL,
  `DATA` date NOT NULL,
  `NAME` varchar(60) NOT NULL,
  `IMAGE_PATH` varchar(150) DEFAULT NULL,
  `AUTHOR` varchar(60) NOT NULL,
  `MARK` float DEFAULT NULL,
  `INFO` varchar(600) DEFAULT NULL,
  `ADRESS` varchar(60) DEFAULT NULL,
  `CONTACTS` varchar(60) DEFAULT NULL,
  `REVIEW` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`ID_EVENTS`, `ID_MEMBER_TEAM`, `DATA`, `NAME`, `IMAGE_PATH`, `AUTHOR`, `MARK`, `INFO`, `ADRESS`, `CONTACTS`, `REVIEW`) VALUES
(1, 1, '2022-04-21', 'Paiate', './Resources/LeftSlider/Paiate.png', 'Ruggero Leoncavallo', 5, 'Pagliacci premiered at the Teatro Dal Verme in Milan on 21 May 1892, conducted by Arturo Toscanini, with Adelina Stehle as Nedda, Fiorello Giraud as Canio, Victor Maurel as Tonio, and Mario Ancona as Silvio. Nellie Melba played Nedda in London in 1893, soon after the Italian premiere, and it was given in New York on 15 June 1893, with Agostino Montegriffo as Canio.', 'Buldevardul Decebal 123 ', '079213573', ' Profund impresionat'),
(2, 2, '2022-04-20', 'Hamlet', './Resources/LeftSlider/Hamlet.jpg', 'William Shakespeare', 4, 'The story of Shakespeare\'s Hamlet was derived from the legend of Amleth, preserved by 13th-century chronicler Saxo Grammaticus in his Gesta Danorum, as subsequently retold by the 16th-century scholar François de Belleforest. Shakespeare may also have drawn on an earlier Elizabethan play known today as the Ur-Hamlet, though some scholars believe Shakespeare wrote the Ur-Hamlet, later revising it to create the version of Hamlet that exists today. ', 'Teatrul \"Mihai Eminescu\"', '060124123', 'Experienta vietii mele'),
(3, 3, '2022-04-22', 'Long Day\'s Journey Into Night', './Resources/LeftSlider/LongDay.jpg', 'Eugene O\'Neill', 5, 'Long Day\'s Journey into Night[a] (Chinese: 地球最後的夜晚; pinyin: dì qiú zuì hòu de yè wǎn, literally \"Last evenings on Earth\") is a 2018 Chinese drama film directed by Bi Gan. The film was screened in the Un Certain Regard section at the 2018 Cannes Film Festival.Despite the film\'s English-language title, it is unrelated to the 1956 Eugene O\'Neill play of the same name. It is notable for its final 59 minutes, which consists of one unbroken long take in 3D.', 'Geneza Art theatre', '079553214', 'Simplu Fascinant'),
(4, 4, '2003-04-23', ' Who\'s Afraid of Virginia Woolf?', NULL, 'Edward Albee', 4.5, 'The language of theater—not in the stagecraft sense, but in ', 'Cehov Theatre', '079473251', 'O experienta de neuitat'),
(5, 5, '2022-04-24', 'Death of a Salesman', './Resources/LeftSlider/Death.jpg', 'Arthur Miller', 5, '\"Attention must be paid.\" Indeed. Not just to Willy Loman an', 'Palatul Nationla Maria Biesu', '060145363', 'MAGNIFIC!!!'),
(6, 1, '2022-05-15', 'Angels in America', 'https://bit.ly/Angels_in_America', 'Tony Kushner', 5, 'Its two parts, Millennium Approaches and Perestroika, give t', 'Teatrul \"Mihai Eminescu\"', '060145363', 'Experienta vietii mele'),
(7, 2, '2022-05-25', 'The Glass Menagerie', 'https://bit.ly/the_glass_menagerie', 'Tennessee Williams', 5, 'As with so many others on this list, Williams is a playwrigh', 'Geneza Art theatre', '060145363', 'Experienta vietii mele'),
(8, 3, '2022-02-27', 'Look Back in Anger', 'https://bit.ly/look_back_in_anger', 'John Osborne', 5, 'Wouldnt it be great to write a play that inspired a label fo', 'Cehov Theatre', '079213573', 'Simplu Fascinant'),
(9, 4, '2022-03-12', 'A Raisin in the Sun', 'https://bit.ly/Raisin_in_the_sun', 'Lorraine Hansberry', 5, 'Hansberry broke a barrier with this drama about an African-A', 'Palatul Nationla Maria Biesu', '079473251', ' Profund impresionat'),
(10, 5, '2022-03-01', 'Woyzeck', 'https://bit.ly/Woyzeckk', 'Georg Büchner', 5, 'Although this uncompleted script about a soldiers descent in', 'Buldevardul Decebal 123', '079553214', 'Simplu Fascinant');

-- --------------------------------------------------------

--
-- Table structure for table `member_team`
--

CREATE TABLE `member_team` (
  `ID_MEMBER_TEAM` int(11) NOT NULL,
  `TEAM_NAME` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_team`
--

INSERT INTO `member_team` (`ID_MEMBER_TEAM`, `TEAM_NAME`) VALUES
(1, 'Clubul Lupilor'),
(2, 'Post mortum'),
(3, 'Roots'),
(4, 'Rammstein'),
(5, 'Gardeners');

-- --------------------------------------------------------

--
-- Table structure for table `saved_events`
--

CREATE TABLE `saved_events` (
  `ID_SAVED_EVENTS` int(11) NOT NULL,
  `ID_EVENTS` int(11) DEFAULT NULL,
  `ID_USER` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saved_events`
--

INSERT INTO `saved_events` (`ID_SAVED_EVENTS`, `ID_EVENTS`, `ID_USER`) VALUES
(1, 1, 2147483647),
(2, 2, 2147483647),
(3, 3, 0),
(4, 1, 0),
(5, 2, 84),
(6, 3, 84),
(7, 1, 84),
(8, 5, 84),
(9, 9, 84),
(10, 10, 84),
(11, 7, 84),
(12, 6, 84);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `ID_USER_ROLES` int(11) NOT NULL,
  `NAME` varchar(50) DEFAULT NULL,
  `SURNAME` varchar(50) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `PASSWORD` varchar(50) DEFAULT NULL,
  `PHONE` varchar(60) DEFAULT NULL,
  `PROFILE_PHOTO` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID_USER`, `ID_USER_ROLES`, `NAME`, `SURNAME`, `EMAIL`, `PASSWORD`, `PHONE`, `PROFILE_PHOTO`) VALUES
(0, 1, 'Iulian', 'Antoci', 'iulianantoci7@gmail.com', '202cb962ac59075b964b07152d234b70', '079213573', ''),
(2, 1, '123', '123', '123@123', '202cb962ac59075b964b07152d234b70', '1234567890', ''),
(4, 1, 'Bajora', 'Vasile', 'BAJORA@KEKC.KEKC', '25f9e794323b453885f5181f1b624d0b', '060593759', ''),
(8, 1, 'Iulian', 'Antoci', 'iuliananto@gmail.com', '25d55ad283aa400af464c76d713c07ad', '079213573', ''),
(84, 1, 'Vasile', 'Teptka', 'Bajroa@kekc.kekc', '25f9e794323b453885f5181f1b624d0b', '0605937590', ''),
(26018, 1, '213123123', 'Elon', 'birsan.alina1515@gmail.com', '9de4a97425678c5b1288aa70c1669a64', '1234567890', ''),
(2147483647, 1, 'Dragos', 'Erhan', 'erh@mail.ru', '202cb962ac59075b964b07152d234b70', '1234125125', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `ID_USER_ROLES` int(11) NOT NULL,
  `NAME` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`ID_USER_ROLES`, `NAME`) VALUES
(1, 'user'),
(2, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`ID_ACTORS`),
  ADD KEY `IM_MEMBER_TEAM` (`ID_MEMEBER_TEAM`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`ID_EVENTS`),
  ADD KEY `Id_MEMBER_TEAM` (`ID_MEMBER_TEAM`);

--
-- Indexes for table `member_team`
--
ALTER TABLE `member_team`
  ADD PRIMARY KEY (`ID_MEMBER_TEAM`);

--
-- Indexes for table `saved_events`
--
ALTER TABLE `saved_events`
  ADD PRIMARY KEY (`ID_SAVED_EVENTS`),
  ADD KEY `ID_EVENTS` (`ID_EVENTS`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`),
  ADD KEY `ID_USER_ROLES` (`ID_USER_ROLES`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`ID_USER_ROLES`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `ID_ACTORS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `ID_EVENTS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `member_team`
--
ALTER TABLE `member_team`
  MODIFY `ID_MEMBER_TEAM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `saved_events`
--
ALTER TABLE `saved_events`
  MODIFY `ID_SAVED_EVENTS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `ID_USER_ROLES` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actors`
--
ALTER TABLE `actors`
  ADD CONSTRAINT `IM_MEMBER_TEAM` FOREIGN KEY (`ID_MEMEBER_TEAM`) REFERENCES `member_team` (`ID_MEMBER_TEAM`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `Id_MEMBER_TEAM` FOREIGN KEY (`ID_MEMBER_TEAM`) REFERENCES `member_team` (`ID_MEMBER_TEAM`);

--
-- Constraints for table `saved_events`
--
ALTER TABLE `saved_events`
  ADD CONSTRAINT `ID_EVENTS` FOREIGN KEY (`ID_EVENTS`) REFERENCES `events` (`ID_EVENTS`),
  ADD CONSTRAINT `ID_USER` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`ID_USER_ROLES`) REFERENCES `user_roles` (`ID_USER_ROLES`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
