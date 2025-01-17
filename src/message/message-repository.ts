import { readFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {}
  async Create(message: string) {}
}
