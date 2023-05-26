-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 07:15 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flybnb`
--

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favorite`
--

INSERT INTO `favorite` (`id`, `room_id`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 35, 2, '2023-05-21 07:16:37', '2023-05-21 07:16:37'),
(16, 36, 2, '2023-05-21 08:14:18', '2023-05-21 08:14:18'),
(17, 38, 2, '2023-05-21 08:18:11', '2023-05-21 08:18:11');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `room_id`, `file_name`, `created_at`, `updated_at`) VALUES
(41, 33, '71aee6d2-969b-4192-ba78-366bbe96b147.jpeg', '2023-05-20 12:24:42', '2023-05-20 12:24:42'),
(42, 33, 'e5bded61-be2b-4a00-90ea-5d0c34fbdaa2.jpeg', '2023-05-20 12:24:42', '2023-05-20 12:24:42'),
(43, 33, 'efa477ec-3977-4a40-99af-eb47a1f7d4cc.jpeg', '2023-05-20 12:24:42', '2023-05-20 12:24:42'),
(44, 33, 'c8c7c082-8a12-4afb-b9ea-b2951349b0f5.jpeg', '2023-05-20 12:24:42', '2023-05-20 12:24:42'),
(45, 33, '2e98c5a4-9488-46e3-8f97-a7c25c79cb92.jpeg', '2023-05-20 12:24:43', '2023-05-20 12:24:43'),
(46, 33, '3713eb3c-27a2-41a9-968e-8fbabfc90be8.jpeg', '2023-05-20 12:24:43', '2023-05-20 12:24:43'),
(47, 33, '5bb2fdd1-834c-4583-8d7b-8168996244db.jpeg', '2023-05-20 12:24:43', '2023-05-20 12:24:43'),
(48, 33, '4b98e251-4957-4337-9ad3-d12c15fecb09.jpeg', '2023-05-20 12:24:43', '2023-05-20 12:24:43'),
(58, 34, '33262ef2-6725-4f95-834e-a0ab39b86771.jpeg', '2023-05-20 13:16:18', '2023-05-20 13:16:18'),
(59, 35, 'fed101ef-f799-4f8b-a4a7-7d6862c563eb.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(60, 35, 'e4992009-8d7c-4670-9613-339527ab834d.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(61, 35, 'abdfd45e-94ff-4b5e-b63b-50a57284900f.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(62, 35, 'b4505f6c-a04a-4405-8453-8c99f893cb0e.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(63, 35, '3c2d8be0-77da-436f-ba9e-7fbf76e8a7f1.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(64, 35, '3243e1eb-f2a8-4784-b55a-f88927389b12.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(65, 35, '4cf1e028-7395-442f-a3e9-0993a6045b2e.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(66, 35, '50418f4f-b6ea-459f-aff5-13d2c655ef08.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(67, 35, 'fa823605-1fc1-493e-a227-9bd69923a669.jpeg', '2023-05-20 13:19:42', '2023-05-20 13:19:42'),
(68, 35, 'f426158a-f645-4fc9-9f40-612b7b3cd569.jpeg', '2023-05-20 13:19:43', '2023-05-20 13:19:43'),
(69, 35, '4f33c296-247a-4919-ae9f-b26b99f64d49.jpeg', '2023-05-20 13:19:43', '2023-05-20 13:19:43'),
(70, 35, '777292a1-80cf-4a25-b477-fc8b831bf142.jpeg', '2023-05-20 13:19:43', '2023-05-20 13:19:43'),
(71, 36, '6414e6ee-2e0c-406d-bda1-395242f6a8ad.jpeg', '2023-05-20 13:57:49', '2023-05-20 13:57:49'),
(72, 36, '3cbdf8e5-120e-49de-b86e-32dba147e988.jpeg', '2023-05-20 13:57:49', '2023-05-20 13:57:49'),
(73, 36, '3af75665-cd1b-472c-9934-4ab7187fa9dc.jpeg', '2023-05-20 13:57:49', '2023-05-20 13:57:49'),
(74, 36, '4aecd683-525e-49ff-9caf-47c596bf828c.jpeg', '2023-05-20 13:57:49', '2023-05-20 13:57:49'),
(75, 36, 'f07ebbbe-8def-4e10-a21a-ee07d3c241fb.jpeg', '2023-05-20 13:57:49', '2023-05-20 13:57:49'),
(76, 36, 'd3ce7f3a-adb1-4239-b814-d0d19dbc3134.jpeg', '2023-05-20 13:57:49', '2023-05-20 13:57:49'),
(77, 37, 'aeaeab42-90da-4fee-a196-14236f033185.jpeg', '2023-05-21 07:39:16', '2023-05-21 07:39:16'),
(78, 37, '3ce21b8d-b4d8-4a82-a73f-a9390703a7b8.jpeg', '2023-05-21 07:39:16', '2023-05-21 07:39:16'),
(79, 37, 'c827de9f-73d1-4a8d-90b5-d4b934dd05bf.jpeg', '2023-05-21 07:39:16', '2023-05-21 07:39:16'),
(80, 37, '59b0b547-7062-4442-a268-fac7a6e31672.jpeg', '2023-05-21 07:39:16', '2023-05-21 07:39:16'),
(81, 37, 'd6fff171-adb8-48db-bfdd-1dc2998a4f37.jpeg', '2023-05-21 07:39:16', '2023-05-21 07:39:16'),
(82, 38, 'a7f1a864-d24b-4e36-b31d-3efa2e3f19e9.jpeg', '2023-05-21 08:12:05', '2023-05-21 08:12:05'),
(83, 38, '88bde364-c164-4a29-9f04-de22095fc232.jpeg', '2023-05-21 08:12:05', '2023-05-21 08:12:05'),
(84, 38, '0566ee69-fa48-4ce8-beaa-8fb6dfab6cad.jpeg', '2023-05-21 08:12:05', '2023-05-21 08:12:05'),
(85, 38, '059ca3c5-2dc0-44f6-9e7f-9f78b060cd20.jpeg', '2023-05-21 08:12:05', '2023-05-21 08:12:05'),
(86, 38, 'd87b52b0-5d61-4685-b99a-df168c2874d0.jpeg', '2023-05-21 08:12:05', '2023-05-21 08:12:05'),
(87, 38, '6d17dd32-5b65-4ae8-8c2c-a38b5085f872.jpeg', '2023-05-21 08:12:05', '2023-05-21 08:12:05'),
(88, 38, '8df633c1-8043-4d4b-9a9b-1bd7f93d0426.jpeg', '2023-05-21 08:12:06', '2023-05-21 08:12:06'),
(98, 41, '2cf0dda0-a231-4026-a5f9-521fbc0542a0.jpeg', '2023-05-21 10:01:09', '2023-05-21 10:01:09'),
(99, 41, '7db749fb-58c4-4020-a456-27fea38d706a.jpeg', '2023-05-21 10:01:10', '2023-05-21 10:01:10'),
(100, 41, '63a1dcb2-33f9-459a-9bf8-693ad09a25a2.jpeg', '2023-05-21 10:01:10', '2023-05-21 10:01:10'),
(101, 41, 'c41fda6e-4b07-48db-a52d-be050c4e6c6c.jpeg', '2023-05-21 10:01:10', '2023-05-21 10:01:10'),
(103, 45, 'aae718fc-6b0f-4f59-b978-96cea213b9ed.jpeg', '2023-05-21 10:22:54', '2023-05-21 10:22:54'),
(104, 45, 'b9b7ecdc-f29c-4021-9333-2c0e7807537d.jpeg', '2023-05-21 10:22:54', '2023-05-21 10:22:54'),
(105, 45, 'c4e782ef-2de4-4961-8306-ffdb36d43798.jpeg', '2023-05-21 10:22:54', '2023-05-21 10:22:54'),
(106, 45, '0939255c-57c4-419e-8742-954f55f5ca14.jpeg', '2023-05-21 10:22:54', '2023-05-21 10:22:54'),
(107, 45, '6313f68c-7f00-4f1d-81d9-80b5867e988e.jpeg', '2023-05-21 10:22:54', '2023-05-21 10:22:54');

-- --------------------------------------------------------

--
-- Table structure for table `reserved`
--

CREATE TABLE `reserved` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `room_creator_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reserved`
--

INSERT INTO `reserved` (`id`, `user_id`, `room_id`, `room_creator_id`, `created_at`, `updated_at`) VALUES
(2, 2, 36, 1, '2023-05-21 08:58:54', '2023-05-21 08:58:54');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `home_type` varchar(255) NOT NULL,
  `room_type` varchar(255) NOT NULL,
  `total_guest` int(11) NOT NULL,
  `total_rooms` int(11) NOT NULL,
  `total_bedrooms` int(11) NOT NULL,
  `total_bathrooms` int(11) NOT NULL,
  `summary` text NOT NULL,
  `address` text NOT NULL,
  `has_tv` tinyint(1) NOT NULL,
  `has_kitchen` tinyint(1) NOT NULL,
  `has_air_cond` tinyint(1) NOT NULL,
  `price` float NOT NULL,
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `is_booked` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `map_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `user_id`, `title`, `home_type`, `room_type`, `total_guest`, `total_rooms`, `total_bedrooms`, `total_bathrooms`, `summary`, `address`, `has_tv`, `has_kitchen`, `has_air_cond`, `price`, `longitude`, `latitude`, `city`, `country`, `is_booked`, `created_at`, `updated_at`, `map_url`) VALUES
(36, 1, 'Private Bedroom&bath Marylebone', 'DESIGN', 'ENTIRE', 4, 2, 4, 3, 'About this place\n*Pet friendly *\nPrivate room w/bath on a spacious 2bed 2bath flat in Marylebone.\nShared kitchen, spacious living room and patio access.\nThe guest(s) will enjoy easy access to everything from this centrally located place.\nSelfridges just 10’ walk\nMarylebone Station 2’\nBaker Street Station 5’\nMarble Arch Station 6’\n\nI’m happy to welcome guests with pets upon request. I have a small size dog which is very friendly with other pets and people.\nPlease get in touch with your enquiry.', 'United Kingdom House, London W1D, UK', 1, 1, 0, 55, -0.13922560214996338, 51.5159912109375, 'United Kingdom House', 'GB', 0, '2023-05-20 13:57:49', '2023-05-21 08:49:09', NULL),
(37, 2, 'Private room in a beautiful villa', 'TINY_HOME', 'SINGLE', 2, 2, 2, 2, 'Our listing includes one room in our villa in DHA Phase One with an en-suite bathroom. You will have access to the rest of the house including the garden, an outside sitting area, and the kitchen. The rest of the people in the house include our family .', 'Clifton, Karachi, Karachi City, Sindh, Pakistan', 1, 1, 0, 20, 67.02509307861328, 24.826988220214844, 'Clifton', 'PK', 0, '2023-05-21 07:39:15', '2023-05-21 08:49:27', NULL),
(38, 2, 'Firpo Farmhouse beautiful place ', 'DESIGN', 'ENTIRE', 8, 2, 2, 3, 'Allow yourself a soothing break from the fast life and enjoy your stay with family and friends at Firpo Farmhouse. We have state of the art facilities to provide you a safe, secure, clean and stress free picnic at the quality farmhouse in Karachi that expresses comfort, luxury and natural beauty with lush green lawns, fruit trees, fresh flowers and swimming pools.', 'Deh Shah Mureed, near Al-Jannat Farm and Cosy Water Park, Gadap Town, Karachi, Karachi City, Sindh, Pakistan', 1, 1, 1, 220, 67.1993637084961, 25.082782745361328, 'Firpo Farmhouse', 'PK', 0, '2023-05-21 08:12:04', '2023-05-21 08:49:23', NULL),
(45, 2, 'CountryFarm~The Modern Lifestyle', 'ROOM', 'ENTIRE', 20, 4, 5, 3, 'Luxury Farmhouse????????\n5-7 mins away from the airport\nMake Your Event or Holiday Memorable In Country Farm We Have Sepaa rate BBQ Area????, Home Theater, Separate Swimming Pool for Kids ????????‍♀️, Swings, Pipe Rooms, Wheelchair Accessible????????‍????, Peaceful Environment ???? and Much More to Explore.\nAmenities\n\n????Providing Hospitality the Correct Way\n', '7,8 Deh Mehran, near Malir Cantt Check Post No 3, Malir Cantonment, Karachi, Karachi City, Sindh 75070, Pakistan', 0, 0, 0, 25, 67.2208881, 24.9306774, 'Country Farm', 'PK', 0, '2023-05-21 10:22:54', '2023-05-21 10:22:54', 'https://maps.google.com/?cid=3080622559577710866');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `profile_image`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Mr Shahid', 'test@email.com', '$2y$10$f2GNo2Kkn.ftCpsML9IiHuvk/W5zYByviG9BG/FA7k1gVVqjovIBm', '7f7f3c9e-dbc9-4180-b7d6-a56fdaa533ba.jpeg', NULL, '2023-05-19 11:26:50', '2023-05-21 07:05:15'),
(2, 'Faiez Waseem ', 'fazufaiez@gmail.com', '$2y$10$qNMkrDSn0Or1iO6JkolrHe9eMLxFJmL2I4ZgiZZ6ZuEX6j.0JnMuW', '90458d44-24d3-4426-a4a1-3f0efa916197.jpeg', NULL, '2023-05-19 14:00:03', '2023-05-21 07:08:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_favorites_user_item` (`user_id`,`room_id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `reserved`
--
ALTER TABLE `reserved`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_reserved_user_booking` (`user_id`,`room_id`,`room_creator_id`),
  ADD KEY `room_id` (`room_id`),
  ADD KEY `room_creator_id` (`room_creator_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `reserved`
--
ALTER TABLE `reserved`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`),
  ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `media_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`);

--
-- Constraints for table `reserved`
--
ALTER TABLE `reserved`
  ADD CONSTRAINT `reserved_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reserved_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`),
  ADD CONSTRAINT `reserved_ibfk_3` FOREIGN KEY (`room_creator_id`) REFERENCES `room` (`user_id`);

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
