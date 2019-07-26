-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2019 at 10:34 PM
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
-- Table structure for table `aa_meetings`
--

CREATE TABLE `aa_meetings` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `day` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `zip` mediumint(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aa_meetings`
--

INSERT INTO `aa_meetings` (`id`, `day`, `city`, `time`, `type`, `name`, `address`, `zip`) VALUES
(1, 'SUNDAY	', 'LAGUNA HILLS	', '5:00 PM   	', '(O,TA)	', '11TH STEP MEDITATION MEETING	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church-Sanctuary)	', 92653),
(2, 'SUNDAY', 'LAGUNA HILLS	', '7:30 PM ', '(O,SP)	', 'LEGACIES GROUP	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(3, 'MONDAY	', 'LAGUNA HILLS	', '7:30 AM   	', '(O)	', 'SOBRIETY - 12 X 12 STEP STUDY	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(4, 'MONDAY	', 'LAGUNA HILLS	', '6:00 PM   	', '(C,W)	', 'WOMEN\'S DISCUSSION	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(5, 'MONDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(O)	', 'FISH BOWL OPEN DISCUSSION	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(6, 'MONDAY	', 'LAGUNA HILLS	', '9:00 PM   	', '(O)	', 'DIRTY FISH BOWL DISCUSSION	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(7, 'TUESDAY	', 'LAGUNA HILLS	', '7:30 AM   	', '(O)	', 'SOBRIETY - ROUND TABLE TOPIC DISCUSSION	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(8, 'TUESDAY	', 'LAGUNA HILLS	', '7:00 PM   	', '(C,M)	', 'TUESDAY NIGHT MEN\'S STAG	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church-Hammond Hall)	', 92653),
(9, 'TUESDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(O,BG)	', 'FISH BOWL NEWCOMERS	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(10, 'TUESDAY	', 'LAGUNA HILLS	', '9:00 PM   	', '(O)	', 'DIRTY FISH BOWL DISCUSSION	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(11, 'WEDNESDAY	', 'LAGUNA HILLS	', '7:30 AM   	', '(O)	', 'SOBRIETY - BIG BOOK STUDY	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(12, 'WEDNESDAY	', 'LAGUNA HILLS	', '7:00 PM   	', '(O)	', 'GET HAPPY 12 & 12 STUDY GROUP	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(13, 'WEDNESDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(C,M)	', 'DROP THE ROCK CLOSED MEN\'S BOOK STUDY	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church, Room 204)	', 92653),
(14, 'WEDNESDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(O)	', 'FISH BOWL GET HONEST	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(15, 'WEDNESDAY	', 'LAGUNA HILLS	', '9:00 PM   	', '(O)	', 'DIRTY FISH BOWL DISCUSSION	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(16, 'THURSDAY	', 'LAGUNA HILLS	', '7:30 AM   	', '(O)	', 'SOBRIETY - DAILY REFLECTIONS	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(17, 'THURSDAY	', 'LAGUNA HILLS	', '7:00 PM   	', '(O,M)	', 'STOPPED IN TIME	', '23802 Ave. de la Carlota @ Ave. Valencia (Hammond Hall)	', 92653),
(18, 'THURSDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(O)	', 'FISH BOWL 12 X 12	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(19, 'THURSDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(C)	', 'CENTRAL FACT BIG BOOK STUDY GROUP	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(20, 'THURSDAY	', 'LAGUNA HILLS	', '7:30 PM   	', '(C,W)	', 'SOBER LADIES CANDLELIGHT DISCUSSION	', '23181 Verdugo Dr., Suite 103B @ Lake Forest & Moulton (Unity Church - Sanctuary)	', 92653),
(21, 'THURSDAY	', 'LAGUNA HILLS	', '9:00 PM   	', '(O)	', 'DIRTY FISH BOWL DISCUSSION	', '23541-B Calle de la Louisa (Upstairs inside gym, same bldg. as Nordstrom Rack)	', 92653),
(22, 'FRIDAY	', 'LAGUNA HILLS	', '7:30 AM   	', '(O,W)	', 'SOBRIETY - WOMEN\'S DAILY REFLECTIONS	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(23, 'FRIDAY	', 'LAGUNA HILLS	', '7:30 AM   	', '(C,M)	', 'SOBRIETY - MEN\'S STAG	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(24, 'FRIDAY	', 'LAGUNA HILLS	', '6:30 PM   	', '(O,TA)	', 'FRIDAY EVENING MEDITATION MEETING	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(25, 'SATURDAY	', 'LAGUNA HILLS	', '7:00 AM   	', '(O)	', 'WARMER-UPPER	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(26, 'SATURDAY	', 'LAGUNA HILLS	', '11:00 AM   	', '(O)	', 'ACCEPTANCE GROUP	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(27, 'SATURDAY', 'LAGUNA HILLS	', '12:15 PM   	', '(O)	', 'LIVING SOBER	', '23802 Avenida de la Carlota @ Valencia (St. George\'s Church)	', 92653),
(28, 'SATURDAY	', 'LAGUNA HILLS	', '5:00 PM   	', '(O)	', 'FISHBOWL OPEN DISCUSSION	', '23541 B Calle Louisa (Upstairs inside gym)	', 92653),
(29, 'WEDNESDAY	', 'LAKE FOREST	', '7:30 PM   	', '(C)	', 'BACK TO BASICS	', '23262 El Toro Rd (Lutheran Church)	', 92630),
(30, 'WEDNESDAY	', 'LAKE FOREST	', '7:30 PM   	', '(O,W)	', 'WOMEN\'S POTP	', '24016 Elrond Ln. (House)	', 92630),
(31, 'THURSDAY	', 'LAKE FOREST	', '7:30 PM   	', '(C)	', 'MUSTARD SEED STEP STUDY	', '23262 El Toro Rd (Lutheran Church)	', 92630),
(32, 'THURSDAY	', 'RANCHO SANTA MARGARITA	', '6:30 PM   	', '(O)	', 'R.S.M. WANDERING GROUP	', 'Meets 3rd Thursday each month	', 0),
(33, 'SUNDAY	', 'RANCHO SANTA MARGARITA	', '7:00 PM   	', '(C)	', 'OLD TIME A.A. 12 & 12 STUDY	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(34, 'MONDAY	', 'RANCHO SANTA MARGARITA	', '6:30 AM   	', '(O)	', 'ATTITUDE AND GRATITUDE	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(35, 'MONDAY	', 'RANCHO SANTA MARGARITA	', '7:00 PM   	', '(C,W)	', 'WOMEN\'S STAYING SOBER	', '30322 Via Con Dios @ Santa Margarita Pkwy (Lutheran Church)	', 92688),
(36, 'MONDAY	', 'RANCHO SANTA MARGARITA	', '7:30 PM   	', '(O,M)	', 'CHARTER MENS STAG	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(37, 'TUESDAY	', 'RANCHO SANTA MARGARITA	', '6:30 AM   	', '(O)	', 'ATTITUDE AND GRATITUDE	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(38, 'TUESDAY	', 'RANCHO SANTA MARGARITA	', '7:30 PM   	', '(C)	', 'OLD TIME AA BIG BOOK STUDY	', '30322 Via Con Dios @ Santa Margarita Pkwy (Lutheran Church)	', 92688),
(39, 'WEDNESDAY	', 'RANCHO SANTA MARGARITA	', '6:30 AM   	', '(O)	', 'ATTITUDE AND GRATITUDE	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(40, 'THURSDAY	', 'RANCHO SANTA MARGARITA	', '6:30 AM   	', '(O)	', 'ATTITUDE AND GRATITUDE	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(41, 'THURSDAY	', 'RANCHO SANTA MARGARITA	', '6:30 PM   	', '(C,W)	', '\"IT\'S ALL ABOUT THAT BOOK\" BIG BOOK STUDY	', 'Private residence, call 949-584-2446	', 0),
(42, 'THURSDAY	', 'RANCHO SANTA MARGARITA	', '7:30 PM   	', '(O)	', '11TH STEP SPIRITUAL DISCUSSION	', '30322 Via Con Dios @ Santa Margarita Pkwy (Lutheran Church)	', 92688),
(43, 'FRIDAY	', 'RANCHO SANTA MARGARITA	', '6:30 AM   	', '(O)	', 'ATTITUDE AND GRATITUDE	', '30605 Avenida de las Flores @ Banderas (Methodist Church)	', 92688),
(44, 'FRIDAY	', 'RANCHO SANTA MARGARITA	', '7:30 PM   	', '(O)	', 'ROADS END PARTICIPATION	', '30322 Via Con Dios @ Santa Margarita Pkwy (Lutheran Church)	', 92688),
(45, 'SATURDAY	', 'RANCHO SANTA MARGARITA	', '10:30 AM   	', '(C,W)	', 'WOMEN\'S BIG BOOK STUDY	', '30382 Via Con Dios @ Santa Margarita Pkwy (St John\'s Episcopal Church)	', 92688),
(46, 'SUNDAY	', 'NEWPORT BEACH	', '7:00 AM   	', '(O)	', 'ROUND TABLE TOPIC DISCUSSION	', '414 E. 32nd St.	', 92663),
(47, 'SUNDAY	', 'NEWPORT BEACH	', '7:00 AM   	', '(O)	', 'JUMPSTART DISCUSSION	', '414 E. 32nd St.	', 92663),
(48, 'SUNDAY	', 'NEWPORT BEACH	', '7:15 AM   	', '(C,M)	', 'MEN\'S CLOSED BIG BOOK STUDY	', '798 Dover Dr @ 16th Street (Newport Harbor Lutheran Church)	', 92663),
(49, 'SUNDAY	', 'NEWPORT BEACH	', '9:30 AM   	', '(O)	', 'SANDY SURVIVORS	', 'On the Beach @ 14th, 15th & Balboa Streets	', 92663),
(50, 'SUNDAY	', 'NEWPORT BEACH	', '11:30 AM   	', 'O', 'DISCUSSION	', '414 E. 32nd St.	', 92663),
(51, 'SUNDAY	', 'NEWPORT BEACH	', '6:00 PM   	', '(C)	', 'PRIMARY PURPOSE	', '798 Dover Dr @ 16th Street (Newport Harbor Lutheran Church)	', 92663),
(52, 'SUNDAY	', 'NEWPORT BEACH	', '7:30 PM   	', '(O)	', 'HERE & NOW DISCUSSION	', '414 E. 32nd St.	', 92663),
(53, 'SUNDAY	', 'NEWPORT BEACH	', '7:30 PM   	', '(O,SP)	', 'SPEAKERS	', '414 E. 32nd St. (Downstairs)	', 92663),
(54, 'MONDAY	', 'NEWPORT BEACH	', '6:30 AM   	', '(O)	', 'CHICKEN COOP ROUND TABLE	', '414 Old Newport Blvd @ Hospital Rd (Chicken Coop)	', 92663),
(55, 'MONDAY', 'NEWPORT BEACH', '6:30 AM   	', '(O)	', 'JUMPSTART DISCUSSION	', '414 E. 32nd St.	', 92663),
(56, 'MONDAY	', 'NEWPORT BEACH	', '6:30 AM   	', '(O)	', 'ROUND TABLE TOPIC DISCUSSION	', '414 E. 32nd St.	', 92663),
(57, 'MONDAY	', 'NEWPORT BEACH	', '6:45 AM   	', '(O)	', '6:45 AM DAILY ATTITUDE ADJUSTMENT	', '1099 Bayside Dr @ Jamboree (Newport Beach Yacht Club)	', 92660),
(58, 'MONDAY', 'NEWPORT BEACH	', '8:00 AM   	', '(O)	', 'TWO OR MORE-CAME TO BELIEVE	', '414 E. 32nd St.	', 92633),
(59, 'MONDAY	', 'NEWPORT BEACH	', '9:00 AM   	', '(C,W)	', 'WOMEN\'S STEP STUDY	', '414 E. 32nd St.	', 92663),
(60, 'MONDAY	', 'NEWPORT BEACH	', '12:00 PM   	', '(O,BG)	', 'BEGINNERS	', '414 E. 32nd St.	', 92663),
(61, 'MONDAY	', 'NEWPORT BEACH	', '12:15 PM   	', '(O)	', 'SHARK AT THE AQUATIC CENTER	', '1 Whitecliffs Dr. (Newport Aquatic Center)	', 92660),
(62, 'MONDAY	', 'NEWPORT BEACH	', '12:30 PM   	', '(C,M)	', 'BACK BAY MEN\'S STAG DISCUSSION	', '2401 Irvine Ave. c/s Santa Isabel (Harbor Christian Church)	', 92627),
(63, 'MONDAY	', 'NEWPORT BEACH	', '2:00 PM   	', '(O)	', 'NEWPORT NOMADS	', '414 Old Newport Blvd @ Hospital Rd (Chicken Coop, downstairs)	', 92663),
(64, 'MONDAY', 'NEWPORT BEACH	', '3:30 PM   	', '(O)	', 'LIVING SOBER	', '414 E. 32nd St.	', 92663),
(65, 'MONDAY', 'NEWPORT BEACH', '5:30 PM   	', '(C)	', 'FISH OUT\'A WATER	', '414 E. 32nd St.	', 92663),
(66, 'MONDAY', 'NEWPORT BEACH	', '6:00 PM   	', '(O,W)	', 'WOMEN\'S IN OUR HEARTS CANDLELIGHT	', '414 E. 32nd St.	', 92663),
(67, 'MONDAY	', 'NEWPORT BEACH	', '6:00 PM   	', '(C,W)	', 'WOMEN\'S BOOK & STEP STUDY	', '2414 Vista del Oro	', 92660),
(68, 'MONDAY', 'NEWPORT BEACH	', '6:00 PM   	', '(O,M)	', 'OUR PART MEN\'S MEETING	', '798 Dover Dr @ 16th Street (Newport Harbor Lutheran Church)	', 92660),
(69, 'MONDAY', 'NEWPORT BEACH	', '6:45 PM   	', '(O,BG)	', 'BEGINNERS & TRADITIONS GROUP	', '1400 W. Balboa Blvd. (Christ Church by the Sea)	', 92661),
(70, 'MONDAY	', 'NEWPORT BEACH	', '7:00 PM   	', '(O,M)	', 'MEN\'S DISCUSSION	', '1 Hoag Dr. @ PCH (Hoag Chemical Dependency Unit)	', 92663),
(71, 'MONDAY', 'NEWPORT BEACH	', '7:00 PM   	', '(C,SP)	', 'MONDAY NIGHT NEWPORT SPEAKERS MEETING	', '414 E. 32nd St.	', 92663),
(72, 'MONDAY	', 'NEWPORT BEACH	', '7:00 PM   	', '(C)	', 'OVER 40\'S DISCUSSION	', '1099 Bayside Dr @ Jamboree (Newport Beach Yacht Club)	', 92660),
(73, 'MONDAY	', 'NEWPORT BEACH	', '8:00 PM   	', '(O)	', 'STEP STUDY	', '414 E. 32nd St.	', 92663),
(74, 'MONDAY	', 'NEWPORT BEACH	', '8:30 PM   	', '(O)	', 'STEP STUDY	', '115 Agate (next to Balboa Ferry)	', 92662),
(75, 'TUESDAY', 'NEWPORT BEACH	', '6:30 AM   	', '(O)	', 'JUMPSTART DISCUSSION	', '414 E. 32nd St.	', 92663),
(76, 'TUESDAY	', 'NEWPORT BEACH	', '6:30 AM   	', '(O)	', 'CHICKEN COOP ROUND TABLE	', '414 Old Newport Blvd @ Hospital Rd (Chicken Coop)	', 92663),
(77, 'TUESDAY	', 'NEWPORT BEACH	', '6:30 AM   	', '(O)	', 'ROUND TABLE TOPIC DISCUSSION	', '414 E. 32nd St.	', 92663),
(78, 'TUESDAY	', 'NEWPORT BEACH	', '6:45 AM   	', '(O)	', '6:45 AM DAILY ATTITUDE ADJUSTMENT	', '1099 Bayside Dr @ Jamboree (Newport Beach Yacht Club)	', 92660),
(79, 'TUESDAY', 'NEWPORT BEACH	', '8:00 AM   	', '(O)	', 'TWO OR MORE-STEPS AND TRADITIONS	', '414 E. 32nd St.	', 92663),
(80, 'TUESDAY', 'NEWPORT BEACH	', '12:00 PM   	', '(O)	', 'DISCUSSION	', '414 E. 32nd St.	', 92663),
(81, 'TUESDAY	', 'NEWPORT BEACH	', '12:15 PM   	', '(O)	', 'SHARK AT THE AQUATIC CENTER	', '1 Whitecliffs Dr. (Newport Aquatic Center)	', 92660),
(82, 'TUESDAY	', 'NEWPORT BEACH	', '2:00 PM   	', '(O)	', 'NEWPORT NOMADS	', '414 Old Newport Blvd @ Hospital Rd (Chicken Coop, downstairs)	', 92663),
(83, 'TUESDAY	', 'NEWPORT BEACH	', '3:30 PM   	', '(O)	', 'DISCUSSION	', '414 E. 32nd St.	', 92663),
(84, 'TUESDAY	', 'NEWPORT BEACH	', '5:30 PM   	', '(C)	', 'FISH OUT\'A WATER	', '414 E. 32nd St.	', 92663),
(85, 'TUESDAY	', 'NEWPORT BEACH	', '6:00 PM   	', '(C,W)	', 'CASTAWAY\'S WOMEN\'S COVER TO COVER BIG BOOK STUDY	', '798 Dover Dr @ 16th Street (Newport Harbor Lutheran Church, downstairs)	', 92663),
(86, 'TUESDAY	', 'NEWPORT BEACH	', '6:30 PM   	', '(C,M)	', 'ST. MARK\'S MENS STAG BIG BOOK & 12X12 DISC	', '2200 San Joaquin Hills Rd. @ MacArthur (St. Mark\'s Church - Admin Bldg. - downstairs)	', 92660),
(87, 'TUESDAY	', 'NEWPORT BEACH	', '6:45 PM   	', '(O,W)	', 'STRONG WOMEN\'S GROUP	', '414 E. 32nd St.	', 92663),
(88, 'TUESDAY', 'NEWPORT BEACH	', '7:00 PM   	', '(C,M)	', 'BEACHCOMBERS MEN\'S	', '3101 W. Coast Hwy. Suite 200	', 92663),
(89, 'TUESDAY	', 'NEWPORT BEACH	', '7:00 PM   	', '(C,M)	', 'CDM/NEWPORT MEN\'S STAG	', '414 E. 32nd St.	', 92663),
(90, 'TUESDAY	', 'NEWPORT BEACH	', '7:00 PM   	', '(O)	', 'ON THE BEACH	', 'Balboa Pier @ Palm (fire ring)	', 92663),
(91, 'TUESDAY	', 'NEWPORT BEACH	', '7:00 PM   	', '(O)	', 'B STREET BONFIRE MEETING	', '1st Fire Ring at Ocean Front & B St.	', 92661),
(92, 'TUESDAY', 'NEWPORT BEACH	', '7:30 PM   	', '(C,M)	', 'EASTBLUFF MEN\'S	', '2046 Mar Vista Dr. @ Eastbluff (Queen of Angels Church)	', 92660),
(93, 'TUESDAY	', 'NEWPORT BEACH	', '7:30 PM   	', '(C,M)	', 'MEN\'S BOOK STUDY	', '798 Dover Dr @ 16th Street (Newport Harbor Lutheran Church)	', 92663),
(94, 'TUESDAY', 'NEWPORT BEACH	', '7:30 PM   	', '(C,M)	', 'CDM SOUP KITCHEN MEN\'S STAG	', '2401 Irvine Ave. (Harbor Christian Church)	', 92660),
(95, 'TUESDAY', 'NEWPORT BEACH	', '8:00 PM   	', 'O,W	', 'SIRENS OF SOBRIETY \"S.O.S\"	', '414 E. 32nd St. (Upstairs)	', 92663);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aa_meetings`
--
ALTER TABLE `aa_meetings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aa_meetings`
--
ALTER TABLE `aa_meetings`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
