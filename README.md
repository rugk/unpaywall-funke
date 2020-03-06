# unpaywall-funke
### Remove those paywalls!
Read articles locked behind paywalls on websites powered by the FUNKE MEDIENGRUPPE CMS used by their newspapers.

This script is provided for educational purposes only. I strongly encourage you to subscribe to your favourite newspaper and support local journalism.

## How to use

Install the script by clicking [here](https://github.com/tobimori/unpaywall-funke/raw/master/unpaywall-funke.user.js) with an installed userscript manager for your browser, e.g. [Tampermonkey](https://www.tampermonkey.net/), then browse to a locked article on a supported site.

## Supported sites
* [Berliner Morgenpost](https://morgenpost.de/)
* [Hamburger Abendblatt](https://abendblatt.de/)
* [Westdeutsche Allgemeine Zeitung](https://waz.de/)
* [Thüringer Allgemeine](https://thueringer-allgemeine.de/)
* [Neue Ruhr Zeitung (NRZ)](https://nrz.de/)
* [Westfalenpost](https://wp.de/)
* [~~Iserlohner Kreisanzeiger und Zeitung (IKZ)~~](https://ikz-online.de/) (see issue [#1](https://github.com/tobimori/unpaywall-funke/issues/1))
* [Ostthüringer Zeitung](https://otz.de/)

## Behind the scenes
#### Why does this work?

When loading an article, the CMS already loads the complete content and only deletes it afterwards, if no user is logged in. This script prevents the deletion by removing all scripts.
