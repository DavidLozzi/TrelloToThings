# Trello to Things

[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)

A super simple migration tool to move out of [Trello](https://trello.com) into [Things](https://culturedcode.com/things/). I won't go into the reasons to make this move, but if you're looking to, this little script will help.

## What migrates

TRELLO IMAGE

THINGS IMAGE

1. Your lists in Trello come over as Projects, and associated cards are added within that list
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
1. Download [import.js]() and place it next to your `tasks.json` file
1. Open terminal, navigate to the folder containing `tasks.json` and `import.js`
1. Type in `node import.js`
1. Your script will run, opening your Things app. Depending on how many cards you have, it could freeze up for a little as it's adding.
1. Once done, you'll see in the script `DONE!`. If there are any errors, the line before will share that.

## Issues, requests, etc

If you have an issue with the script, or want to request a change, use the [Issues]() tab and I'll see what I can do.

## How to contribute

Want to add more to this? Make a pure shell version removing the need for Node? Please do! Just submit a PR, nothing fancy.

## Like what you see

[Buy me a coffee](https://www.buymeacoffee.com/davidlozzi)
