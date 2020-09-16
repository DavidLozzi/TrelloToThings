# Trello to Things

[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)

A super simple migration tool to move out of [Trello](https://trello.com) into [Things](https://culturedcode.com/things/). I won't go into the reasons to make this move, but if you're looking to, this little script will help.

## What migrates

### Move from

![Trello card](https://raw.githubusercontent.com/DavidLozzi/TrelloToThings/master/assets/trello_screenshot.png)

### To

![Things screen](https://raw.githubusercontent.com/DavidLozzi/TrelloToThings/master/assets/things_screenshot.png)

1. Your lists in Trello come over as Projects, and associated cards are added under their project
1. Card name and description
1. Activity on your card is appended to the description
1. Check lists are included
1. Labels are moved over, **however**, you have to create your tags first in Things
1. The due date is set as the deadline

## How to migrate

### Prerequisites

1. Export your data from Trello to `tasks.json`
1. Install [NodeJS](https://nodejs.org/en/)
1. Install [Things](https://culturedcode.com/things/)
1. Download [import.js](https://raw.githubusercontent.com/DavidLozzi/TrelloToThings/master/import.js) and place it in the same folder as your `tasks.json` file

### Migrate

1. Open terminal, navigate to the folder containing `tasks.json` and `import.js`
1. Type in `node import.js`
1. Your script will run, opening your Things app. Depending on how many cards you have, it could freeze up for a little as it's adding.
1. Once done, you'll see in the script `DONE!`. If there are any errors, the line before will share that.

### Handling Errors

I did what I could to remove many errors due to formatting of content, however I couldn't catch them all. When I run this on over 150 tasks, I got 8 errors. I suggest if it does error, review the content in question, it might be easy enough to create those tasks manually.

## Issues, requests, etc

If you have an issue with the script, or want to request a change, use the [Issues](https://github.com/DavidLozzi/TrelloToThings/issues) tab and I'll see what I can do.

## How to contribute

Want to add more to this? Make a pure shell version removing the need for Node? Please do! Just submit a PR, nothing fancy.

## Like what you see

[Buy me a coffee](https://www.buymeacoffee.com/davidlozzi)
