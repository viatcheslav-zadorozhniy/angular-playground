# Angular Internationalization

How to?
- [Prepare components](#prepare-components)
- [Update angular.json](#update-angularjson)
- [Extract translatable text](#extract-translatable-text)
- [Add translations](https://angular.io/guide/i18n-common-translation-files)
- [Build and Deploy](#build-and-deploy)
- [i18n Documentation](#i18n-documentation)
- [XLIFF Editors](#xliff-editors)
- [Useful Links](#useful-links)


## Prepare components

Mark text to translate in:
- [component template](./src/app/app.component.html)
- [component code](./src/app/app.component.ts)

[More details](https://angular.io/guide/i18n-common-prepare)


## Update angular.json

Configuration example for **angular.json**:
```json
{
  "projects": {
    "app-name": {
      "i18n": {
        "sourceLocale": "en", // The default locale. "en" subfolder will be created in the output folder.
        "locales": { // All available locales should be listed here.
          "ru": "locales/messages.ru.xlf", // "locales/messages.ru.xlf" - the path to the translation file.
          "uk": { // "ru", "uk", etc. - locale name and subfolder for the output.
            "translation": "locales/messages.uk.xlf",
            "baseHref": "uk/" // The value which will be used for the "base" tag
          }
        }
      },
      "architect": {
        "build": {
          "options": {
            "localize": true, // Use localization for all items specified in the "locales" section.
            "i18nMissingTranslation": "warning" // Print warnings for the missed translations.
          },
          "configurations": {
            "development": {
              "localize": ["en"] // Locale for the development mode.
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "app-name:build",
            "outFile": "locales/messages.en.xlf" // Extract translations to this file.
          }
        }
      }
    }
  }
}
```

[More details](https://angular.io/guide/i18n-common-merge#define-locales-in-the-build-configuration)


## Extract translatable text

Update `package.json` with the following script:
```json
{
  "scripts": {
    "i18n:extract": "ng extract-i18n app-name"
  }
}
```

Run the script `npm run i18n:extract`.

Then you will have an XLF file with the extracted text.

E.g. [messages.en.xlf](../../locales/messages.en.xlf)

[More details](https://angular.io/guide/i18n-common-translation-files#extract-the-source-language-file)


## Build and Deploy

To build an app run `ng build app-name --configuration production` or just `npm run build` (for this project).

After the build you will have a separate instances of you app for each locale.

E.g.
```
dist/
  en/
  ru/
  uk/
```

[More details](https://angular.io/guide/i18n-common-deploy)


## i18n Documentation:
- [Overview](https://angular.io/guide/i18n-overview)
- [Syntax](https://angular.io/guide/i18n-common-prepare)
- [ICU expressions](https://angular.io/guide/i18n-common-prepare#icu-expressions)
- [Work with translation files](https://angular.io/guide/i18n-common-translation-files)
- [Deploy](https://angular.io/guide/i18n-common-deploy)

## XLIFF Editors:
- [POEditor](https://poeditor.com/)
- [Crowdin](https://crowdin.com/)
- [OneSky](https://www.oneskyapp.com/)
- [Simplest XLIFF Editor](https://xliff.brightec.co.uk/) (but it misses some translation metadata)

## Useful Links:
- [XLIFF](https://en.wikipedia.org/wiki/XLIFF)
- [ICU Messages](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [Plural Rules](https://cldr.unicode.org/index/cldr-spec/plural-rules)
- [ngx-translate vs Angular i18n](https://github.com/ngx-translate/core/issues/495)
- [VSCode XLIFF Sync](https://marketplace.visualstudio.com/items?itemName=rvanbekkum.xliff-sync#synchronize-translation-units)
- [angular.json schema](/node_modules/@angular/cli/lib/config/schema.json) (the link will work only after `npm ci` execution)
