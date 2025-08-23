import fetcher from './common/fetcher';

export interface ImageUploadResponseDto {
  imageUrl: string;
  publicId: string;
}

export const postChattingImage = async (roomId: string, imageUrl: string) => {
  const formData = new FormData();

  formData.append('image', {
    uri: imageUrl,
    type: 'image/jpeg',
    name: 'upload.jpg',
  } as any);

  try {
    const response = await fetcher.post<{
      success: boolean;
      data: ImageUploadResponseDto;
    }>(`/image/chat?roomId=${roomId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postReviewImage = async (imageUrl: string) => {
  const formData = new FormData();

  formData.append('image', {
    uri: imageUrl,
    type: 'image/jpeg',
    name: 'upload.jpg',
  } as any);

  try {
    const response = await fetcher.post<{
      success: boolean;
      data: ImageUploadResponseDto;
    }>(`/image/review`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postProductImage = async (imageUrl: string) => {
  const formData = new FormData();

  formData.append('images', {
    uri: imageUrl,
    type: 'image/jpeg',
    name: 'upload.jpg',
  } as any);

  try {
    const response = await fetcher.post<{
      success: boolean;
      data: ImageUploadResponseDto;
    }>(`/image/product`, formData);

    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
