# wpp-sheets-party-list

`wpp-sheets-party-list` is a service created in order to facilitate the creation of list of events for parties via whatsapp integrating with google sheets. Organize the guest list quickly and easily, customize by courtesy list and guest list, and have real-time updates and feedback on how your list is doing.

This is a bot for you to create the integration of the excel list of your party's guests with the WhatsApp group.

You can only have one list in progress per group, if there is a list in progress, it will be displayed in the title of the group as In Progress.

You can look up commands on sheets using !help.

When a list is in progress, all messages sent in the group will be sent to Excel. Therefore, it is recommended that there are no parallel conversations other than names in the group.

You can submit names in several ways; send !ie to see all accepted forms.

When creating an event, you create it with the Guests, Free and Paid columns.

All names are inserted in the Guests column. To insert one in the Free column, send the prefix !free in your message.

You can find out more by running !help. You can make the bot stop listening for new names by running the /stop command.

Don't forget to call again when you want to send new names.

All successful operations are reacted to by the bot with an emoji. If not, contact whoever is organizing the event to find out the status of the list.

All names are accepted and formatted for capital case, in addition to being automatically organized in alphabetical order

### Service created using:

- typescript
- node
- mongodb
- googleapis
- whatsapp-web.js

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
MONGO_URI: connection url for your mongo database
SHEETS_CLIENT_ID: google sheet api client id
SHEETS_PROJECT_ID: google sheet api project id
SHEETS_AUTH_URI: google sheet api auth uri
SHEETS_TOKEN_URI: google sheet api token uri
SHEETS_AUTH_PROVIDER: google sheet api auth provider
SHEETS_CLIENT_SECRET: google sheet api client secret
```

You can get sheets variables by following this documentation: https://developers.google.com/sheets/api/quickstart/nodejs#set_up_your_environment

## Run Locally

Clone the project

```bash
  git clone https://github.com/vinibgoulart/wpp-sheets-party-list
```

Go to the project directory

```bash
  cd wpp-sheets-party-list
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

## API Reference

| Input    | Description                                                | Require a Sheet |
| :------- | :--------------------------------------------------------- | :-------------- |
| `!help`  | Show all commands                                          | False           |
| `!hiw`   | Explanation of how it works                                | False           |
| `!ie`    | Show name input examples                                   | False           |
| `!sc`    | Create a sheet with `Guests`, `Free` and Paid columns      | False           |
| `!sd`    | See the details of the current sheet                       | True            |
| `!sf`    | Ends the list, making it possible to start a new one       | True            |
| `!stop`  | Stop listening to new names                                | True            |
| `!start` | Start listening to new names                               | True            |
| `!free`  | Use replying to a message to add a name to the Free column | True            |
| `!paid`  | Use replying to a message to add a name to the Paid column | True            |

## Run with docker

Create an image

```bash
  docker build -t wpp-bot .
```

Run the image

```bash
  docker run -p 3000:3000 wpp-bot
```
