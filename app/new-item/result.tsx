import { JustBox, ResultContainer } from './newItem.styled';
import { useLocalSearchParams, useRouter } from 'expo-router';

import Button from '@/components/common/button/Button';
import EditItemContent from '@/components/farmer/editItemContent/EditItemContent';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import TwoButtonTopBar from '@/components/twoButtonTopBar/TwoButtonTopBar';
import { useGetPublicId } from '@/hooks/mutation/useGetPublicId';
import { usePostProductItem } from '@/hooks/mutation/usePostProductItem';
import { useState } from 'react';

export default function ResultScreen() {
  const router = useRouter();
  const {
    title: paramTitle,
    description,
    price,
    images,
    categories,
  } = useLocalSearchParams();

  const { mutate: postProduct } = usePostProductItem();
  const { mutateAsync: getPublicId } = useGetPublicId();

  const categoryArr: string[] = categories
    ? JSON.parse(categories as string)
    : [];
  const imageArr: string[] = images ? JSON.parse(images as string) : [];
  const titleStr = Array.isArray(paramTitle) ? paramTitle[0] : paramTitle;
  const descriptionStr = Array.isArray(description)
    ? description[0]
    : description;
  const priceNum = price ? Number(price) : 0;

  const [title, setTitle] = useState<string>(titleStr);
  const [content, setContent] = useState<string>(descriptionStr);

  const handleSubmit = async () => {
    try {
      const ImageObj = await Promise.all(
        imageArr.map(async (url) => {
          const { publicId } = await getPublicId({
            imageUrl: url,
            imageType: 'PRODUCT_IMAGE',
          });
          return { url, publicId };
        })
      );

      postProduct(
        {
          categories: categoryArr,
          description: content,
          images: ImageObj,
          price: priceNum,
          title,
        },
        { onSuccess: () => router.push('/farmer') }
      );
    } catch (err) {
      console.error('상품 등록 실패:', err);
    }
  };

  return (
    <ResultContainer>
      <TwoButtonTopBar />
      <ImageSlideBox price={priceNum.toString()} images={imageArr} />

      <EditItemContent
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />

      <JustBox>
        <Button size='full' text='작성 완료' onClick={handleSubmit} />
      </JustBox>
    </ResultContainer>
  );
}
