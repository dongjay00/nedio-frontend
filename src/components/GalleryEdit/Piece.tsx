import styled from 'styled-components';
import { memo } from 'react';
import { flexCenter, hoverOrange, posterShadow } from '../../styles/mixins';

import { defaultPoster } from '../../constants/images';
import { ImageInfo, PieceButtonProps } from '../../types/GalleryEdit';

function Piece({ openModal, halls, hallIndex, pieceIndex }: PieceButtonProps) {
  const piece: ImageInfo = halls[hallIndex]?.imagesData[pieceIndex];

  const thumbnail = piece.imageUrl;

  return (
    <Button
      type="button"
      onClick={() => openModal({ hallIndex, pieceIndex })}
      thumbnail={thumbnail}
    >
      {thumbnail ? '' : '작품 등록'}
    </Button>
  );
}

export default memo(Piece);

interface ButtonStyle {
  thumbnail: string | null;
}

const Button = styled.button<ButtonStyle>`
  ${flexCenter}
  margin-right: 1em;

  padding: 0.3em;
  width: 50px;
  height: 50px;

  ${posterShadow}

  background-size: 100% 100%;
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : `url(${defaultPoster})`};

  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  ${hoverOrange}

  padding: 0.5em;
`;