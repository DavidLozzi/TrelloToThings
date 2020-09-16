/* Created with love by David Lozzi, @DavidLozzi, www.davidlozzi.com */

const { execSync } = require("child_process");

console.log('\nImporting from Trello\'s JSON to Things\n\n');

const tasks = require('./tasks.json');

// dont want full URL encoding, just a few characters
const encodeText = (text) => text
  .replace(/\n/ig,'\u000A')
  .replace(/;/ig, '%3B')
  .replace(/\?/ig, '%3F')
  .replace(/"/ig,'%22')
  .replace(/\%/ig, '\u0025')

// console.log(tasks)

// CREATE LISTS AS PROJECTS
console.log('importing lists');
tasks.lists
  .filter(list => !list.closed)
  .forEach(list => {
    execSync(`open "things:///add-project?title=${list.name}"`)
    console.log(list.name);
  });

// ADD TASKS
let cnt = 0;
const errors = [];
console.log('\nimporting cards')
tasks.cards
  .filter(card => !card.closed)
  .forEach(card => {
    const list = tasks.lists.find(list => list.id === card.idList && !list.closed)
    if(list) { // every card has to be in an active list
      const listName = list.name;
      const deadline = card.due ? `&deadline=${card.due}` : '';
      
      let tags = card.labels && card.labels.length > 0 && card.labels.map(label => label.name).join(',');
      tags = tags ? `&tags=${tags}` : '';
      
      let actions = tasks.actions
        .filter(action => action.data.text && action.data.card && action.data.card.id === card.id)
        .map(action => `${new Date(action.date).toDateString()} - ${action.data.text}`)
        .join('\n');
      
      if(actions) actions = encodeText(`\n\nActivity\n${actions}`);
          
      let checkListItems = tasks.checklists.filter(list => list.idCard === card.id);
      if(checkListItems) {
        checkListItems = checkListItems.map(list => list.checkItems.map(item => encodeText(item.name)).join('\u000A'));
        checkListItems = `&checklist-items=${checkListItems}`;
      }
      
      const execString = `open "things:///add?title=${encodeText(card.name)}&notes=${encodeText(card.desc)}${actions}&list=${listName}${deadline}${tags}${checkListItems}"`;
      try {
        console.log(`${card.name} into ${listName}`)
        cnt++;
        execSync(execString);
        // console.log(execString);
      } catch (err) {
        errors.push({
          err,
          card,
          listName,
          execString
        });
      }
    }
  })

if(errors.length > 0) {
  console.log('\n\n\n*******\n\n\nTHE FOLLOWING ERRORED\n');
  errors.forEach((error, index) => {
    console.log(`\n\nError #${index + 1}`)
    console.log(`\n${error.listName}\\${error.card.name} - ${error.card.url}\n`)
    console.log(error.execString)
    console.log('\nError Message:')
    console.log(error.err.toString())
  })
}

console.log(`\n\nthere were ${errors.length} errors${errors.length > 0 ? ', scroll up to review, you may have to manually copy these.' : ', enjoy!'}`)
console.log(`DONE! Processed ${cnt} cards`)