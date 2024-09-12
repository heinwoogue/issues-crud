import { NextFunction, Response, Request } from "express";
import { Issue, IssueWithId } from "./issues.model";
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

  public createOne = async (req: Request<{}, IssueWithId, Issue>, res: Response<IssueWithId>, next: NextFunction):  Promise<Response | void> => {
    try {
      const createdTodo = await this.issueService.createOne(req.body);
      res.status(201).json(createdTodo);
    }catch(error){
      next(error);
    }
  }

  public updateOne = async (req: Request<{id: string}, IssueWithId, Issue>, res: Response<IssueWithId>, next: NextFunction): Promise<Response | void> => {
    try {
      const result = await this.issueService.updateOne(req.params.id, req.body);
  
      if(!result){
        res.status(404);
        throw new Error(`Todo with id: ${req.params.id} not found.`)
      }
  
      res.json(result)
    }catch(error){
      next(error);
    }
  }

  public deleteOne = async(req: Request, res: Response<void>, next: NextFunction): Promise<Response | void> => {
    try {
      const result = await this.issueService.findAndDelete(req.params.id);
  
      if(!result){
        res.status(404);
        throw new Error(`Todo with id: ${req.params.id} not found.`)
      }
  
      res.status(204).json();
    }catch(error){
      next(error);
    }
  }
}