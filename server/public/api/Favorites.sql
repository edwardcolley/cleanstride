-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 30, 2019 at 07:23 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c519cleanstride`
--

-- --------------------------------------------------------

--
-- Table structure for table `Favorites`
--

CREATE TABLE `Favorites` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `program` enum('AA','Al-Anon','NA','OA') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `program_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Favorites`
--

INSERT INTO `Favorites` (`id`, `program`, `program_id`) VALUES
(55, 'AA', 4),
(56, 'AA', 3),
(57, 'AA', 3),
(58, 'AA', 6),
(59, 'AA', 1),
(60, 'AA', 1),
(61, 'AA', 3),
(62, 'AA', 3),
(63, 'AA', 3),
(64, 'AA', 1),
(65, 'AA', 1),
(66, 'AA', 1),
(67, 'AA', 1),
(68, 'AA', 1),
(69, 'AA', 1),
(70, 'AA', 1),
(71, 'AA', 1),
(72, 'AA', 3),
(73, 'AA', 4),
(74, 'AA', 56),
(75, 'AA', 57),
(76, 'AA', 58),
(77, 'AA', 58),
(78, 'AA', 58),
(79, 'AA', 58),
(80, 'AA', 3),
(81, 'AA', 3),
(82, 'AA', 3),
(83, 'AA', 3),
(84, 'AA', 4),
(85, 'AA', 5),
(86, 'AA', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Favorites`
--
ALTER TABLE `Favorites`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Favorites`
--
ALTER TABLE `Favorites`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
