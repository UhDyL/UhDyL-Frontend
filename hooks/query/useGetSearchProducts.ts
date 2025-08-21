import {
  SearchResponseDto,
  SortType,
  getSearchedItems,
} from '@/api/product.api';

import { Category } from '@/types/categoryType';
import { useMutation } from '@tanstack/react-query';

export const useGetSearchProducts = () => {
  return useMutation<
    SearchResponseDto[],
    Error,
    { keyword: string; category: Category; sort: SortType }
  >({
    mutationFn: ({ keyword, category, sort }) =>
      getSearchedItems(keyword, category, sort),
  });
};
