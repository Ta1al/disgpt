import { Snowflake } from "discord.js";
import { Schema, model } from "mongoose";

const SettingsSchema = new Schema<Settings>({
  guildId: { type: String, required: true },
  channels: { type: [String], default: [] },
  whitelistedUsers: { type: [String], default: [] }
});

export default model<Settings>("settings", SettingsSchema);

export interface Settings {
  guildId: Snowflake;
  channels: Snowflake[];
  whitelistedUsers: Snowflake[];
}

