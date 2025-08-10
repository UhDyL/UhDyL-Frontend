export type LikedReviewBoxProps = {
  sellerImgUrl: string;
  itemName: string;
  price: string;
  sellerName: string;
  isLiked: boolean;
  toggleLiked: () => void;
};
