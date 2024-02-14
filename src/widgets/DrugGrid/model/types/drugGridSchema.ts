import { medicineCardSchema } from 'entities/MedicineCard';

export interface drugGridSchema { // схема слайса для сетки лекарств
	drugsList: medicineCardSchema[];
	categoryName: string;
}
