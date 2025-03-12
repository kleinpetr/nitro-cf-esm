import { uuidv4 } from '@develit-io/workers-sdk'

export default defineEventHandler((event) => {
  return uuidv4();
});
