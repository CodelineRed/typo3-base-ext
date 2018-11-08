# InsanityMeetsHH Base Extension for TYPO3 CMS

## Installation
```bash
$ composer require insanitymeetshh/imhh-t3base
```

* Add TypoScript and Page TSConfig to root page 🌍
  * Template > Click on root page 🌍 (earth icon) > Info/Modify > Edit the whole template record > Includes > Available Items > Click on "InsanityMeetsHH Base Extension"
  * Page > Click on root page 🌍 (earth icon) > Edit 📝 (pencil icon) > Resources > Page TSConfig
    * `<INCLUDE_TYPOSCRIPT: source="FILE:EXT:imhh_t3base/Configuration/TypoScript/page-ts/BackendLayouts.ts">`
    * `<INCLUDE_TYPOSCRIPT: source="FILE:EXT:imhh_t3base/Configuration/TypoScript/page-ts/Default.ts">`
* Setup extension
  * Template > Constant Editor > PLUGIN.TX_IMHH_T3BASE
  * Extensions > Search for "base" > Click on ⚙️ (gear icon) or "InsanityMeetsHH Base Extension"

## Includes
* Custom Backend Login Page
* Templates for
  * News
  * Fluid Styled Context
  * Indexed Search
* 7 Templates
  * Content
  * Head with Content left and Sidebar right
  * Head with Sidebar left and Content right
  * Content left and Sidebar right
  * Sidebar left and Content right
  * Head with Content
  * Homepage
* Language
  * English
  * German
* CKeditor
  * Configuration as YAML file
  * Font Awesome 5 Plugin
* [jQuery 3](http://jquery.com)
* [Bootstrap 4](https://getbootstrap.com)
* [Font Awesome 5](https://fontawesome.com)
* [Slick Carousel 1](http://kenwheeler.github.io/slick/)
* [LazyLoad 8](https://www.andreaverlicchi.eu/lazyload/)
* [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
* [Cookieconsent 3](https://github.com/insites/cookieconsent)

This extension is under development
