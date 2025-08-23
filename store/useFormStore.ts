import { create } from 'zustand';

type FormData = {
  condition: string;
  pricePerWeight: string;
  categories: string[];
  images: string[];
  price: number;
  tone: string;
};

type FormStore = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    condition: '',
    pricePerWeight: '',
    categories: [],
    images: [],
    price: 0,
    tone: '',
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () =>
    set({
      formData: {
        condition: '',
        pricePerWeight: '',
        categories: [],
        images: [],
        price: 0,
        tone: '',
      },
    }),
}));
