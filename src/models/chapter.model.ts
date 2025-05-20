import { model, Schema } from 'mongoose'
import { Chapter } from '~/types/chapter.type'

const ChapterSchema = new Schema<Chapter>(
  {
    title: {
      type: String,
      required: true
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    },
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
      }
    ],
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const ChapterModel = model<Chapter>('Chapter', ChapterSchema)

export default ChapterModel
