<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'epka_wordpressinfomesh');

/** MySQL database username */
define('DB_USER', 'epka_lauraperre');

/** MySQL database password */
define('DB_PASSWORD', 'Omgpy_86497');

/** MySQL hostname */
define('DB_HOST', 'epka.myd.infomaniak.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'E44-^SzmH{:+rVm%,KR_OGrz>T5O2:UWC9}]9fo~ j:;`oh/cX4yDPfXZts:t6#:');
define('SECURE_AUTH_KEY',  'i<l~#=P!kg~^@<ZE:E_YbbL218-bT}?CG!RwioH$OEAgI8d?@!?f`#Krt_*}A|%i');
define('LOGGED_IN_KEY',    'Qm8Sb]G:[EV?*ZT_%P@fqMcu)-,7i$&Z@  HG&d/d9_T7omgy3hEujgH9Lnvpoic');
define('NONCE_KEY',        'SxRC:zZSZ(?8EV;i)Fyet~iCGEei6ZQ@Ji!AY]1pPb%epM)Xo)#WCjV^v,[wz3[k');
define('AUTH_SALT',        '0&mJcEm+F,??BzD/]ICGLf!,*FKTVAu&yfnY^NdxCJ];J,PU^+3?vOBROb3+hof~');
define('SECURE_AUTH_SALT', 'K ;&A7Zg*E)&5v[emJ;-5AjobkK -U?rIsu]~k-sSb9B],?.?70gIKeXres;h]IP');
define('LOGGED_IN_SALT',   'K&fl#?dg7@ 9hy gPUGY)Ip-4vj:g^[!&^gqh,DE(AtZQ9R2_V~%JMY8HXC-=LP-');
define('NONCE_SALT',       'q^>c.h5>ixhY]R-d5|f|_`[ZSHDUx.<r(1*gVx5vjkJz9F^9Yx5gJM23<wk58^?-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
