# Trello Clone

Live link - https://timely-vacherin-609697.netlify.app/

Note - Press Enter key to add new task after input

## Questions

### If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed

Currently, I have hardcoded 4 boards as per the task's requirement, but to tackle the above situation I would have a table to store all stages in a particular board and CRUD apis to handle boards as well.

### If users can comment on tasks

I would add a comments array to my existing task object and append all the comments to the particular task's comments feild.

### How will you do error handling?

I would handle errors by using try catch block taking different possible scenarios.
