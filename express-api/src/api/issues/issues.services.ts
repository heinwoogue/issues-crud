
import { Issue, Issues, IssueWithId } from './issues.model';
import { InsertOneResult, ObjectId, WithId } from "mongodb";

export default class IssueService {

  public async findAll(): Promise<IssueWithId[]>{
    const result = await Issues.find().toArray();
    return result;
  }

  public async createOne(issue: Issue): Promise<IssueWithId>{
    const insertResult = await Issues.insertOne(issue);
    if(!insertResult.acknowledged){
      throw new Error('Error inserting Todo.')
    }
    return {
      ...issue,
      _id: insertResult.insertedId
    }
  }

  public async findAndDelete(id: string): Promise<{_id: ObjectId} | null>{
    const result = await Issues.findOneAndDelete(
      {
        _id: new ObjectId(id),
      }
    );

    return result;
  }

  public async updateOne(id: string, issue: Issue): Promise<IssueWithId | null>{
    const result = await Issues.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },{
        $set: issue
      }, {
        returnDocument: 'after'
      }
    )

    return result;
  } 
}