import { ObjectId, Schema, Types, model } from "mongoose";

type ElementPath = {
  [htmlTag: string]: ElementPath | null,
}
type ArgumentType = 'str' | 'num';
type Operator = '>' | '>=' | '==' | '<=' | '<';

interface ISurveillanceEntry {
  isFullPage: boolean;
  surveilledElementPath: ElementPath;
  argumentType: ArgumentType;
  operation: Operator;
  argument: string;
  startOffset: number;
  surveillanceStringLength: number;
  frequency: number;
  name: string;
  timestamp: Date;
  profileId: ObjectId;
  isComplete: boolean;
  isError: boolean;
}

const surveillanceEntrySchema = new Schema<ISurveillanceEntry>({
  isFullPage: { type: Boolean, required: true },
  surveilledElementPath: { type: Object },
  argumentType: { type: String, required: true },
  operation: { type: String },
  argument: { type: String, required: true },
  startOffset: { type: Number },
  surveillanceStringLength: { type: Number },
  frequency: { type: Number, required: true },
  name: { type: String, required: true },
  timestamp: { type: Date, required: true },
  profileId: { type: Types.ObjectId, required: true },
  isComplete: { type: Boolean, required: true },
  isError: { type: Boolean, required: true },
});

const SurveillanceEntry = model<ISurveillanceEntry>('SurveillanceEntry', surveillanceEntrySchema);
export default SurveillanceEntry;