// const path = require("node:path");
// const fs = require("node:fs/promises");
// class ContactsRepository {
//   dbPath = path.join(process.cwd(), "../db/contacts.json");
//   async readDB() {
//     const content = await fs.readFile(this.dbPath);
//     const entries = JSON.parse(content.toString());
//     return entries;
//   }
//   writeFile() {}
//   async findAll() {
//     const db = await this.readDB();
//     return db;
//   }
//   findOneById(id) {}
//   create() {}
// }
// const contactRepository = new ContactsRepository();
