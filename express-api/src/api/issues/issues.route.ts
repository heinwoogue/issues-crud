import { Router } from "express";
import IssueController from "./issues.controller";
import IssueService from "./issues.services";
import { validateRequest } from "../../middlewares";
import { Issue } from "./issues.model";

const router = Router();

const issueController = new IssueController(new IssueService());

router.get('/', issueController.findAll);

router.post(
  '/', 
  validateRequest(
    {
      body: Issue,
    }
  ),
  issueController.createOne
);

router.put(
  '/:id', 
  validateRequest(
    {
      body: Issue,
    }
  ),
  issueController.updateOne
);

router.delete(
  '/:id',
  issueController.deleteOne
);

export default router;