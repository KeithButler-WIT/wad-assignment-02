import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ActorSchema = new Schema({
  profile_path: { type: String },
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  popularity: { type: Number },
});

ActorSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Actors', ActorSchema);
