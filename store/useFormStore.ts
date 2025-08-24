import { create } from 'zustand';

export type WriteFormData = {
  condition: string;
  pricePerWeight: string;
  categories: string[];
  images: { url: string; publicId: string }[];
  price: number;
  tone: string;
};

type FormStore = {
  formData: WriteFormData;
  setFormData: (data: Partial<WriteFormData>) => void;
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
