---
layout: page
title: Privacy Policy
permalink: /privacy
---

_Last updated: 26 October 2026_

Reminders ("the application") is a desktop application that runs on your computer. This policy explains which
data the application accesses and how it is used.

## Data stored on your computer

Your reminders and settings are stored in a local database on your computer. They are never sent to the author
of the application or to any third party.

## Google account and Google Drive

Logging in with Google is optional. It is needed only for the backup, synchronization and load features.
When you log in, the application requests these permissions:

- **Your email address** (`openid`, `userinfo.email`). Used only to show which Google account is logged in.
- **Files created by this app** (`drive.file`). The application can see and manage only the files and folders
  it created itself in your Google Drive. It cannot see any other files in your Drive.

The application uses Google Drive access solely to:

- create its own folder in your Google Drive,
- store and delete backup files of your reminders in that folder,
- store and read the synchronization file of your reminders in that folder,
- list and download those files when you choose to load one.

All communication happens directly between your computer and Google. The author of the application does not
operate any server and does not receive, store or process any of your data.

The login token issued by Google is stored in the application database on your computer. Logging out in the
application revokes it. You can also revoke the application's access at any time at
<https://myaccount.google.com/permissions>.

## Limited Use disclosure

The use and transfer of information received from Google APIs by the application adheres to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the Limited Use requirements. Data is not transferred to anyone, not used for advertising, not sold,
and not read by humans.

## Changes

Changes to this policy are published on this page.

## Contact

Questions about this policy: [GitHub issues](https://github.com/linhartJ/reminders-desktop/issues).

---

## Česky {#cesky}

Aplikace Reminders ukládá připomínky a nastavení pouze do lokální databáze na vašem počítači a nikam je
neodesílá.

Přihlášení přes Google je volitelné a slouží jen pro zálohování, synchronizaci a načítání záloh. Aplikace žádá
o přístup k vaší e-mailové adrese (jen pro zobrazení přihlášeného účtu) a k souborům, které sama vytvořila
ve vašem Google Disku (`drive.file`). K ostatním souborům na Disku přístup nemá. Komunikace probíhá přímo mezi
vaším počítačem a Googlem, autor aplikace žádná vaše data nezískává. Přihlašovací token je uložen v databázi
aplikace na vašem počítači; odhlášením v aplikaci se zruší. Přístup můžete kdykoliv odebrat na
<https://myaccount.google.com/permissions>.

Dotazy: [GitHub issues](https://github.com/linhartJ/reminders-desktop/issues).
