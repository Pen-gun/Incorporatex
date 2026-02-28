import { Router } from 'express';
import * as companyController from '../controller/company.controller';

const router = Router();

router.post('/', companyController.createCompany);
router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getCompanyById);
router.patch('/:id', companyController.updateCompany);
router.patch('/:id/submit', companyController.submitCompany);
router.put('/:id/shareholders', companyController.replaceShareholders);

export default router;
