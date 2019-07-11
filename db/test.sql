
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `test_table`
--

CREATE TABLE `test_table` (
  `id` int(10) UNSIGNED NOT NULL,
  `date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test_table`
--

INSERT INTO `test_table` (`id`, `date_time`) VALUES
(1, '2019-06-19 11:26:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(2, '2019-06-19 11:27:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(3, '2019-06-19 11:28:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(4, '2019-06-19 11:29:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(5, '2019-06-19 11:30:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(6, '2019-06-19 11:31:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(7, '2019-06-19 11:32:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(8, '2019-06-19 11:33:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(9, '2019-06-19 11:34:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(10, '2019-06-19 11:35:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(11, '2019-06-19 11:36:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(12, '2019-06-19 11:37:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(13, '2019-06-19 11:38:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(14, '2019-06-19 11:39:00');
INSERT INTO `test_table` (`id`, `date_time`) VALUES
(15, '2019-06-19 11:40:00');
--
-- Indexes for dumped tables
--

--
-- Indexes for table `test_table`
--
ALTER TABLE `test_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `test_table`
--
ALTER TABLE `test_table`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
