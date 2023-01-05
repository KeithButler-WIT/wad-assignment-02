import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ActorSchema = new Schema({
  profile_path: { type: String },
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  popularity: { type: Number },
  favourite: { type: Boolean},
});

ActorSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

ActorSchema.statics.findByActorDBName = function (name) {
  return this.findOne({ name: name });
};

ActorSchema.statics.findByActorDBPopularity = function (popularity) {
  return this.findOne({ popularity: popularity });
};

export default mongoose.model('Actors', ActorSchema);
