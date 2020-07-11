import mongoose from 'mongoose';

import gradeModel from './gradeMode.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose);

export { db };