<?php

$aliases['dev'] = array(
	'uri'=> 'futurefund.ccistaging.com',
	'root' => '/home/staging/subdomains/futurefund/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options'=>'-p 37241'
);
