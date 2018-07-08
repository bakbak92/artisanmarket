-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 08 juil. 2018 à 20:18
-- Version du serveur :  5.7.21
-- Version de PHP :  5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `artisanmarket`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_article` varchar(450) COLLATE armscii8_bin NOT NULL,
  `description_article` varchar(450) COLLATE armscii8_bin NOT NULL,
  `image_article` text COLLATE armscii8_bin NOT NULL,
  `prix_article` int(11) NOT NULL,
  `id_artisan` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `nom_article`, `description_article`, `image_article`, `prix_article`, `id_artisan`) VALUES
(9, 'Coussin', '40 x 40 cm', 'https://images.unsplash.com/photo-1494281232141-90a40b0b06c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d66710bd126434e4c50af9b1dbc55d5&auto=format&fit=crop&w=750&q=80', 35, NULL),
(11, 'Chemise', 'Chemise a carreaux taille M', 'https://images.unsplash.com/photo-1507904862046-46e6e3661508?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0efe856edefb24e3274b92af1f9ad661&auto=format&fit=crop&w=750&q=80', 90, NULL),
(13, 'Robe', 'Robe rose taille S', 'https://images.unsplash.com/photo-1524485566422-75cf178c59d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41ed2cfdd37cc5f6ab09950036780451&auto=format&fit=crop&w=750&q=80', 60, NULL),
(24, 'aaa', 'aaa', 'aaaa', 0, NULL),
(25, 'aaa', 'aaa', 'aaaa', 0, NULL),
(26, 'aaa', 'aaa', 'aaaa', 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `artisans`
--

DROP TABLE IF EXISTS `artisans`;
CREATE TABLE IF NOT EXISTS `artisans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_artisan` varchar(450) COLLATE armscii8_bin NOT NULL,
  `prenom_artisan` varchar(450) COLLATE armscii8_bin NOT NULL,
  `description_artisan` text COLLATE armscii8_bin NOT NULL,
  `email_artisan` text COLLATE armscii8_bin NOT NULL,
  `password_artisan` varchar(450) COLLATE armscii8_bin NOT NULL,
  `photo_artisan` text COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

--
-- Déchargement des données de la table `artisans`
--

INSERT INTO `artisans` (`id`, `nom_artisan`, `prenom_artisan`, `description_artisan`, `email_artisan`, `password_artisan`, `photo_artisan`) VALUES
(1, 'kkkkkkk', 'Bakary', 'Couturier a mes heure perdu', 'bakarycoly@live.fr', 'bakbak', 'yp'),
(2, 'kkkkkkk', 'Bakary', 'Couturier a mes heure perdu', 'bakarycoly@live.fr', 'bakbak', 'yp');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prenom_client` varchar(450) COLLATE armscii8_bin NOT NULL,
  `nom_client` varchar(450) COLLATE armscii8_bin NOT NULL,
  `email_client` text COLLATE armscii8_bin NOT NULL,
  `password_client` varchar(450) COLLATE armscii8_bin NOT NULL,
  `photo_client` text COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
CREATE TABLE IF NOT EXISTS `commentaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commentaire` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
