import { JustBox, ResultContainer } from './newItem.styled';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import Button from '@/components/common/button/Button';
import EditItemContent from '@/components/farmer/editItemContent/EditItemContent';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import TwoButtonTopBar from '@/components/common/twoButtonTopBar/TwoButtonTopBar';
import { usePostProductItem } from '@/hooks/mutation/usePostProductItem';

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

  const categoryArr: string[] = categories
    ? JSON.parse(categories as string)
    : [];
  let imageArr: { url: string; publicId: string }[] = [];
  if (images) {
    const parsed = JSON.parse(images as string);
    imageArr = Array.isArray(parsed) ? parsed : [parsed];
  }

  const titleStr = Array.isArray(paramTitle) ? paramTitle[0] : paramTitle;
  const descriptionStr = Array.isArray(description)
    ? description[0]
    : description;
  const priceNum = price ? Number(price) : 0;

  const [title, setTitle] = useState<string>(titleStr);
  const [content, setContent] = useState<string>(descriptionStr);

  const handleSubmit = async () => {
    try {
      postProduct(
        {
          categories: categoryArr,
          description: content,
          images: imageArr,
          price: priceNum,
          title,
        },
        { onSuccess: () => router.push('/farmer') }
      );
    } catch (err) {
      console.error('상품 등록 실패:', err);
    }
  };

  useEffect(() => {
    console.log(' 이미지지 : ', imageArr);
  }, []);

  return (
    <ResultContainer>
      <TwoButtonTopBar />
      <ImageSlideBox
        price={priceNum.toString()}
        images={imageArr.map((img) => img.url)}
      />

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
