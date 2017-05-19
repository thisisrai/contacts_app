## Specifications

Complete as many of the specs (checkboxes) as you can.

#### General: Code Quality, Git Flow, Etc.

- [x] Variables, functions, files, CSS classes, etc. have appropriate and meaningful names.
    <br>Avoid generic, vague or too-short names (e.g. `string`, `stuff`, `x`)
- [x] HTML, CSS, and JS files are well formatted with consistent spacing and indentation.
    <br>At the very least: tags in HTML and brackets in JavaScript are opened/closed on the same indent level; there are line breaks between style definitions in CSS and between function declarations in JavaScript.
- [x] Git commit history shows clear progression through different features, with concise and descriptive commit messages.
    <br>Commit messages should summarize what changes are being introduced.
- [x] There are at least two commits per day but ideally a lot more.
    <br>It's OK to commit incomplete/draft code. The important thing is to keep a good pace of development and show how your code evolved toward your solution.
- [x] Your artifact (final project) uses the [starter code][starter-code-zip].
- [x] Your artifact is published to a GitHub repository.

#### Pages and Routes

There are three different pages, each with their own route.

- [x] The list of all contacts can be viewed at the _root_ route, `/`.
- [ ] Individual contacts can be viewed in more detail at the route `/contacts/:id`, where `:id` is a contact record id from the database.
    <br>For example, visiting the route `/contacts/3` would show the contact with the database id 3.
- [x] New contacts can be created by visiting the route `/contacts/new` and submitting the form.

#### Database

Update the database schema so that your app can store all the necessary information.

- [x] Database table `contacts` has fields for contact name, email address, phone number, home address (separate fields for: street, city, state, country, and zip code), birthday, and personal website.
- [x] Columns in database table use appropriate data types.
- [x] Your app uses `pg`, `pg-promise` or `knex` to communicate with a postgres server.

There are scripts defined to import contact data and load the schema:
- [x] `$ npm run schema` loads the schema (`schema.sql`) into the database
- [x] `$ npm run import` imports the data in `contacts_full.sql` into the database

#### User Stories

Users of the app have the ability to take the following actions.

##### Stage One: MVP

- [x] When a user is viewing the list page (`/`), they see all of their contacts.
- [x] On the list page, a user can see a list of all contacts' names sorted alphabetically by first name.
- [ ] When a user is viewing the list page (`/`), they can click on individual contacts to go to the corresponding detail page for the contact (`/contacts/:id`).
- [ ] On the contact detail page, a user can see the contact's name, email address, phone number, home address (including: street, city, state, country, and zip code), birthday, and personal website.
- [x] When a user is viewing the list page (`/`), they can click on a link to "Add Contact", which takes them to the new contact page (`/contacts/new`).
- [ ] When a user fills out and submits the new contact form at `/contacts/new`, they are redirected to the "detail" page for the new contact.
    <br>For example, if a user creates a new contact "Ada Lovelace", then after submitting the form they would be redirected to the contact page for Ada Lovelace (`/contacts/<id>`, where `<id>` is the record id from the database corresponding to the new contact).

##### Stage Two: Fully-Featured

- [ ] On the contact list page, a user can search for contacts by name.
- [ ] When a user searches for a contact by name, all contacts whose name matches the search query are shown in a new `/search` page.
- [ ] On the contact detail page, a user can see an [embedded Google Map](https://developers.google.com/maps/documentation/embed/) with the contact's home address pre-loaded.
- [ ] When a user clicks on the "Delete" button for a contact, that contact record is delete from the database and the user is redirected to the contact list page (`/`).
- [ ] Users can delete a contact from either the contacts list page or contact detail page.

#### User Interface

The user interface matches the designs in the [mockups](#mockups).

- [x] The entire page content should be constrained by a centered page column.
- [x] The site header has a link to the homepage.
- [x] The site header has a link to the new contact page (`/contacts/new`).
- [ ] The site header has a a text input that lets you fuzzy search for contacts.
- [x] The color of the header, link text, etc. are exactly the same as the colors in the mockups.
  - Background: `#50E3C2` (teal)
  - Header, button: `#4990E2` (blue)
  - Default text: `#4A4A4A` (dark grey)
  - Secondary text: `#9B9B9B` (light grey)
  - Link text: `#002653` (dark blue)
  - Delete links: `#D0011B` (red)
- [x] The font across the whole site is monospace.
- [x] The base font-size of the site is 16px.
- [ ] The List View (/) looks the same as in the mockup (except with different contact data).
- [ ] The Detail View (/contacts/:id) looks the same as in the mockup (except with different contact data).
- [ ] The New Contact View (/contacts/new) looks the same as in the mockup (except with different contact data).
- [ ] The Search View (/search) looks the same as in the mockup (except with different contact data).

#### Templating and Includes

Use HTML templating to build your web pages and embed dynamic data.

- [x] The server uses the [EJS templating language][ejs] to build HTML.
- [x] Each route that renders HTML uses its own EJS template.
- [x] Each page template shares the same layout.
  <br/>The means the `<head>` is consistent across all paged and is not duplicated.
- [x] Each page template shared the same nav bar.
  <br/>Each page has the same nav bar but the code is not duplicated and each page template uses the same page header ejs template (eg: `header.ejs`).

#### Browser Interactivity

- [ ] When clicking a link that will delete a contact, a confirmation prompt displays confirming the user wants to delete the contact. Contacts are only deleted if the user "confirms".
- [ ] When a user attempts to submit the new contact form without a value in the name field, the form is not submitted and a form validation error is displayed at the top of the page in red.
