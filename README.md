# Varnam

An cross-platform Indian language transliterator. Easily type Indian languages on the web, desktop and mobile.

[TypeIndianLang.Online](https://TypeIndianLang.Online)

Repos working on (orderd by layer. From package to the library) :

* [varnam-flatpak](https://github.com/subins2000/varnam-flatpak) - Flatpak package for Varnam Editor (Linux)
* [varnam-desktop](https://github.com/athul/varnam-desktop) - Cross-platform Desktop app for Varnam Editor
* [varnam-editor](https://github.com/thetronjohnson/varnam-editor) - Browser editor frontend for Varnam (VueJS)
* [varnam-review](https://github.com/subins2000/varnam-review) - Crowdsourced review platform for words in Varnam (NodeJS)
* [varnamd](https://github.com/athul/varnamd) - Varnam HTTP server daemon
* [go-libvarnam!](https://github.com/athul/go-libvarnam) - Go bindings for libvarnam
* [libvarnam](https://github.com/subins2000/libvarnam) - The core library (C)

Project Tracker -  https://github.com/users/subins2000/projects/2

Things done as part of [FOSSHack](https://fossunited.org/hackathon) :

* Try The Project @ [TypeIndianLang.Online](https://TypeIndianLang.Online)
* Made the cross-platform Varnam Desktop app : https://github.com/athul/varnam-desktop
* Made the Varnam Editor : https://github.com/thetronjohnson/varnam-editor
* New Varnam Website (hugo) : this repo
* Port `varnamc` CLI utility from Ruby to C : https://github.com/subins2000/libvarnam/tree/varnamc-port-to-c
* Mac OSX/Windows/Linux compilable varnam daemon (`varnamd`) : https://github.com/athul/varnamd/tree/feat/cache-dl
  * Added missing endpoints in varnamd : https://github.com/athul/varnamd/tree/train
  * Webview single binary desktop app : https://github.com/athul/varnamd/tree/webview
* Varnam Online word review backend : https://github.com/subins2000/varnam-review

What we're changing : https://pad.disroot.org/p/varnam

### Design
---
https://www.figma.com/file/DjKTWfeLtBVKKQ3T8uqFPq/Varnam_Editor?node-id=0%3A1
