// Fills the latest version and the changelog from GitHub Releases, so new releases need no page edit.
(function () {
  var api = 'https://api.github.com/repos/linhartJ/reminders-desktop/releases';
  var latest = document.getElementById('latest-version');
  var changelog = document.getElementById('changelog');
  if (!latest && !changelog) return;

  function date(iso) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function version(release) {
    return release.tag_name.replace(/^v/, '');
  }

  fetch(api, { headers: { Accept: 'application/vnd.github.html+json' } })
    .then(function (response) {
      if (!response.ok) throw new Error('GitHub API ' + response.status);
      return response.json();
    })
    .then(function (releases) {
      releases = releases.filter(function (r) { return !r.draft && !r.prerelease; });
      if (latest && releases.length) {
        latest.textContent = 'Latest version: ' + version(releases[0]) + ', released ' + date(releases[0].published_at) + '.';
      }
      if (changelog) {
        changelog.innerHTML = '';
        releases.forEach(function (release) {
          var heading = document.createElement('h2');
          heading.textContent = version(release);
          var published = document.createElement('p');
          published.innerHTML = '<em></em>';
          published.firstChild.textContent = date(release.published_at);
          var notes = document.createElement('div');
          // notes rendered and sanitized by GitHub
          notes.innerHTML = release.body_html || '';
          changelog.append(heading, published, notes);
        });
      }
    })
    .catch(function () {
      var link = 'https://github.com/linhartJ/reminders-desktop/releases';
      if (latest) latest.innerHTML = 'See the <a href="' + link + '">releases page</a> for the latest version.';
      if (changelog) changelog.innerHTML = 'The changelog could not be loaded, see the <a href="' + link + '">releases page</a>.';
    });
})();
