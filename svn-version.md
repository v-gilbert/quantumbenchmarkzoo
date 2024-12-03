---
description: >
  The SVN version of the ULX admin mod for Garry’s Mod lets you test the
  latest and greatest changes before they are turned into a release.
---
# SVN version

The SVN version of ULX lets you test the latest changes before they are turned into a release. This development build can be used to try out new features or hunt for bugs.

> **Caution:** The SVN version is experimental and may contain bugs. In a worst-case scenario, it can damage your server. Stick to the [release version](installation) for the most stable experience.

You can get a local copy of the SVN version by visiting the ULib and ULX repository pages. From there, you can [clone](https://help.github.com/en/articles/cloning-a-repository) or [download](https://stackoverflow.com/a/6466993) the source code for each project.

- ULib repository: [https://github.com/TeamUlysses/ulib](https://github.com/TeamUlysses/ulib)
- ULX repository: [https://github.com/TeamUlysses/ulx](https://github.com/TeamUlysses/ulx)

Place the source code in your `addons` folder. The folder structure should look like this:
- `<garrysmod>/addons/ulib/ulib.build`
- `<garrysmod>/addons/ulx/ulx.build`

To verify that you are running the SVN version, run `ulx version` from the console. The version number should be followed by the letter `d` to indicate the fact that it is a development build.

When writing a patch for ULX, take the [Ulysses code style](https://forums.ulyssesmod.net/index.php/topic,3658.0.html) into account.
