import { NextFunction, Response, Request } from "express";
import { IssueWithId } from "./issues.model";
import IssueService from "./issues.services";


export default class IssueController {
  issueService = new IssueService();

  constructor(issueService: IssueService){
    this.issueService = issueService;
  }

  public findAll = async (req: Request, res: Response<IssueWithId[]>, next: NextFunction):  Promise<Response | void> => {
    try {
      const result = await this.issueService.findAll();
      res.json(await result);
    }catch(error){
      next(error);
    }
  }

}