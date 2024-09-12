
import { Issues, IssueWithId } from './issues.model';

export default class IssueService {

  public async findAll(): Promise<IssueWithId[]>{
    const result = await Issues.find().toArray();
    return result;
  }

}