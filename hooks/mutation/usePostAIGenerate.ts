import { WriteFormData } from '@/store/useFormStore';
import { postAIGenerate } from '@/api/product.api';
import { useMutation } from '@tanstack/react-query';

export const usePostAIGenerate = () => {
  return useMutation({
    mutationKey: ['postAIGenerate'],
    mutationFn: (formData: WriteFormData) => postAIGenerate(formData),
  });
};
