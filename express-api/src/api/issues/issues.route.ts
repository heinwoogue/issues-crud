import { Router } from "express";
import IssueController from "./issues.controller";
import IssueService from "./issues.services";

const router = Router();

const issueController = new IssueController(new IssueService());

router.get('/', issueController.findAll);

export default router;