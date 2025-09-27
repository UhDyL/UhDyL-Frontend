import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import Button from '@/components/common/button/Button';
import { Container } from './editItem.styled';
import EditItemContent from '@/components/farmer/editItemContent/EditItemContent';
import ImageSlideBox from '@/components/itemDetail/imageSlideBox/ImageSlideBox';
import LevelAndGoHome from '@/components/farmer/levelAndGoHome/LevelAndGoHome';
import { useGetProductDetail } from '@/hooks/query/useGetProductDetail';
import { usePatchItemInfo } from '@/hooks/mutation/usePatchItemInfo';
import { useState } from 'react';

export default function EditItem() {
  const { id } = useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id;
  const { data: itemInfo } = useGetProductDetail(+idStr);
  const [title, setTitle] = useState<string>(itemInfo?.title ?? '');
  const [content, setContent] = useState<string>(itemInfo?.description ?? '');
  const router = useRouter();
  const { mutate: editItemInfo } = usePatchItemInfo(+idStr);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 2 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <Container>
          <LevelAndGoHome level={3} />
          <ImageSlideBox
            price={itemInfo?.price.toString() ?? ''}
            images={itemInfo?.images ?? []}
          />
          <EditItemContent
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />
          <Button
            size='full'
            onClick={() => {
              editItemInfo(
                {
                  title: title,
                  description: content,
                  price: itemInfo?.price ?? 0,
                },
                { onSuccess: () => router.push('/sell-list') }
              );
            }}
            text='작성 완료'
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
